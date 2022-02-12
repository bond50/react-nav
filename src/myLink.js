import React from 'react';

const MyLink = ({dropdown, caption, to, active}) => {
    return (
        <li>
            <a className={dropdown ? null : `nav-link ${active ? "active" : ''}`} href={to}>{caption}</a>
        </li>
    );
};

export default MyLink;