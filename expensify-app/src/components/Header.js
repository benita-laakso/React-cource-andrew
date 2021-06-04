import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>
     (<header>
        <h1>
        Expencify
        </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expence </NavLink>
        </header>);
export default Header;