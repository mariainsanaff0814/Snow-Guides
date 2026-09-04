import { useCallback, useEffect, useRef, useState } from "react";
import usePWAInstall from "../hooks/usePWAInstall";

export default function PWAInstallMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);
  const menuRootRef = useRef(null);
  const closeInstallUI = useCallback(() => {
    setIsMenuOpen(false);
    setShowIOSHelp(false);
  }, []);
  const { canInstall, isInstalled, isIOS, installApp } =
    usePWAInstall(closeInstallUI);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (isMenuOpen && !menuRootRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setShowIOSHelp(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleInstall = async () => {
    setIsMenuOpen(false);

    if (isIOS) {
      setShowIOSHelp(true);
      return;
    }

    await installApp();
  };

  return (
    <>
      <div className="app-menu" ref={menuRootRef}>
        <button
          type="button"
          className="menu-button"
          aria-label="Menú"
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
          aria-controls="app-menu-panel"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className="app-menu-panel" id="app-menu-panel" role="menu">
            {(canInstall || (isIOS && !isInstalled)) && (
              <button
                type="button"
                className="install-menu-option"
                role="menuitem"
                onClick={handleInstall}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 15v4h14v-4" />
                </svg>
                <span>
                  <strong>Instalar aplicación</strong>
                  <small>Agrega la guía a tu dispositivo</small>
                </span>
              </button>
            )}

            {isInstalled && (
              <div className="install-menu-status" role="status">
                <strong>Aplicación instalada</strong>
                <small>La guía ya está en tu dispositivo</small>
              </div>
            )}

            {!canInstall && !isIOS && !isInstalled && (
              <div className="install-menu-status" role="status">
                <strong>Instalación no disponible</strong>
                <small>Tu navegador todavía no ofrece la instalación</small>
              </div>
            )}
          </div>
        )}
      </div>

      {showIOSHelp && (
        <div
          className="install-help-overlay"
          onClick={() => setShowIOSHelp(false)}
        >
          <section
            className="install-help-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-help-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="install-help-header">
              <h2 id="install-help-title">Instalar aplicación</h2>
              <button
                type="button"
                className="close-button"
                aria-label="Cerrar instrucciones"
                onClick={() => setShowIOSHelp(false)}
              >
                ×
              </button>
            </div>
            <p>
              Para instalar la aplicación en iPhone o iPad, abre el menú
              Compartir de Safari y selecciona &apos;Agregar a pantalla de
              inicio&apos;.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
