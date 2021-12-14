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
        height: "100vh", 
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

export default function Body1() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} >

            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    height="200"
                    image={process.env.PUBLIC_URL + '/assets/fifteenicon.jpg'}
                    alt="fifteen"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Fifteen Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    More advanced use of JS to mananipulate html elements and using react hooks
                    to produce a simple puzzle game.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href="/fifteen" >Non Working Button</Button>
                </CardActions>
            </Card>

        </div>
        
      );
}
