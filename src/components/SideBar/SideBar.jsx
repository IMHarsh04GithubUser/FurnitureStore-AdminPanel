import { LuPanelLeftClose } from "react-icons/lu";
import Logo from '../../../../Furniture-Store/src/assets/Logo.jpeg'
import { LayoutDashboard } from 'lucide-react';
import { Armchair } from 'lucide-react';
import './SideBar.css'
import { useContext } from "react";
import AdminContext from "../../AdminContext/Admincontext";
import { NavLink } from "react-router-dom";
const SideBar = () => {
    const {handleclosesidebar} = useContext(AdminContext)
  return (
    <>
        <div className="sidebar_container border w-64 px-5 flex flex-col gap-6 overflow-scroll py-6 shadow-2xl absolute z-30 -my-20 bg-white">
            <div className="sidebar-heading flex justify-between items-center gap-10 p-2">
                <div className="logo">
                    <img src={Logo} alt="Logo" className=" h-20 w-20 rounded-full" />
                </div>
                <LuPanelLeftClose className="h-8 w-8 text-cyan-800 cursor-pointer " onClick={handleclosesidebar} />
            </div>
            <div className="siderbar-main-home flex flex-col gap-5">
                <div className="main-home-text font-bold text-cyan-500 text-sm">MAIN HOME</div>  
                <div className="main-home-dashboard-icon flex items-center gap-5">
                <LayoutDashboard color="red" size='34'/>
                <p className="font-semibold">Dashboard</p>
                </div>
            </div>
            <div className="siderbar-main-pages flex flex-col gap-5">
                <div className="main-home-text font-bold text-cyan-500 text-sm">PAGES</div>  
                <div className="main-home-dashboard-icon flex items-center gap-5 cursor-pointer">                
                <NavLink to='add-product'>
                    <div className="products-to-add flex gap-5 cursor-pointer">
                    <Armchair />
                    <div className="product-add font-semibold">Product</div>
                    </div>
                </NavLink>    
                </div>
                
            </div>
            
        
        </div>
    </>
  )
}

export default SideBar