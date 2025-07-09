import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";

const Banner = ({ onMenuToggle }) => {
    return (
        <div className="banner">
            <div>
                <button onClick={onMenuToggle}><FaBars /></button>
                <h1>Sodam Shop</h1>
                <PiUserCircleFill />
                <MdOutlineShoppingBag />
            </div>
        </div>
    );
};

export default Banner;