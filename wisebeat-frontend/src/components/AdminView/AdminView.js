import React from "react";
import { connect } from "react-redux";
//import MaterialTable from "material-table";

import { fetchJobs } from "../../actions";

class AdminView extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }
    const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  render() {
    return <div>AdminView</div>;
    /*return (
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    );
    */
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // all the folders
  return { jobs: state.jobReducer };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  fetchJobs: fetchJobs
})(AdminView);
