import { useState, useEffect } from "react";
import "./Intro.css";

export const Intro: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById('resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro">
      <header className={isLoading ? 'header' : 'header header--loaded'}>
        <h1>Jonas The Developer</h1>
        <button onClick={handleClickScroll}>Press here to start</button>
        <p>© {new Date().getFullYear()} JONAS THERS</p>
      </header>
    </section>
  );
};
