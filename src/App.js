import { useState } from "react";
import Banner from "./Banner";
import Gnb from "./Gnb";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <Banner onMenuToggle={handleMenuToggle} />
      <Gnb isOpen={isMenuOpen} />
    </div>
  );
};

export default App;