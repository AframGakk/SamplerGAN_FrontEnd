import React from 'react';
import TreeItem from '@material-ui/lab';

const TreeShit = props => {
    //console.log(props.files);
    return props.files.map(file => {
        return <div>{file.name}</div>
    });
};

export default TreeShit;
