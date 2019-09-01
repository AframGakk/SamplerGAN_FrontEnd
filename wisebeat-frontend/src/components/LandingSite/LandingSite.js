import React from 'react';
import ReactDom from 'react-dom';

const LandingSite = () => {
    return (
        <div>
            <h1 className="landing-site">Landing Site</h1>
            <div>
                <button type="button" class="btn btn-primary login-button">Login</button>
                <button type="button" class="btn btn-default signup-button">Sign up</button>
            </div>
        </div>
    )
};

export default LandingSite;