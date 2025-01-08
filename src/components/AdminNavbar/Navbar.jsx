import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useContext } from "react";
import AdminContext from "../../AdminContext/Admincontext";
import './Navbar.css'
import SideBar from "../SideBar/SideBar";
const Navbar = () => {
    const { handlechangetheme,handlesidebar,opensidebar, theme } = useContext(AdminContext)
    return (
        <>

        <div className={`Navbar-container nav-sections flex m-auto h-fit p-3 gap-10 items-center justify-between ${theme === 'black' ? 'shadow-cyan-900' : ''} shadow-xl`} style={theme ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'cyan', color: 'black' }}>
            <div className="nav-1 flex items-center gap-10">
                <div className="hamburger-icon rounded-full p-1">
                    <GiHamburgerMenu className="h-8 w-8 cursor-pointer" onClick={handlesidebar} />
                </div>
                <div className="admin-searchbar md:block md:rounded-lg md:px-5 md:py-1 md:border hidden">
                    <input type="search" name="Search Here" id="" placeholder="Search Here..." role="searchbox" aria-autocomplete="both" className="navbar-searchbar outline-none h-10 placeholder:text-md" />
                </div>
                <div className="background-theme">
                    {theme === 'white' ? (<><FaMoon className="rounded-full h-10 w-10 p-1 hover:bg-cyan-400 cursor-pointer hover:rounded-full hover:text-white transition" aria-label="Switch to dark mode" onClick={handlechangetheme} /></>) : (<><FiSun className="rounded-full animate-spin h-10 w-10 p-1 hover:bg-cyan-400 cursor-pointer hover:rounded-full hover:text-white transition" aria-label="Switch to light mode" onClick={handlechangetheme} /></>)}
                </div>
            </div>
            <div className="nav-2 md:flex md:items-center md:gap-10 hidden">
                <div className="admin-photo-name flex items-center gap-4">
                    <div className="border admin-photo rounded-full h-12 w-12">

                    </div>
                    <div className="admin-name-role md:cursor-pointer md:border-r md:px-6 md:block hidden">
                        <div className="admin-name font-bold">Kris Watson</div>
                        <div className="admin-role italic">Admin</div>
                    </div>
                </div>
                <div className="settings-adminpanel">
                    <CiSettings className="rounded-full h-10 w-10 animate-spin cursor-pointer" />
                </div>
            </div>
            <div className="settings-adminpanel md:hidden">
                <CiSettings className="rounded-full h-10 w-10 animate-spin cursor-pointer" />
            </div>
        </div>
        {opensidebar?(<SideBar/>):''}
        </>


    )
}

export default Navbar