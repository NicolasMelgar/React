import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Button } from "@mui/material";


const NavBar = () => {
    return (
      <div className="container">
        <h2>OfertasYa</h2>
        <div className="barra">
          <ul>
            <li><Button href="https://google.com.ar" target="blank" variant="outlined" color="primary">Celulares</Button></li>
            <li><Button href="https://google.com.ar" target="blank" variant="outlined" color="primary">Tablets</Button></li>
            <li><Button href="https://google.com.ar" target="blank" variant="outlined" color="primary">Notebook</Button></li>
            <li><Button href="https://google.com.ar" target="blank" variant="outlined" color="primary">Gammer</Button></li>
          </ul>
        </div>
        <CartWidget />
      </div>
    );
}

export default NavBar


