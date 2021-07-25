export default class LeaderBoard {
  constructor() {
    this.id = null;
  }

  async setId(id) {
    let tokenId = id.result.substring(id.result.indexOf(':'));
    tokenId = tokenId.substring(tokenId.lastIndexOf(':') + 1, tokenId.lastIndexOf(' '));
    this.id = tokenId.trim();
  }

  getId() {
    return this.id;
  }

  async createGame(name) {
    const gameName = { name };
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
    const response = await this.fetchApi(url, 'POST', gameName);
    this.setId(response);
  }

  async displayScores() {
    if (this.id !== null) {
      const scoresList = document.getElementById('scoresList');
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

  async addScore() {
    if (this.id !== null) {
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${encodeURIComponent(this.id)}/scores/`;
      const newScore = {
        user: document.getElementById('name').value,
        score: document.getElementById('score').value,
      };
      const response = await this.fetchApi(url, 'POST', newScore);
      if (response.result === 'Leaderboard score created correctly.') {
        const scoresList = document.getElementById('scoresList');
        const item = document.createElement('li');
        item.className = 'scoresList-items';
        item.id = 'scoresList-items';
        item.textContent = `${newScore.user}:${newScore.score}`;
        scoresList.appendChild(item);
      }
    }
  }

  async fetchApi(url, method, jsonBody = null) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method,
      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,
    }).then((res) => res.json().then((data) => data));
    return response;
  }
}