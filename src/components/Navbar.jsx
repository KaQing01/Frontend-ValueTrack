import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'green' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white" style={{ marginLeft: "20px", fontFamily: "Times New Roman", fontSize:"48px"}} to="/"> ValueTrack </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link text-white" to="/"> Home </Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/expenses"> Expenses </Link> </li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/incomes"> Incomes </Link> </li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/companies"> Companies </Link> </li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/about"> About </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
