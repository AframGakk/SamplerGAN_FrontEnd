import React from "react";
import {Grid} from "@material-ui/core";
import './Sampler.css';
import SamplerTopSection from './SamplerTopSection/SamplerTopSection';
import SamplerWaveVisiulizer from './SamplerWaveVisiulizer/SamplerWaveVisiulizer';
import ControlerComponent from './ControlComponent/ControlComponent';
import FxComponent from './FxComponent/FxComponent';
import EnvelopeComonent from './EnvelopeComponent/EnvelopeComponent';
import FilterComponent from './FilterComponent/FilterComponent';

class Sampler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''

        };
    }

    render() {
        return (
            <Grid className={'sampler-container'} container spacing={3}>

                <Grid item xs={10}>
                    <SamplerTopSection/>
                </Grid>

                <Grid item xs={9} className={'secondGrid'}>
                    <SamplerWaveVisiulizer/>
                </Grid>
                <Grid item xs={1} className={'secondGrid'}>
                    <ControlerComponent/>
                </Grid>
                <Grid item xs={5} className={'secondGrid'}>
                    <div className={'sampler-comp-wrapper'}>
                        <FxComponent/>
                    </div>
                </Grid>
                <Grid item xs={5} className={'secondGrid'}>
                    Hello
                </Grid>
                <Grid item xs={5} className={'secondGrid'}>
                    <EnvelopeComonent/>
                </Grid>
                <Grid item xs={5} className={'secondGrid'}>
                    <FilterComponent/>
                </Grid>
            </Grid>
        );
    }
}

export default Sampler;