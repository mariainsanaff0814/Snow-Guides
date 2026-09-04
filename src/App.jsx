import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  if (!loadingFinished) {
    return (
      <LoadingScreen
        onComplete={() => setLoadingFinished(true)}
      />
    );
  }

  return <HomePage />;
}

export default App;