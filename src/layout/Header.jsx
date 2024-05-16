import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Layout.css'; 
import { useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation()

    return (
        <header>
        <Nav className="headerNav">
            <NavItem href="/" >
                <img src="./Assets/mile1-assets/logo.svg" alt="logo" />
            </NavItem>
            {location.pathname ===  "/OrderForm" && (
                <Nav className="orderFormNav">
                    <NavItem>
                        <NavLink
                        href="/" 
                        className="orderFormNav"
                        >
                        Anasayfa
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className="orderFormNav"
                    >
                        <span>-</span>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/OrderForm"
                        className="orderFormNav"
                        style={{ fontWeight:"bold" }}>
                        Sipariş Oluştur
                        </NavLink>
                    </NavItem>
                </Nav>
            )
    }
        </Nav>
        </header>

    );
}
