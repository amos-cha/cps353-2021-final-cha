import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Fade, CssBaseline } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Body from './Body';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 'auto',
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

export default function Home() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root}>
                <CssBaseline />
                <div className={classes.container}>
                    <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}> 
                        <h1 className={classes.panel_01}>
                            Welcome to <br />HOME PAGE/<span className={classes.headerSpan}>span</span>
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
                
                <br />
                <br />
                <br />


                <Body />
        </div>
    );
}
