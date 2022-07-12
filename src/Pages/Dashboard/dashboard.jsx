import Sidebar from "../../Components/SideBar/sidebar";
import AppNavbar from "../../Components/AppNavbar/appnavbar";
import Analytic from "../../Components/SideBarComponents/Analytic/analytic";
import Purchases from "../../Components/SideBarComponents/Purchases/purchases";
import "./dashboard.scss";
import { Routes,Route } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <AppNavbar />
    <div className="flex w-full">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        {/* <Purchases/> */}
        <Routes>
          <Route exact path="/analytic" element={<Analytic/>}/>
          <Route path="/purchases" element={<Purchases/>}/>
        </Routes>
       </div>

    </div>
    </div>
  );
}

export default Dashboard;
