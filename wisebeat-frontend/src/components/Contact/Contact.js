import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: ''
        };
    }

    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { name, email, text } = this.state;
        return (
        <div>
            <h1 className='contact-us-title'>Please contact us</h1>
            <div className='contact-us-form'>
                <form action='' method='get' >
                    <label className='form-labels' >Name</label>
                    <input type='text' value={name} name='name' onChange={(e) => this.onInputChange(e)} placeholder='Your name'/>
                    <label className='form-labels' >Email</label>
                    <input type='text' value={email} name='email' onChange={(e) => this.onInputChange(e)} placeholder='Your email'/>
                    <label className='form-labels' >How can we help</label>
                    <input type='text' value={text} name='text' onChange={(e) => this.onInputChange(e)} placeholder='Your text' className='form-text'/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        );
    }
}

export default Contact;