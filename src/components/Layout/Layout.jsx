import Navbar from '../AdminNavbar/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar />
    <div className="layout-container border border-black">
        <Outlet />
    </div>
    
    </>
  )
}

export default Layout