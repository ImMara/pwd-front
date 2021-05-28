import React from 'react';

function Header(props) {
    const {children} = props

    return (
        <header>
            {children}
        </header>
    );
}

export default Header;