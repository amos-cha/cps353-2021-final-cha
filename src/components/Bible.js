/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


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
    dialogmenu: {
        color: '#fff',
    }
}));

export default function Bible() {
    const classes = useStyles();
    const [randverse, setRandVerse] = useState('noValue');
    const [randauthor, setRandAuthor] = useState('noValue');

    const [open, setOpen] = React.useState(false);
    const [book, setBook] = React.useState('');
    const [chapter, setChapter] = React.useState('');
    const [verse, setVerse] = React.useState('');

    const handleBookChange = (event) => {
        setBook(event.target.value);
    };

    const handleChapterChange = (event) => {
        setChapter(event.target.value);
    };

    const handleVerseChange = (event) => {
        setVerse(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        console.log(book);
        console.log(chapter);
        console.log(verse);
        if (reason !== 'backdropClick') {
        setOpen(false);
        }
        manualBibleFn();
    };

    const manualBibleFn = async () => {
        var token = book
        if (verse == '') {
            token += ":";
            token += chapter;
        } else {
            token += chapter;
            token += ":";
            token += verse;
        }

        console.log(token);
        try {
            const data = await axios
            .get(`https://labs.bible.org/api/?passage=${token}&type=json`)
            .then(res => {
                setRandVerse(res.data[0].text);
                setRandAuthor(' - '+res.data[0].bookname+' '+res.data[0].chapter+':'+res.data[0].verse);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const bibleFn = async () => {
        try {
            const data = await axios
            .get(`https://labs.bible.org/api/?passage=random&type=json`)
            .then(res => {
                setRandVerse(res.data[0].text);
                setRandAuthor(' - '+res.data[0].bookname+' '+res.data[0].chapter+':'+res.data[0].verse);
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
                {randverse}<br /> <div className={classes.author}>{randauthor}</div>
            </div>  
            <div>
                <br></br>
            </div>
            <Button style={{backgroundColor: '#5e5e5e', color: '#FFFFFF'}}onClick={handleClickOpen}>Choose your verse</Button>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Book and Verse</DialogTitle>
                        <DialogContent>
                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel htmlFor="demo-dialog-native">Book</InputLabel>
                                <Select
                                    native
                                    book={book}
                                    onChange={handleBookChange}
                                    input={<OutlinedInput label="Book" id="demo-dialog-native" />}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={'genesis%20'}>Genesis</option>
                                    <option value={'exodus%20'}>Exodus</option>
                                    <option value={'leviticus%20'}>Leviticus</option>
                                    <option value={'Numbers%20'}>Numbers</option>
                                    <option value={'Deuteronomy%20'}>Deuteronomy</option>
                                    <option value={'Joshua%20'}>Joshua</option>
                                    <option value={'Judges%20'}>Judges</option>
                                    <option value={'Ruth%20'}>Ruth</option>
                                    <option value={'1Samuel%20'}>1 Samuel</option>
                                    <option value={'2Samuel%20'}>2 Samuel</option>
                                    <option value={'1Kings%20'}>1 Kings</option>
                                    <option value={'2Kings%20'}>2 Kings</option>
                                    <option value={'1Chronicles%20'}>1 Chronicles</option>
                                    <option value={'2Chronicles%20'}>2 Chronicles</option>
                                    <option value={'Ezra%20'}>Ezra</option>
                                    <option value={'Nehemiah%20'}>Nehemiah</option>
                                    <option value={'Esther%20'}>Esther</option>
                                    <option value={'Job%20'}>Job</option>
                                    <option value={'Psalms%20'}>Psalms</option>
                                    <option value={'Proverbs%20'}>Proverbs</option>
                                    <option value={'Ecclesiastes%20'}>Ecclesiastes</option>
                                    <option value={'songofsongs%20'}>Song of Solomon</option>
                                    <option value={'Isaiah%20'}>Isaiah</option>
                                    <option value={'Jeremiah%20'}>Jeremiah</option>
                                    <option value={'Lamentations%20'}>Lamentations</option>
                                    <option value={'Ezekiel%20'}>Ezekiel</option>
                                    <option value={'Daniel%20'}>Daniel</option>
                                    <option value={'Hosea%20'}>Hosea</option>
                                    <option value={'Joel%20'}>Joel</option>
                                    <option value={'Amos%20'}>Amos</option>
                                    <option value={'Obadiah%20'}>Obadiah</option>
                                    <option value={'Jonah%20'}>Jonah</option>
                                    <option value={'Micah%20'}>Micah</option>
                                    <option value={'Nahum%20'}>Nahum</option>
                                    <option value={'Habakkuk%20'}>Habakkuk</option>
                                    <option value={'Zephaniah%20'}>Zephaniah</option>
                                    <option value={'Haggai%20'}>Haggai</option>
                                    <option value={'Zechariah%20'}>Zechariah</option>
                                    <option value={'Malachi%20'}>Malachi</option>

                                    <option value={'Matthew%20'}>Matthew</option>
                                    <option value={'Mark%20'}>Mark</option>
                                    <option value={'Luke%20'}>Luke</option>
                                    <option value={'John%20'}>John</option>
                                    <option value={'Acts%20'}>Acts</option>
                                    <option value={'Romans%20'}>Romans</option>
                                    <option value={'1Corinthians%20'}>1 Corinthians</option>
                                    <option value={'2Corinthians%20'}>2 Corinthians</option>
                                    <option value={'Galatians%20'}>Galatians</option>
                                    <option value={'Ephesians%20'}>Ephesians</option>
                                    <option value={'Philippians%20'}>Philippians</option>
                                    <option value={'Colossians%20'}>Colossians</option>
                                    <option value={'1Thessalonians%20'}>1 Thessalonians</option>
                                    <option value={'2Thessalonians%20'}>2 Thessalonians</option>
                                    <option value={'1Timothy%20'}>1 Timothy</option>
                                    <option value={'2Timothy%20'}>2 Timothy</option>
                                    <option value={'Titus%20'}>Titus</option>
                                    <option value={'Philemon%20'}>Philemon</option>
                                    <option value={'Hebrews%20'}>Hebrews</option>
                                    <option value={'James%20'}>James</option>
                                    <option value={'1Peter%20'}>1 Peter</option>
                                    <option value={'2Peter%20'}>2 Peter</option>
                                    <option value={'1John%20'}>1 John</option>
                                    <option value={'2John%20'}>2 John</option>
                                    <option value={'3John%20'}>3 John</option>
                                    <option value={'Jude%20'}>Jude</option>
                                    <option value={'Revelation%20'}>Revelation</option>

                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel htmlFor="demo-dialog-native"></InputLabel>
                                    <TextField
                                        required
                                        id="standard-number"
                                        label="Chapter"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                        chapter={chapter}
                                        onChange={handleChapterChange}
                                    />
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel htmlFor="demo-dialog-native"></InputLabel>
                                    <TextField
                                        id="standard-number"
                                        label="Verse"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                        verse={verse}
                                        onChange={handleVerseChange}
                                    />
                            </FormControl>

                        </Box>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
