//Higher Order Component (HOC) A componetn that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
    <div>
    <h1>Info</h1>
    <p>The info is{props.info}</p>
    </div>
);

//You are able to pass a nother component in as a prop
//inside of the function we return a new Component, the component that we return is the higher order component
const withAdminWarning = (WrappedComponent) =>{
    return(props) => (
        <div>
        {props.isAdmin &&  <p>This is private info. Please don't share</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};
//{...props} taking every key value pair on the object and passing them down as props

//requireAutherntication
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (Wrapedcomponent) =>{
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <Wrapedcomponent {...props}/> 
            ): (
                <p>Please logg in authorised</p>
                ) }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info); //show when user is authenticated

ReactDOM.render(<AdminInfo isAdmin ={true} info=' This is your info'/>, document.getElementById('app'));

//ReactDOM.render(<AuthInfo isAuthenticated ={true} info=' This is your info'/>, document.getElementById('app'));