import React, {useState} from 'react';
import Dropdown from "./dropdown";
import MyLink from "./myLink";
import About from "./about";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const MobileToggle = () => {
        setOpen(open => !open)
    };

    const closeMobile = () => {
        setOpen(false)
    };


    let attachedClasses = [`navbar`];

    if (open) {
        attachedClasses.push('navbar-mobile')
    }

    return (
        <nav id='navbar' className={`${attachedClasses.join(' ')}`}>
            <ul>
                <MyLink to={''} caption={'Home'} active/>
                <MyLink to={''} caption={'Home1'}/>
                <MyLink to={''} caption={'Home2'}/>
                <About/>
                <li><a className="nav-link " href="#contact">Contact</a></li>
            </ul>

            <i className={`${open ? 'bi bi-x' : 'bi bi-list'} mobile-nav-toggle`} onClick={MobileToggle}/>
        </nav>
    );
};

export default Navbar;