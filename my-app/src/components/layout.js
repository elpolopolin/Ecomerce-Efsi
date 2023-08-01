import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <>


        <nav style={{backgroundColor: "black", height: 30}}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tienda" className="nav-link">Tienda</Link>
        </nav>
    <Outlet />
    </>
    );
}
export default Layout;