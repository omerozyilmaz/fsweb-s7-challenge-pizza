import '../Layout.css'; 
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
    <header>
        <nav className="headerNav">
            <div>
                <a href ="/">
                    <img src="./Assets/mile1-assets/logo.svg" alt="logo"/>
                </a>
                <ol>
                    {location.pathname === "/OrderForm" && (
                        <>
                            <a href="/">Anasayfa</a>
                            <span>-</span>
                            <a href="/OrderForm">Sipariş Oluştur</a>
                        </>
            )}
                </ol>
            </div>
        </nav>
    </header>
    );
}


/*              <nav className="orderFormNav">
                    <a>                        
                        <NavLink
                        href="/" 
                        className="orderFormNav"
                        >
                        Anasayfa
                    </a>
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
                </Nav> */
