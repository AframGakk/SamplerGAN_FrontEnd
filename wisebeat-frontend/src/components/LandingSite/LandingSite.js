import React from 'react';
import ReactDom from 'react-dom';

const LandingSite = () => {
    return (
        <div>
            <h1 className="landing-site-title">Landing Site</h1>
            <div>
                <button type="button" className="btn btn-primary login-button">Login</button>
                <button type="button" className="btn btn-default signup-button">Sign up</button>
            </div>
        </div>
    )
};

export default LandingSite;