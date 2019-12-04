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
import { updateMetadata } from "../../actions";

class Sampler extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }*/
  /*clicked() {
    this.props.updateMetadata(this.props.meta.file_id, this.props.meta);
  }
*/
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
          <div className={"sampler-comp-wrapper"}>
            <FxComponent />
          </div>
        </Grid>
        <Grid item xs={5} className={"secondGrid"}>
          {/*
            Idea if no file loaded in the sampler,
            then button should be disabled
            would not want the user sending "empty"
            patch req to the webapi
            */}
          {/* Updates metadata with props from redux store*/}
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<SaveIcon />}
            onClick={() => {
              this.props.updateMetadata(
                this.props.meta.file_id,
                this.props.meta
              );
            }}
          >
            Save
          </Button>
        </Grid>
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
  console.log(state);
  return { meta: state.selectedFileMetadata };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  updateMetadata: updateMetadata
})(Sampler);
