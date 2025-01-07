import { GiHamburgerMenu } from "react-icons/gi";
// import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import './Navbar.css'
const Navbar = () => {
    return (
        
            <div className="Navbar-container nav-sections flex m-auto h-fit p-3 gap-10 items-center justify-between border shadow-xl bg-white">
                <div className="nav-1 flex items-center gap-10">
                    <div className="hamburger-icon rounded-full p-1">
                        <GiHamburgerMenu className="h-8 w-8 cursor-pointer " />
                    </div>
                    <div className="admin-searchbar border rounded-lg px-5 py-1">
                        <input type="search" name="Search Here" id="" placeholder="Search Here..." role="searchbox" aria-autocomplete="both" className="navbar-searchbar outline-none h-10 placeholder:text-md" />
                    </div>
                    <div className="background-theme">
                        <FaMoon className="rounded-full h-10 w-10 p-1 hover:bg-cyan-400 cursor-pointer hover:rounded-full hover:text-white " />
                    </div>
                </div>
                <div className="nav-2 flex items-center gap-10">
                    <div className="admin-photo-name flex items-center gap-4">
                        <div className="border admin-photo rounded-full h-12 w-12">

                        </div>
                        <div className="admin-name-role cursor-pointer">
                            <div className="admin-name font-bold">Kris Watson</div>
                            <div className="admin-role italic">Admin</div>
                        </div>
                    </div>
                    <div className="settings-adminpanel">
                        <CiSettings className="rounded-full h-10 w-10 animate-spin cursor-pointer"  />
                    </div>
                </div>



            </div>

        
    )
}

export default Navbar