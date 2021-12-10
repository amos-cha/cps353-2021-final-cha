import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Fade } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    headerSpan: {
        color: '#3fe8b0',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '3rem',
    },
    container: {

    },
    panel_01: {
        color: '#fff',
        fontSize: '4rem',
        textAlign: 'center',
    },
    bibleAPI: {
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: 'grey', 
        padding: '20px',
        borderRadius: '30px',
        border: '5px solid white',
    },
    downButton: {
        textAlign: 'center',
    },
    down: {
        color: '#3fe8b0',
        fontSize: '5rem',
    },
    refreshDiv: {
        textAlign: 'center',
    },
    refresh: {
        
        color: 'white',
        fontSize: '4rem',
    },
}));

export default function Test() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root}>

                <div className={classes.container}>
                    <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}> 
                        <h1 className={classes.panel_01}>
                            Welcome to <br />TEST PAGE 1/<span className={classes.headerSpan}>span</span>
                        </h1>
                    </Collapse>
                    <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                        <div className={classes.downButton}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.down} />
                            </IconButton>
                        </div>
                    </Fade>
                </div>
        </div>
    );
}