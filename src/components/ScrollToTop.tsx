import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const ScrollToTop:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup when unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
}
