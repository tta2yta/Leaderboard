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
    this.flag=true;
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
    console.log(response)
    if(this.flag===false){
        document.getElementById('errorDiv').textContent="Bad Request, Please Try Again!!!";
        setTimeout(function(){
            document.getElementById("errorDiv").innerHTML = '';
        }, 3500);
    }else
    this.setId(response);
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
      const name= document.getElementById('name').value;
      const score= document.getElementById('score').value;
      if(name==='' || score===''){
        document.querySelector('.submitDivErr').textContent="Please provide a value for game name and score";
        setTimeout(function(){
            document.querySelector(".submitDivErr").innerHTML = '';
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
  }

  async fetchApi(url, method, jsonBody = null) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
      },
      method,
      body: jsonBody !== null ? JSON.stringify(jsonBody) : String.empty,
    }).then((res) => res.json().then((data) => data)).
    catch(err=>{this.flag=false});
    return response;
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLDRCQUE0QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWEsR0FBRyxjQUFjO0FBQzVEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDRCQUE0QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjLEdBQUcsZUFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0EsQyIsImZpbGUiOiJsZWFkZXJib2FyZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgdGhpcy5mbGFnPXRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRJZChpZCkge1xyXG4gICAgbGV0IHRva2VuSWQgPSBpZC5yZXN1bHQuc3Vic3RyaW5nKGlkLnJlc3VsdC5pbmRleE9mKCc6JykpO1xyXG4gICAgdG9rZW5JZCA9IHRva2VuSWQuc3Vic3RyaW5nKHRva2VuSWQubGFzdEluZGV4T2YoJzonKSArIDEsIHRva2VuSWQubGFzdEluZGV4T2YoJyAnKSk7XHJcbiAgICB0aGlzLmlkID0gdG9rZW5JZDtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGVHYW1lKG5hbWUpIHtcclxuICAgIGNvbnN0IGdhbWVOYW1lID0geyBuYW1lIH07XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXNzLyc7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hBcGkodXJsLCAnUE9TVCcsIGdhbWVOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgaWYodGhpcy5mbGFnPT09ZmFsc2Upe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckRpdicpLnRleHRDb250ZW50PVwiQmFkIFJlcXVlc3QsIFBsZWFzZSBUcnkgQWdhaW4hISFcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JEaXZcIikuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSwgMzUwMCk7XHJcbiAgICB9ZWxzZVxyXG4gICAgdGhpcy5zZXRJZChyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkaXNwbGF5U2NvcmVzKCkge1xyXG4gICAgaWYgKHRoaXMuaWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3Qgc2NvcmVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bExpc3QnKTtcclxuICAgICAgd2hpbGUgKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHNjb3Jlc0xpc3QucmVtb3ZlQ2hpbGQoc2NvcmVzTGlzdC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGloL2dhbWVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuaWQpfS9zY29yZXMvYDtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ0dFVCcpO1xyXG4gICAgICByZXNwb25zZS5yZXN1bHQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xyXG4gICAgICAgIGl0ZW0uaWQgPSAnc2NvcmVzTGlzdC1pdGVtcyc7XHJcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudXNlcn06JHtlbGVtZW50LnNjb3JlfWA7XHJcbiAgICAgICAgc2NvcmVzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRTY29yZSgpIHtcclxuICAgICAgY29uc3QgbmFtZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcclxuICAgICAgY29uc3Qgc2NvcmU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlO1xyXG4gICAgICBpZihuYW1lPT09JycgfHwgc2NvcmU9PT0nJyl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdERpdkVycicpLnRleHRDb250ZW50PVwiUGxlYXNlIHByb3ZpZGUgYSB2YWx1ZSBmb3IgZ2FtZSBuYW1lIGFuZCBzY29yZVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXREaXZFcnJcIikuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICBpZiAodGhpcy5pZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5pZCl9L3Njb3Jlcy9gO1xyXG4gICAgICBjb25zdCBuZXdTY29yZSA9IHtcclxuICAgICAgICB1c2VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLFxyXG4gICAgICAgIHNjb3JlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS52YWx1ZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ1BPU1QnLCBuZXdTY29yZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgPT09ICdMZWFkZXJib2FyZCBzY29yZSBjcmVhdGVkIGNvcnJlY3RseS4nKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bExpc3QnKTtcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdzY29yZXNMaXN0LWl0ZW1zJztcclxuICAgICAgICBpdGVtLmlkID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xyXG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtuZXdTY29yZS51c2VyfToke25ld1Njb3JlLnNjb3JlfWA7XHJcbiAgICAgICAgc2NvcmVzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBcGkodXJsLCBtZXRob2QsIGpzb25Cb2R5ID0gbnVsbCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIgOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzonUE9TVCxQQVRDSCxPUFRJT05TJ1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGJvZHk6IGpzb25Cb2R5ICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpIDogU3RyaW5nLmVtcHR5LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IGRhdGEpKS5cclxuICAgIGNhdGNoKGVycj0+e3RoaXMuZmxhZz1mYWxzZX0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=