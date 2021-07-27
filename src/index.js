import './style.css';
import leaderBoardLayour from './leaderboardlayout';


const layout=leaderBoardLayour();
console.log(layout)
document.querySelector('.main').appendChild(layout);