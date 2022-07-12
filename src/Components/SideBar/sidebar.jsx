import arrow from "../../Images/arrow.png";
import plane from "../../Images/plane.png";
import dashboard from "../../Images/dashboard.png";
import sales from "../../Images/sales.png";
import purchases from "../../Images/cart.png";
import accounting from "../../Images/account.png";
import banking from "../../Images/bank.png";
import payroll from "../../Images/payroll.png";
import reports from "../../Images/reports.png";
import analytics from "../../Images/analytic.png";
import settings from "../../Images/setting.png";
import logout from "../../Images/logout.png";
import creditcard from "../../Images/creditcard.png";
import { Link } from 'react-router-dom';
import "./sidebar.scss";


function Sidebar() {
    const menuList = [
        { id: 'welcome', name: "Welcome", image: plane, link: "/dashboard/analytic" },
        { id: 'dashboard', name: "Dashboard", image: dashboard, link: "/dashboard/purchases" },
        { id: 'sales', name: "Sales", image: sales, link: "/dashboard/analytic" },
        { id: 'purchases', name: "Purchases", image: purchases, link: "/dashboard/analytic" },
        { id: 'accounting', name: "Accounting", image: accounting, link: "/dashboard/analytic" },
        { id: 'banking', name: "Banking", image: banking, link: "/dashboard/analytic" },
        { id: 'payroll', name: "Payroll", image: payroll, link: "/dashboard/analytic" },
        { id: 'reports', name: "Reports", image: reports, link: "/dashboard/analytic" },
        { id: 'analytic', name: "Analytic", image: analytics, link: "/dashboard/analytic" },
        { id: 'settings', name: "Settings", image: settings, link: "/dashboard/analytic" },
    ];
    return (
        <>
            <div className="pt-7 pr-28 pl-16 sideBar">
                {menuList.map((item) => {
                    return (
                        <Link key={item.id} to={item.link}>
                            <div className="flex wrapLink mb-9 justify-between w-full">
                                <img className="w-5 h-5" src={item.image} alt={item.id} />
                                <p>{item.name}</p>
                                <img src={arrow} alt="arrow" className="w-2 h-2 mt-2" />
                            </div>
                        </Link>
                    )
                })}
                <div className="flex mt-10 logOut justify-between w-full">
                    <img src={logout} alt="logout" className="w-5 h-5" />
                    <p className="text-xs">Logout</p>
                    <div></div>
                </div>
            </div>
            <div className="pt-2 pr-28 pl-10 mb-4">
                <div className="flex mt-8 acceptPayment p-3 justify-between w-full">
                    <img className="w-8 h-8" src={creditcard} alt="creditcard" />
                    <p className="pt-1">Accept Payments</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
