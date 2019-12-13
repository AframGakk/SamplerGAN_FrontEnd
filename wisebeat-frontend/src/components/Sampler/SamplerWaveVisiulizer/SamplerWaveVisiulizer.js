import React from "react";
import {Grid, Button} from "@material-ui/core";
import './SamplerWave.css';
import audiomock from '../../../mockdata/audiomock';
//import * as CanvasJSReact from '../../../assets/canvasjs.react';
//var CanvasJSReact = require('../../../assets/canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//import CanvasJSReact from '../../../assets/canvasjs.react';
//import { CanvasJS } from '../../../assets/canvasjs.react';
import { CanvasJSChart} from '../../../assets/canvasjs.react';
import { connect } from "react-redux";


function drawBuffer( width, height, context, buffer ) {
    var data = buffer.getChannelData( 0 );
    var step = Math.ceil( data.length / width );
    var amp = height / 2;
    for(var i=0; i < width; i++){
        var min = 1.0;
        var max = -1.0;
        for (var j=0; j<step; j++) {
            var datum = data[(i*step)+j];
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        context.fillRect(i,(1+min)*amp,1,Math.max(1,(max-min)*amp));
    }
}


class SamplerWaveVisiulizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };


    }

    render() {
        var dataPoints = [];
        if (this.props.newFileData != undefined) {
            var new_data = this.props.newFileData;
            var limit = new_data.length;
            var y = 100;
            var data = [];
            var dataSeries = { type: "line" };
            for (var i = 0; i < limit; i += 1) {
                dataPoints.push({
                    x: i/16000,
                    y: new_data[i]
                });
            }
            dataSeries.dataPoints = dataPoints;
            data.push(dataSeries);
        }

		const options = {
		    theme: "dark2",
			zoomEnabled: true,
			animationEnabled: true,
			axisY: {
				includeZero: false,
                maximum: 1,
                minimum: -1
			},
			data: [
                {
                    type: "line",
                    lineColor: "orange",
                    dataPoints: dataPoints
                }
            ],
            height: 200
		}

        return (
            <div>
			    <CanvasJSChart options = {options}
				    onRef={ref => this.chart = ref}
			    />

		    </div>
        );
    }
}


const mapStateToProps = state => {
  //console.log(state);
  // Configure connect to tell redux store that we wanna get
  // the file that is selected in the Filetree
  return {
    newFileData: state.selectedFileSoundDataReducer.newFileData
    //meta: this.changeAudioMeta(state.selectedFileMetadata)
  };
};



// connect to Provider -> ReduxStore
export default connect(mapStateToProps)(SamplerWaveVisiulizer);
