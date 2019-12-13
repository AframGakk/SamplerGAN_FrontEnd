import React from "react";
import "./Studio.css";
import { Grid } from "@material-ui/core";
import Sampler from "../Sampler/Sampler";

class Studio extends React.Component {
  render() {
    return (
      <Grid container spacing={3} className={"studioContainer"}>
        <Grid item xs={10} className={"studioGridItem"}>
          <Sampler />
        </Grid>
      </Grid>
    );
  }
}

export default Studio;
