import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Fade, CssBaseline } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as LinkRS } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";

import Body from './Body';
import Body1 from './Body1';
import Body2 from './Body2';

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
        margin: '30px',
    },
    down: {
        color: '#fff',
        fontSize: '5rem',
    },
    refreshDiv: {
        textAlign: 'center',
    },
    refresh: {
        
        color: 'white',
        fontSize: '4rem',
    },
    projects: {
        display: 'flex',

    }
}));

export default function Home() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={classes.root}>
                <CssBaseline />
                <div className={classes.container}>
                    <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}> 
                        <h1 className={classes.panel_01}>
                            Welcome to<br />Amos' <span className={classes.headerSpan}>Home Page</span>
                        </h1>
                    </Collapse>
                    <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                        <div className={classes.downButton}>
                            <LinkRS to='projects' smooth={true} duration={1000} > 
                                <IconButton > 
                                    <ExpandMoreIcon className={classes.down} />
                                </IconButton>
                            </LinkRS>
                        </div>
                    </Fade>
                </div>

                <div data-aos='flip-left' className={classes.projects} id='projects'>
                    
                    <Body />
                    <Body1 />
                    <Body2 />
                </div>
                
        </div>
    );
}
