export default function leaderBoardLayour(){
    const scoresArray=[{name:'AAA', score:98},{name:'BBB', score:68},
    {name:'CCC', score:78},{name:'DDD', score:89},{name:'EEE', score:100},]
    const container=document.createElement('div')
    container.className="container";
    const leaderBoardHeader=document.createElement('h1');
    leaderBoardHeader.textContent="LeaderBoard"
    container.appendChild(leaderBoardHeader);
    const leaderboard=document.createElement('div');
    const scores=document.createElement('div');
    scores.className="scores"
    const refresh=document.createElement('div');
    refresh.className="refresh"
    const recentScores=document.createElement('h2');
    recentScores.textContent="Recent scores"
    const refreshBtn=document.createElement('button');
    refreshBtn.textContent="Refresh";
    refresh.appendChild(recentScores);
    refresh.appendChild(refreshBtn);
    score.appendChild(refresh);
    const listScores=document.createElement('div');
    listScores.className="list-scores";
    const ulList=document.createElement('ul');
    scoresArray.forEach(element => {
        const items=document.createElement('li');
        items.textContent=`${scoresArray.name +':' + scoresArray.score}`;
        listScores.appendChild(items);
    });
    listScores.appendChild(ulList);
    scores.appendChild(listScores)
    leaderboard.appendChild(scores);
    const addScore=document.createElement('div');
    addScore.className="add-score";
    const addScoreHeader=document.createElement('h2');
    addScoreHeader.textContent="Add Your Scores";
    const formAddDiv=document.createElement('div');
    formAddDiv.className="form-add";
    const formAdd=document.createElement('form');
    const playerName=document.createElement('input');
    playerName.type="text"
    playerName.id="name";
    const playerScore=document.createElement('input');
    playerName.type="text"
    playerName.id="score";
    const submitBtn=document.createElement('input');
    submitBtn.type="button"
    submitBtn.id="submit";
    submitBtn.value="Submit";
    formAdd.appendChild(playerName);
    formAdd.appendChild(playerScore);
    formAdd.appendChild(submitBtn);
    formAddDiv.appendChild(formAdd)
    addScore.appendChild(addScoreHeader);
    addScore.appendChild(formAddDiv);
    leaderboard.appendChild(scores);
    leaderboard.appendChild(addScore);
    container.appendChild(leaderboard);
    return container;
}




