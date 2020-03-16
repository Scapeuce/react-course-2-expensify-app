// Higher Order Component (HOC)- A component that renders another component

// 1. Takes in a component as an argument.

// 2. Returns a new component.

// It doesn't do any of the rendering itself.


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )

}
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
             {props.isAuthenticated ? <WrappedComponent {...props} /> : <h3> No right to access this info, please log on </h3> }
    </div>
       
    )

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin= {true} info="This is the detail" />, document.getElementById('app') )
ReactDOM.render(<AuthInfo isAuthenticated= {false} info="This is the detail" />, document.getElementById('app') )