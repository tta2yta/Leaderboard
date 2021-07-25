import './style.css'
import LeaderBoard from './leaderboard'

const game=new LeaderBoard();

 async function getVal(){
     await game.createGame('my cool game');
 }
 getVal()

 document.getElementById("refreshbtn").addEventListener('click', ()=>{
game.displayScores()
 }, false)

 document.getElementById("addscorebtn").addEventListener('click', ()=>{
    game.addScore()
     }, false)
 