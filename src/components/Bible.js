/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    test: {
        color: '#fff',
        fontSize: 'rem',
    },
    author: {
        fontStyle: 'italic',
    },
}));

export default function Bible() {
    const classes = useStyles();
    const [verse, setVerse] = useState('noValue');
    const [author, setAuthor] = useState('noValue');
    const bibleFn = async () => {
        try {
            const data = await axios
            .get(`https://labs.bible.org/api/?passage=random&type=json`)
            .then(res => {
                console.log(res);
                setVerse(res.data[0].text);
                setAuthor(' - '+res.data[0].bookname+' '+res.data[0].chapter+':'+res.data[0].verse);
            });
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        bibleFn();
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.test}>
                {verse}<br /> <div className={classes.author}>{author}</div>
            </div>  
        </div>
    );
}
