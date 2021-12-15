import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './tictactoe/style.css';


const useStyles = makeStyles((theme) => ({
    
}));

function Tictactoe() {

  useEffect(() => {
    
  }, []);

  const classes = useStyles();
  return (
    <div >
        <div class='body'>
        <div class = "container">

            <h1 class="title">want to play a game?</h1>
            <h5 class="remark">you dont have to if you don't want :(</h5>

            <div class="status-restart">
            <div class="status">player: ×</div>
            <div class="RS">restart</div>
            </div>

            <div class="grid">
            <div tabindex = "1" class="grid-square 0"></div>
            <div tabindex = "1" class="grid-square 1"></div>
            <div tabindex = "1" class="grid-square 2"></div>

            <div tabindex = "1" class="grid-square 3"></div>
            <div tabindex = "1" class="grid-square 4"></div>
            <div tabindex = "1" class="grid-square 5"></div>

            <div tabindex = "1" class="grid-square 6"></div>
            <div tabindex = "1" class="grid-square 7"></div>
            <div tabindex = "1" class="grid-square 8"></div>
            </div>

        </div>
        <script src="./tictactoe/script.js"></script>
        </div>
    </div>
  );
}

export default Tictactoe;