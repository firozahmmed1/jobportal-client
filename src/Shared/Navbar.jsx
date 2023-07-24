import { Link } from "react-router-dom";
import Container from "../Components/Container/Container";
import Logo from "../assets/Logo/jobportal.png"
import { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {logOut, user} =useContext(authContext);

    const handleLogout =()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Signout Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    const navOption = <>
        <Link to='/'><li className="text-xl font-semibold pr-4">Home</li></Link>
        <Link to='/about'><li className="text-xl font-semibold pr-4">About</li></Link>
        <Link to='/contact'><li className="text-xl font-semibold pr-4">Contact Us</li></Link>
       
    </>
    return (
        <div>
            <Container>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navOption}
                            </ul>
                        </div>
                        <a className="hidden md:block"><img src={Logo} width={100}/></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOption}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {!user ? <Link to="/login" className="text-xl font-semibold pr-4">Signin</Link>:
                        <Link onClick={handleLogout} className="text-xl font-semibold pr-4">Signout</Link>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;