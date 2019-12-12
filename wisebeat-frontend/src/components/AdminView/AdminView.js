import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class AdminView extends React.Component {
  renderResults(results) {
    console.log(results);
    if (!results) {
      return <TableCell>No results</TableCell>;
    } else {
      return (
        <TableCell>
          {
            (results.id,
            results.discriminator_accuracy,
            results.discriminator_loss,
            results.generator_loss)
          }
        </TableCell>
      );
    }
  }

  renderTable() {
    const jobs = this.props.jobs;
    console.log(jobs);

    return jobs.map(job => {
      return (
        <TableRow key={job.id}>
          <TableCell component="th" scope="row">
            {job.label}
          </TableCell>
          <TableCell align="right">{job.id}</TableCell>
          <TableCell align="right">{job.date_time_start}</TableCell>
          <TableCell align="right">{job.date_time_start}</TableCell>
          <TableCell align="right">{job.description}</TableCell>
          <TableCell align="right">{job.model_location}</TableCell>
          <TableCell align="right">{job.record_location}</TableCell>
          {this.renderResults(job.results)}
          <TableCell align="right">{job.status}</TableCell>
          <TableCell align="right">{job.version}</TableCell>
        </TableRow>
      );
    });
    /*
    

    {
      rows.map(row => (
        <TableRow key="ROW">
          <TableCell component="th" scope="row">
            ROW
          </TableCell>
          <TableCell align="right">ROW</TableCell>
          <TableCell align="right">ROW</TableCell>
          <TableCell align="right">ROW</TableCell>
          <TableCell align="right">ROW</TableCell>
        </TableRow>
      ));
    }*/
  }

  render() {
    const useStyles = makeStyles({
      root: {
        width: "100%",
        overflowX: "auto"
      },
      table: {
        minWidth: 650
      }
    });
    return (
      <div>
        <Paper className={useStyles.root}>
          <Table className={useStyles.table} aria-label="simple tabel">
            <TableHead>
              <TableRow>
                <TableCell>Job label</TableCell>
                <TableCell align="right">Job id</TableCell>
                <TableCell align="right">Start date</TableCell>
                <TableCell align="right">Stop date</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Model location</TableCell>
                <TableCell align="right">Record location</TableCell>
                <TableCell align="right">Results</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Version</TableCell>
                {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTable()}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // all the folders
  return { jobs: state.jobReducer.data };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
})(AdminView);
