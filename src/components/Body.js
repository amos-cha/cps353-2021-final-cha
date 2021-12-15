import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        height: "70vh", 
        marginTop: '40vh',
        marginLeft: '5%',
        marginRight: '5%',
        width: '30%',
        
    },
    card: {
        backgroundColor: 'rgba(0,0,0)',
        maxWidth: '345',
    }
}));

export default function Body() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='body'>
            

            <Card className={classes.card} >
                <CardMedia
                    component="img"
                    height="200"
                    image={process.env.PUBLIC_URL + '/assets/ttt.jpg'}
                    alt="tictactoe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tic Tac Toe
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                    Basic tic tac toe project using introductory Javascript as the basis
                    of programming behind simple tic tac toe rules.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href="/tictactoe" >Link to unfunctional game</Button>
                </CardActions>
            </Card>

        </div>
        
      );
}
