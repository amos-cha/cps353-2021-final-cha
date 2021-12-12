import React from 'react';
import { AppBar, IconButton, Toolbar, Collapse, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import SortIcon from '@material-ui/icons/Sort';
import { CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#fff',
        fontSize: '3rem',
    },
    linkStyle: {
        color: 'white',
    },
}));

export default function Nav() {
    const linkStyle = {
        color: 'white'
    };
    const classes = useStyles();

    return (
        <nav >
            <Link className={classes.linkStyle} to='/'>
                <IconButton>
                    <HomeIcon className={classes.icon}/>
                </IconButton>
            </Link>

            <ul className='nav-links'>
                <Link className={classes.linkStyle} to='/project'>
                    <li>project</li>
                </Link>

                <Link className={classes.linkStyle} to='/test'>
                    <li>test</li>
                </Link>

                <Link className={classes.linkStyle} to='/test2'>
                    <li>test2</li>
                </Link>
                
            </ul>
        </nav>
    )
}
