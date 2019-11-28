import React from 'react';
import meta from '../../api/MetaService'
import './fileTreeComponent.css';
import { Grid, AppBar, Tabs, Tab, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeView, TreeItem }from '@material-ui/lab';
import TabPanel from './TabPanel/TabPanel';
import TreeShit from '../TreeShit';

export default class FileTreeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            files:[]
        };
    }
    // aync function to get users files
    async onLoad() {
        const resp = await meta.get("/user/2/file", {
            params: { "username": "Villi"}
        });
        //console.log(resp.data);
        this.setState({files: resp.data});
    };

  // Switching the panel view
      handleChange = (event, newValue) => {
        this.setState({'value': newValue});
        console.log("handleChange");
        this.onLoad()
      };

    handleChangeIndex = index => {
        this.setState(index);
        console.log("handleChangeIndex");
    };

  // Clicking featured objects
    handleChipClick = () => {
        console.info('You clicked the Chip.');
        console.log("handleChipClick");
    };

render() {
    return (
      <AppBar position="static" color="default">
          <div>Found {this.state.files.length} files</div>
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
                  className={'treeView'}
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
              >
                  <TreeItem nodeId="1" label="FolderName1">
                      <TreeShit files={this.state.files}/>
                  </TreeItem>
                  <TreeItem nodeId="5" label="FolderName2">
                      <TreeItem nodeId="6" label="Material-UI">
                          <TreeItem nodeId="7" label="src">
                              <TreeItem nodeId="8" label="index.js" />
                                  <TreeItem nodeId="9" label="tree-view.js" />
                                  </TreeItem>
                              </TreeItem>
                          </TreeItem>
              </TreeView>
        </TabPanel>
          <TabPanel value={this.state.value} index={1}>
              <Chip label={"Kick"} color="secondary" size="small" onClick={this.handleChipClick}/>
              <Chip label={"Snare"} color="secondary" size="small" />
              <Chip label={"Clap"} color="secondary" size="small" />
        </TabPanel>
      </AppBar>
    );
    }
}
/*
<TreeItem nodeId="1" label="FolderName1">
    <TreeShit files={this.state.files}/>
    <TreeItem nodeId="2" label="Calendar" />
    <TreeItem nodeId="3" label="Chrome" />
    <TreeItem nodeId="4" label="Webstorm" />
</TreeItem>
*/
