import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'; 
import { useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation()


    return (
        <header>
        <Navbar className="headerNav">
            <NavbarBrand href="/">
                <img src="./Assets/mile1-assets/logo.svg" alt="logo" />
            </NavbarBrand>
            {location === 
            <NavbarBrand >
                Teknolojik Yemekler
            </NavbarBrand>
    }
        </Navbar>
        </header>

    );
}
