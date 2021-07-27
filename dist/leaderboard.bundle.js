/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/leaderboard.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeaderBoard)
/* harmony export */ });
class LeaderBoard {
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

  async createGame(name) {
    const gameName = { name };
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/gamess/';
    const response = await this.fetchApi(url, 'POST', gameName);
    if (this.flag === false) {
      document.getElementById('errorDiv').textContent = 'Bad Request, Please Try Again!!!';
      setTimeout(() => {
        document.getElementById('errorDiv').innerHTML = '';
      }, 3500);
    } else { this.setId(response); }
  }

  async displayScores() {
    if (this.id !== null) {
      const scoresList = document.getElementById('ulList');
      while (scoresList.firstChild) {
        scoresList.removeChild(scoresList.firstChild);
      }
      const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/apih/games/${encodeURIComponent(this.id)}/scores/`;
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

  async fetchApi(url, method, jsonBody = null) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
      },
      method,
      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,
    }).then((res) => res.json().then((data) => data))
      .catch(() => { this.flag = false; });
    return response;
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssT0FBTyxzQkFBc0I7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLDRCQUE0QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWEsR0FBRyxjQUFjO0FBQzVEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDRCQUE0QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjLEdBQUcsZUFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxvQkFBb0IsbUJBQW1CLEVBQUU7QUFDekM7QUFDQTtBQUNBLEMiLCJmaWxlIjoibGVhZGVyYm9hcmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFkZXJCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMuZmxhZyA9IHRydWU7XG4gIH1cblxuICBhc3luYyBzZXRJZChpZCkge1xuICAgIGxldCB0b2tlbklkID0gaWQucmVzdWx0LnN1YnN0cmluZyhpZC5yZXN1bHQuaW5kZXhPZignOicpKTtcbiAgICB0b2tlbklkID0gdG9rZW5JZC5zdWJzdHJpbmcodG9rZW5JZC5sYXN0SW5kZXhPZignOicpICsgMSwgdG9rZW5JZC5sYXN0SW5kZXhPZignICcpKTtcbiAgICB0aGlzLmlkID0gdG9rZW5JZDtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlR2FtZShuYW1lKSB7XG4gICAgY29uc3QgZ2FtZU5hbWUgPSB7IG5hbWUgfTtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXNzLyc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ1BPU1QnLCBnYW1lTmFtZSk7XG4gICAgaWYgKHRoaXMuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckRpdicpLnRleHRDb250ZW50ID0gJ0JhZCBSZXF1ZXN0LCBQbGVhc2UgVHJ5IEFnYWluISEhJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JEaXYnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0sIDM1MDApO1xuICAgIH0gZWxzZSB7IHRoaXMuc2V0SWQocmVzcG9uc2UpOyB9XG4gIH1cblxuICBhc3luYyBkaXNwbGF5U2NvcmVzKCkge1xuICAgIGlmICh0aGlzLmlkICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzY29yZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VsTGlzdCcpO1xuICAgICAgd2hpbGUgKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBzY29yZXNMaXN0LnJlbW92ZUNoaWxkKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGloL2dhbWVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuaWQpfS9zY29yZXMvYDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaEFwaSh1cmwsICdHRVQnKTtcbiAgICAgIHJlc3BvbnNlLnJlc3VsdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdzY29yZXNMaXN0LWl0ZW1zJztcbiAgICAgICAgaXRlbS5pZCA9ICdzY29yZXNMaXN0LWl0ZW1zJztcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudXNlcn06JHtlbGVtZW50LnNjb3JlfWA7XG4gICAgICAgIHNjb3Jlc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGRTY29yZSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlO1xuICAgIGlmIChuYW1lID09PSAnJyB8fCBzY29yZSA9PT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXREaXZFcnInKS50ZXh0Q29udGVudCA9ICdQbGVhc2UgcHJvdmlkZSBhIHZhbHVlIGZvciBnYW1lIG5hbWUgYW5kIHNjb3JlJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RGl2RXJyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLmlkKX0vc2NvcmVzL2A7XG4gICAgICBjb25zdCBuZXdTY29yZSA9IHtcbiAgICAgICAgdXNlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZSxcbiAgICAgICAgc2NvcmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaEFwaSh1cmwsICdQT1NUJywgbmV3U2NvcmUpO1xuICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ0xlYWRlcmJvYXJkIHNjb3JlIGNyZWF0ZWQgY29ycmVjdGx5LicpIHtcbiAgICAgICAgY29uc3Qgc2NvcmVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bExpc3QnKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICBpdGVtLmlkID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gYCR7bmV3U2NvcmUudXNlcn06JHtuZXdTY29yZS5zY29yZX1gO1xuICAgICAgICBzY29yZXNMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoQXBpKHVybCwgbWV0aG9kLCBqc29uQm9keSA9IG51bGwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlJyxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCxQQVRDSCxPUFRJT05TJyxcbiAgICAgIH0sXG4gICAgICBtZXRob2QsXG4gICAgICBib2R5OiBqc29uQm9keSAhPT0gbnVsbCA/IEpTT04uc3RyaW5naWZ5KGpzb25Cb2R5KSA6IFN0cmluZy5lbXB0eSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4gZGF0YSkpXG4gICAgICAuY2F0Y2goKCkgPT4geyB0aGlzLmZsYWcgPSBmYWxzZTsgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==