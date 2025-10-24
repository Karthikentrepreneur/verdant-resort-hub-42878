import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-fade-out">
      <div className="text-center animate-scale-in">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
          <img
            src={logo}
            alt="Manvaasam Logo"
            className="w-56 h-auto mx-auto mb-6 relative z-10 drop-shadow-2xl"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-primary/70 animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-primary/50 animate-bounce shadow-lg shadow-primary/50" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
