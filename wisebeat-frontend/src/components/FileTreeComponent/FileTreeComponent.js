import React from 'react';
import './fileTreeComponent.css';
import { Grid, AppBar, Tabs, Tab, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeView, TreeItem }from '@material-ui/lab';

import TabPanel from './TabPanel/TabPanel';

export default function FileTreeComponent() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleChipClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab label="My Library" />
        <Tab label="Featured" />
      </Tabs>
        <TabPanel value={value} index={0}>
            <TreeView
                className={'treeView'}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                    <TreeItem nodeId="3" label="Chrome" />
                    <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="6" label="Material-UI">
                        <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                                <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
            </TreeView>
      </TabPanel>
        <TabPanel value={value} index={1}>
            <Chip label={"Kick"} color="secondary" size="small" onClick={handleChipClick}/>
            <Chip label={"Snare"} color="secondary" size="small" />
            <Chip label={"Clap"} color="secondary" size="small" />
      </TabPanel>
    </AppBar>
  );
}
