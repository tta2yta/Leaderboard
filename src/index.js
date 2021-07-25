import './style.css'
import LeaderBoard from './leaderboard'

const game=new LeaderBoard();

 async function getVal(){
     await game.createGame('my cool game');
      console.log(game.getId())
 }
 getVal()

 document.getElementById("refreshbtn").addEventListener('click', ()=>{
alert("Hi")
 }, false)