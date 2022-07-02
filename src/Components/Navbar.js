
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';

export const Header = ()=>{
    return(
       <>
       <Navbar bg="whitesmoke" expand="sm" collapseOnSelect sticky='top' className='first'>
           <Navbar.Brand className='second'><h3></h3></Navbar.Brand> 
           <Navbar.Toggle/>
           <Navbar.Collapse className='fouth'>
           <Nav>
               <Nav.Link href ="./" className='third'>Home</Nav.Link>
               <Nav.Link href ="./works" className='third'>How it works</Nav.Link>
               <Nav.Link href ="./Blog" className='third'>Blog</Nav.Link>
               <Nav.Link href ="./SIGNIN" className='third'>Login</Nav.Link>
           </Nav>
</Navbar.Collapse>
           </Navbar>

       </>
    );
}
