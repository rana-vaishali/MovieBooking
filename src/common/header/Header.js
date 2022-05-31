import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';


class Header extends React.Component {
    state = {  } 
    render() { 
        return (
        <div className='header'>
        <img className='header-logo' src={logo} alt='header-logo'/>
        </div>
        );
    }
}
 
export default Header;