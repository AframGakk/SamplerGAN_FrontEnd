import React from "react";
import { connect } from "react-redux";
import "./fileTreeComponent.css";
import { Grid, AppBar, Tabs, Tab, Chip, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { TreeView, TreeItem } from "@material-ui/lab";
import TabPanel from "./TabPanel/TabPanel";
import TreeFile from "../TreeFile/TreeFile";
import { fetchFolders, createFolder } from "../../actions";
import AddIcon from "@material-ui/icons/Add";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class FileTreeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      open: false,
      setOpen: false
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
    //console.log("handleChange");
  };

  handleChangeIndex = index => {
    this.setState(index);
    //console.log("handleChangeIndex");
  };

  // Clicking featured objects
  handleChipClick = () => {
    //console.info("You clicked the Chip.");
    //console.log("handleChipClick");
  };

  clickedOpen = () => {
    console.log("Opna!");
    this.setState({ open: true });
  };

  clickedClose = () => {
    console.log("Loka!");
    this.setState({ open: false });
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
          <Tab label="My Library" onClick={() => this.props.fetchFolders()} />
          <Tab label="Featured" />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <TreeView
            className={"treeView"}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<AddIcon />}
                onClick={this.clickedOpen}
              >
                Folder
              </Button>
              <Dialog
                open={this.state.open}
                aria-labelledby="form-dialog-title"
                onClose={this.clickedClose}
              >
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Folder Name"
                    type="text"
                    fullWidth
                    inputRef={ref => {
                      this.foldernRef = ref;
                    }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="parent"
                    label="Parent Id"
                    type="number"
                    fullWidth
                    inputRef={ref => {
                      this.parentRef = ref;
                    }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="user"
                    label="User Id"
                    type="number"
                    fullWidth
                    inputRef={ref => {
                      this.userRef = ref;
                    }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="location"
                    label="Location"
                    type="text"
                    fullWidth
                    inputRef={ref => {
                      this.locRef = ref;
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
                      this.props.createFolder(
                        this.foldernRef.value,
                        this.parentRef.value,
                        this.userRef.value,
                        this.locRef.value
                      );
                    }}
                    color="primary"
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
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
  fetchFolders: fetchFolders,
  createFolder: createFolder
})(FileTreeComponent);
