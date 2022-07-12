import logo from "../../Images/logo.png";
import bluearrow from "../../Images/arrow-blue.png";
import bluimg from "../../Images/blue-img.png";
import notification from "../../Images/notification.png";
import arrowdown from "../../Images/arrow-down.png";
import "./appnavbar.scss";

function AppNavbar() {
    return (
        <div className="flex w-full justify-between p-5 navBar">
            <div className="w-1/4 ">
                <div className="w-60 h-12 pt-2 pl-4 pl-4 pb-12 flex bg-white navBarLogo p-4 rounded-2xl justify-between">
                <div className="logo">
                    <img src={logo} alt="logo" className="w-10 h-10"/>
                </div>
                <h2 className="pt-1">HostBeak</h2>
                <div className="arrow pt-2"><img className="mt-2 w-2 h-2" src={bluearrow} alt="arrow" /></div>
                </div>
            </div>

            <div className="flex w-3/4 justify-end navBarSide">
                <div className="notification mr-4"><img src={notification} alt="notification" className="w-10 h-10"  /></div>
                <div className="blueimg"><img src={bluimg} alt="bluimg" className="w-10 h-10" /></div>
                <div className="arrow flex w-1/5 justify-around mt-2"><h6>Ogoluwa</h6><img src={arrowdown} alt="arrowdown" className="w-2 h-2 mt-2" /></div>
            </div>
        </div>
    );
};

export default AppNavbar;