import { useCallback, useEffect, useState } from "react";

let deferredInstallPrompt = null;
let installedInSession = false;
const promptListeners = new Set();
const installedListeners = new Set();

const isStandaloneMode = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

const isIOSDevice = () =>
  /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
  (window.navigator.platform === "MacIntel" &&
    window.navigator.maxTouchPoints > 1);

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    promptListeners.forEach((listener) => listener(event));
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    installedInSession = true;
    promptListeners.forEach((listener) => listener(null));
    installedListeners.forEach((listener) => listener(true));
  });
}

export default function usePWAInstall(onInstalled) {
  const [installPrompt, setInstallPrompt] = useState(deferredInstallPrompt);
  const [isInstalled, setIsInstalled] = useState(
    () => installedInSession || isStandaloneMode(),
  );
  useEffect(() => {
    const handleInstalled = (installed) => {
      setIsInstalled(installed);
      onInstalled?.();
    };

    promptListeners.add(setInstallPrompt);
    installedListeners.add(handleInstalled);

    return () => {
      promptListeners.delete(setInstallPrompt);
      installedListeners.delete(handleInstalled);
    };
  }, [onInstalled]);

  const installApp = useCallback(async () => {
    const prompt = deferredInstallPrompt;

    if (!prompt || isInstalled) {
      return null;
    }

    await prompt.prompt();
    const choice = await prompt.userChoice;

    if (deferredInstallPrompt === prompt) {
      deferredInstallPrompt = null;
      promptListeners.forEach((listener) => listener(null));
    }

    return choice;
  }, [isInstalled]);

  return {
    canInstall: Boolean(installPrompt) && !isInstalled,
    isInstalled,
    isIOS: isIOSDevice(),
    installApp,
  };
}
