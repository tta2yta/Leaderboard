export default class LeaderBoard {
  constructor() {
    this.id = null;
    this.flag = true;
  }

  async setId(id) {
    let tokenId = id.result.substring(id.result.indexOf(':'));
    tokenId = tokenId.substring(tokenId.lastIndexOf(':') + 1, tokenId.lastIndexOf(' '));
    this.id = tokenId;
  }

  getId() {
    return this.id;
  }

   createGame=async(name)=> {
    const gameName = { name };
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const response = await this.fetchApi(url, 'POST', gameName);
    if (this.flag === false) {
      document.getElementById('errorDiv').textContent = 'Bad Request, Please Try Again!!!';
      setTimeout(() => {
        document.getElementById('errorDiv').innerHTML = '';
      }, 3500);
    } else { this.setId(response); }
  }

   displayScores=async()=> {
    if (this.id !== null) {
      const scoresList = document.getElementById('ulList');
      while (scoresList.firstChild) {
        scoresList.removeChild(scoresList.firstChild);
      }
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${encodeURIComponent(this.id)}/scores/`;
      const response = await this.fetchApi(url, 'GET');
      response.result.forEach((element) => {
        const item = document.createElement('li');
        item.className = 'scoresList-items';
        item.id = 'scoresList-items';
        item.textContent = `${element.user}:${element.score}`;
        scoresList.appendChild(item);
      });
    }
  }

   addScore=async()=> {
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    if (name === '' || score === '') {
      document.querySelector('.submitDivErr').textContent = 'Please provide a value for game name and score';
      setTimeout(() => {
        document.querySelector('.submitDivErr').innerHTML = '';
      }, 1500);
      return false;
    }
    if (this.id !== null) {
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${encodeURIComponent(this.id)}/scores/`;
      const newScore = {
        user: document.getElementById('name').value,
        score: document.getElementById('score').value,
      };
      const response = await this.fetchApi(url, 'POST', newScore);
      if (response.result === 'Leaderboard score created correctly.') {
        const scoresList = document.getElementById('ulList');
        const item = document.createElement('li');
        item.className = 'scoresList-items';
        item.id = 'scoresList-items';
        item.textContent = `${newScore.user}:${newScore.score}`;
        scoresList.appendChild(item);
      }
    }
    return true;
  }

   fetchApi=async(url, method, jsonBody = null) =>{
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET',
      },
      method,
      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,
    }).then((res) => res.json().then((data) => data))
      .catch(() => { this.flag = false; });
    return response;
  }
}