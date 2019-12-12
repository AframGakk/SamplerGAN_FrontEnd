import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { createNewGeneratorModel, fetchJobs, createJob } from "../../actions";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxHeight: 650,
    overflow: "auto"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    margin: "auto"
  },
  row: {
    background: "#9e9e9e"
  },
  button: {
    marginRight: theme.spacing(5)
  }
});

class AdminView extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      open: false,
      setOpen: false
    };
  }

  renderResultsDisLoss(results) {
    if (!results) {
      return <TableCell>No results</TableCell>;
    } else {
      return <TableCell>{results.discriminator_loss}</TableCell>;
    }
  }

  renderResultsGenLoss(results) {
    if (!results) {
      return <TableCell>No results</TableCell>;
    } else {
      return <TableCell>{results.generator_loss}</TableCell>;
    }
  }

  renderStatus(status) {
    if (status === 1) {
      return <TableCell>In Progress</TableCell>;
    } else if (status === 2) {
      return <TableCell>Done</TableCell>;
    } else if (status === 3) {
      return <TableCell>Failed</TableCell>;
    } else if (status === 4) {
      return <TableCell>In queue</TableCell>;
    }
  }

  renderTable() {
    const jobs = this.props.jobs;
    const { classes } = this.props;

    const sortedJobs = jobs.sort(function(a, b) {
      return a.id - b.id;
    });

    return sortedJobs.map(job => {
      return (
        <TableRow key={job.id} className={classes.row}>
          <TableCell component="th" scope="row">
            {job.label}
          </TableCell>
          <TableCell align="center">{job.id}</TableCell>
          <TableCell align="center">{job.date_time_start}</TableCell>
          <TableCell align="center">{job.date_time_start}</TableCell>
          <TableCell align="center">{job.description}</TableCell>
          <TableCell align="center">{job.model_location}</TableCell>
          <TableCell align="center">{job.record_location}</TableCell>
          {this.renderResultsDisLoss(job.results)}
          {this.renderResultsGenLoss(job.results)}
          {this.renderStatus(job.status)}
          <TableCell align="center">{job.version}</TableCell>
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={() =>
              this.props.createNewGeneratorModel(job.model_location)
            }
          >
            <AddIcon />
          </Fab>
        </TableRow>
      );
    });
  }

  clickedOpen = () => {
    console.log("Opna!");
    this.setState({ open: true });
  };

  clickedClose = () => {
    console.log("Loka!");
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Dialog
            open={this.state.open}
            aria-labelledby="form-dialog-title"
            onClose={this.clickedClose}
          >
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="label"
                label="Label"
                type="text"
                fullWidth
                inputRef={ref => {
                  this.labelRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="version"
                label="Version Number"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.versionRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="batch"
                label="Batch Size"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.batchRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="adam"
                label="Adam Learning Rate"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.adamRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="beta"
                label="Adam Beta"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.betahRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="alpha"
                label="Lrelu Alpha"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.batchRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="episodes"
                label="Episodes"
                type="number"
                fullWidth
                inputRef={ref => {
                  this.epiRef = ref;
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                inputRef={ref => {
                  this.desRef = ref;
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.clickedClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  this.clickedClose();
                  this.props.createJob(
                    this.labelRef.value,
                    this.versionRef.value,
                    this.batchRef.value,
                    this.adamRef.value,
                    this.betahRef.value,
                    this.batchRef.value,
                    this.epiRef.value,
                    this.desRef.value
                  );
                }}
                color="primary"
              >
                Submit Job
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className={classes.root}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => this.props.fetchJobs()}
            className={classes.button}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            onClick={this.clickedOpen}
          >
            Post Job
          </Button>
          <Container maxWidth="xl">
            <Paper className={classes.paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Job label</TableCell>
                    <TableCell align="center">Job id</TableCell>
                    <TableCell align="center">Start date</TableCell>
                    <TableCell align="center">Stop date</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Model location</TableCell>
                    <TableCell align="center">Record location</TableCell>
                    <TableCell align="center">Results Discriminator</TableCell>
                    <TableCell align="center">Results Generator</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Version</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{this.renderTable()}</TableBody>
              </Table>
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // all the folders
  console.log(state);
  return { jobs: state.jobReducer.data };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  createNewGeneratorModel: createNewGeneratorModel,
  fetchJobs: fetchJobs,
  createJob: createJob
})(withStyles(useStyles)(AdminView));
