import React from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import "./Sampler.css";
import SamplerTopSection from "./SamplerTopSection/SamplerTopSection";
import SamplerWaveVisiulizer from "./SamplerWaveVisiulizer/SamplerWaveVisiulizer";
import ControlerComponent from "./ControlComponent/ControlComponent";
import FxComponent from "./FxComponent/FxComponent";
import EnvelopeComonent from "./EnvelopeComponent/EnvelopeComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import { updateMetadata, saveGeneratedSampleData } from "../../actions";

class Sampler extends React.Component {
  render() {
    return (
      <Grid className={"sampler-container"} container spacing={3}>
        <Grid item xs={10}>
          <SamplerTopSection />
        </Grid>

        <Grid item xs={9} className={"secondGrid"}>
          <SamplerWaveVisiulizer />
        </Grid>
        <Grid item xs={1} className={"secondGrid"}>
          <ControlerComponent />
        </Grid>
        <Grid item xs={5} className={"secondGrid"}>
          <div className={"sampler-comp-wrapper"}></div>
        </Grid>
        <Grid item xs={5} className={"secondGrid"}></Grid>
        <Grid item xs={5} className={"secondGrid"}>
          <EnvelopeComonent />
        </Grid>
        <Grid item xs={5} className={"secondGrid"}>
          <FilterComponent />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // the metadata for what file is selected
  return {
    meta: state.selectedFileMetadata,
    newfiledata: state.selectedFileSoundDataReducer.newFileData
  };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  updateMetadata: updateMetadata,
  saveGeneratedSampleData: saveGeneratedSampleData
})(Sampler);
