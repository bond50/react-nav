import React, {useState} from 'react';

const Dropdown = ({to, caption, children}) => {
    const [open, setOpen] = useState(false)
    const toggleDropdown = () => {
        setOpen(open => !open)
    };


    return (
        <li className={`dropdown`} onClick={toggleDropdown}>
            <a href={'#'}
            >
                <span>{caption} </span> <i
                className="bi bi-chevron-down"/>
            </a>
            <ul className={`${open ? 'dropdown-active' : null}`}>
                {children}
            </ul>
        </li>
    );
};

export default Dropdown;