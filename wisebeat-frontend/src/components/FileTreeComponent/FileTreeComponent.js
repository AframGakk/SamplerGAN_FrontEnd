import React from "react";
import { connect } from "react-redux";
import meta from "../../apis/metaService";
import "./fileTreeComponent.css";
import { Grid, AppBar, Tabs, Tab, Chip } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { TreeView, TreeItem } from "@material-ui/lab";
import TabPanel from "./TabPanel/TabPanel";
import TreeFile from "../TreeFile/TreeFile";
import { fetchFolders } from "../../actions";

class FileTreeComponent extends React.Component {
  componentDidMount() {
    this.props.fetchFolders();
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  renderFolderList() {
    // Here is where the FoldeTree is rendering and
    // calling Treefile and passing folderid down
    return this.props.folders.map(folder => {
      return (
        <TreeItem key={folder.id} nodeId={folder.id} label={folder.name}>
          <TreeFile folderId={folder.id} />
        </TreeItem>
      );
    });
  }

  // Switching the panel view
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
    console.log("handleChange");
  };

  handleChangeIndex = index => {
    this.setState(index);
    console.log("handleChangeIndex");
  };

  // Clicking featured objects
  handleChipClick = () => {
    console.info("You clicked the Chip.");
    console.log("handleChipClick");
  };

  render() {
    return (
      <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          centered
        >
          <Tab label="My Library" />
          <Tab label="Featured" />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <TreeView
            className={"treeView"}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {/* Invoking the func and renderinn the FolderTree */}
            {this.renderFolderList()}
          </TreeView>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Chip
            label={"Kick"}
            color="secondary"
            size="small"
            onClick={this.handleChipClick}
          />
          <Chip label={"Snare"} color="secondary" size="small" />
          <Chip label={"Clap"} color="secondary" size="small" />
        </TabPanel>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // all the folders
  return { folders: state.folders };
};
// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  fetchFolders: fetchFolders
})(FileTreeComponent);
