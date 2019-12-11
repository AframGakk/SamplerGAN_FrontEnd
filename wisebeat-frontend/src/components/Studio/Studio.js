import React from 'react';
import './Studio.css';
import { Grid } from '@material-ui/core';
import FileTreeComponent from '../FileTreeComponent/FileTreeComponent';
import Sampler from '../Sampler/Sampler';

class Studio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: '',
            tabLabel: 1
        };
    }

    dummy = () => {
        return 'dummy'
    }

    handleTabChange = (event, newValue) => {
        this.setState({ 'tabLabel': newValue});
    };

    render() {
        const { name, email, text } = this.state;
        return (

            <Grid container spacing={3} className={'studioContainer'}>
                <Grid item xs={8} className={'studioGridItem'}>
                    <Sampler/>
                </Grid>
                <Grid item xs={3}>
                    <FileTreeComponent/>
                </Grid>
            </Grid>

        );
    }
}

export default Studio;