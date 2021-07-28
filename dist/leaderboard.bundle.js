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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssT0FBTyxzQkFBc0I7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDRCQUE0QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWEsR0FBRyxjQUFjO0FBQzVEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDRCQUE0QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjLEdBQUcsZUFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLG1CQUFtQixFQUFFO0FBQ3pDO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgc2V0SWQoaWQpIHtcbiAgICBsZXQgdG9rZW5JZCA9IGlkLnJlc3VsdC5zdWJzdHJpbmcoaWQucmVzdWx0LmluZGV4T2YoJzonKSk7XG4gICAgdG9rZW5JZCA9IHRva2VuSWQuc3Vic3RyaW5nKHRva2VuSWQubGFzdEluZGV4T2YoJzonKSArIDEsIHRva2VuSWQubGFzdEluZGV4T2YoJyAnKSk7XG4gICAgdGhpcy5pZCA9IHRva2VuSWQ7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gICBjcmVhdGVHYW1lPWFzeW5jKG5hbWUpPT4ge1xuICAgIGNvbnN0IGdhbWVOYW1lID0geyBuYW1lIH07XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ1BPU1QnLCBnYW1lTmFtZSk7XG4gICAgaWYgKHRoaXMuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckRpdicpLnRleHRDb250ZW50ID0gJ0JhZCBSZXF1ZXN0LCBQbGVhc2UgVHJ5IEFnYWluISEhJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JEaXYnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0sIDM1MDApO1xuICAgIH0gZWxzZSB7IHRoaXMuc2V0SWQocmVzcG9uc2UpOyB9XG4gIH1cblxuICAgZGlzcGxheVNjb3Jlcz1hc3luYygpPT4ge1xuICAgIGlmICh0aGlzLmlkICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzY29yZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VsTGlzdCcpO1xuICAgICAgd2hpbGUgKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBzY29yZXNMaXN0LnJlbW92ZUNoaWxkKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5pZCl9L3Njb3Jlcy9gO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ0dFVCcpO1xuICAgICAgcmVzcG9uc2UucmVzdWx0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICBpdGVtLmlkID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC51c2VyfToke2VsZW1lbnQuc2NvcmV9YDtcbiAgICAgICAgc2NvcmVzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gICBhZGRTY29yZT1hc3luYygpPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykudmFsdWU7XG4gICAgaWYgKG5hbWUgPT09ICcnIHx8IHNjb3JlID09PSAnJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdERpdkVycicpLnRleHRDb250ZW50ID0gJ1BsZWFzZSBwcm92aWRlIGEgdmFsdWUgZm9yIGdhbWUgbmFtZSBhbmQgc2NvcmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXREaXZFcnInKS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0sIDE1MDApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuaWQpfS9zY29yZXMvYDtcbiAgICAgIGNvbnN0IG5ld1Njb3JlID0ge1xuICAgICAgICB1c2VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLFxuICAgICAgICBzY29yZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJykudmFsdWUsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ1BPU1QnLCBuZXdTY29yZSk7XG4gICAgICBpZiAocmVzcG9uc2UucmVzdWx0ID09PSAnTGVhZGVyYm9hcmQgc2NvcmUgY3JlYXRlZCBjb3JyZWN0bHkuJykge1xuICAgICAgICBjb25zdCBzY29yZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VsTGlzdCcpO1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnc2NvcmVzTGlzdC1pdGVtcyc7XG4gICAgICAgIGl0ZW0uaWQgPSAnc2NvcmVzTGlzdC1pdGVtcyc7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtuZXdTY29yZS51c2VyfToke25ld1Njb3JlLnNjb3JlfWA7XG4gICAgICAgIHNjb3Jlc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgIGZldGNoQXBpPWFzeW5jKHVybCwgbWV0aG9kLCBqc29uQm9keSA9IG51bGwpID0+e1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ1BPU1QsUEFUQ0gsT1BUSU9OUyxHRVQnLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGJvZHk6IGpzb25Cb2R5ICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpIDogU3RyaW5nLmVtcHR5LFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiBkYXRhKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7IHRoaXMuZmxhZyA9IGZhbHNlOyB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9