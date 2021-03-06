import React from "react";
import { connect } from "react-redux";
import {
  fetchFiles,
  selectFile,
  fetchSelectedFileMetadata,
  fetchSelectedSampleData
} from "../../actions";

import { TreeItem } from "@material-ui/lab";

class TreeFile extends React.Component {
  //When this component renders to the screen we will want to fetch the given data that
  //This component wants to show
  componentDidMount() {
    this.props.fetchFiles();
  }

  renderFolderFiles() {
    //First filter files after there parentId
    const file = this.props.files.filter(
      file => file.parent === this.props.folderId
    );
    //If no file return null
    if (!file) {
      return null;
    }
    //Then map the file into right folders to render
    return file.map(file => {
      return (
        <TreeItem
          key={file.id}
          nodeId={file.id}
          label={file.name}
          onClick={() => {
            // Calling both functions, onClick block getting the id of the selected song to get the
            // metadata for the sampler
            this.props.selectFile(file);
            this.props.fetchSelectedFileMetadata(file.id);
            this.props.fetchSelectedSampleData(file.location);
          }}
        />
      );
    });
  }

  render() {
    return <div>{this.renderFolderFiles()}</div>;
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get all the files
  return { files: state.files };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  fetchFiles: fetchFiles,
  selectFile: selectFile,
  fetchSelectedFileMetadata: fetchSelectedFileMetadata,
  fetchSelectedSampleData: fetchSelectedSampleData
})(TreeFile);
