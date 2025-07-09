import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <div className="menu-btn">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MdOutlineMenu />
        </button>       
      </div>
      <div className="menu-wrapper">
        <ul className="menu">
          <li>New</li>
          <li>Living</li>
          <li>Dining</li>
          <li>BedRoom</li>
          <li>Decor</li>
        </ul>     
      </div>
    </nav>
  );
};

export default Gnb;