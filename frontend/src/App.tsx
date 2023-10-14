import { useState, useEffect } from "react";
import { Main } from "./components/Main";
import { Loading } from "./components/Loading";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => { 
    setTimeout(() => { 
      setIsLoading(false); 
    }, 1000); 
}, []);

  return (
    <>
      {isLoading ? <Loading /> : <Main />}
    </>
  )
}

export default App
