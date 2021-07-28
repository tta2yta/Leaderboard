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

   createGame=async (name) => {
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

   displayScores=async () => {
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

   addScore=async () => {
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

   fetchApi=async (url, method, jsonBody = null) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU0sT0FBTyxzQkFBc0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLDRCQUE0QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWEsR0FBRyxjQUFjO0FBQzdEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLDRCQUE0QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLEdBQUcsZUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUJBQXFCLG1CQUFtQixFQUFFO0FBQzFDO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLmZsYWcgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgc2V0SWQoaWQpIHtcbiAgICBsZXQgdG9rZW5JZCA9IGlkLnJlc3VsdC5zdWJzdHJpbmcoaWQucmVzdWx0LmluZGV4T2YoJzonKSk7XG4gICAgdG9rZW5JZCA9IHRva2VuSWQuc3Vic3RyaW5nKHRva2VuSWQubGFzdEluZGV4T2YoJzonKSArIDEsIHRva2VuSWQubGFzdEluZGV4T2YoJyAnKSk7XG4gICAgdGhpcy5pZCA9IHRva2VuSWQ7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gICBjcmVhdGVHYW1lPWFzeW5jIChuYW1lKSA9PiB7XG4gICAgIGNvbnN0IGdhbWVOYW1lID0geyBuYW1lIH07XG4gICAgIGNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8nO1xuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hBcGkodXJsLCAnUE9TVCcsIGdhbWVOYW1lKTtcbiAgICAgaWYgKHRoaXMuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JEaXYnKS50ZXh0Q29udGVudCA9ICdCYWQgUmVxdWVzdCwgUGxlYXNlIFRyeSBBZ2FpbiEhISc7XG4gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JEaXYnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICB9LCAzNTAwKTtcbiAgICAgfSBlbHNlIHsgdGhpcy5zZXRJZChyZXNwb25zZSk7IH1cbiAgIH1cblxuICAgZGlzcGxheVNjb3Jlcz1hc3luYyAoKSA9PiB7XG4gICAgIGlmICh0aGlzLmlkICE9PSBudWxsKSB7XG4gICAgICAgY29uc3Qgc2NvcmVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bExpc3QnKTtcbiAgICAgICB3aGlsZSAoc2NvcmVzTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICBzY29yZXNMaXN0LnJlbW92ZUNoaWxkKHNjb3Jlc0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgfVxuICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLmlkKX0vc2NvcmVzL2A7XG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ0dFVCcpO1xuICAgICAgIHJlc3BvbnNlLnJlc3VsdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICAgaXRlbS5pZCA9ICdzY29yZXNMaXN0LWl0ZW1zJztcbiAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnVzZXJ9OiR7ZWxlbWVudC5zY29yZX1gO1xuICAgICAgICAgc2NvcmVzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICB9KTtcbiAgICAgfVxuICAgfVxuXG4gICBhZGRTY29yZT1hc3luYyAoKSA9PiB7XG4gICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlO1xuICAgICBpZiAobmFtZSA9PT0gJycgfHwgc2NvcmUgPT09ICcnKSB7XG4gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdERpdkVycicpLnRleHRDb250ZW50ID0gJ1BsZWFzZSBwcm92aWRlIGEgdmFsdWUgZm9yIGdhbWUgbmFtZSBhbmQgc2NvcmUnO1xuICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdERpdkVycicpLmlubmVySFRNTCA9ICcnO1xuICAgICAgIH0sIDE1MDApO1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgfVxuICAgICBpZiAodGhpcy5pZCAhPT0gbnVsbCkge1xuICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLmlkKX0vc2NvcmVzL2A7XG4gICAgICAgY29uc3QgbmV3U2NvcmUgPSB7XG4gICAgICAgICB1c2VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLFxuICAgICAgICAgc2NvcmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLnZhbHVlLFxuICAgICAgIH07XG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoQXBpKHVybCwgJ1BPU1QnLCBuZXdTY29yZSk7XG4gICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCA9PT0gJ0xlYWRlcmJvYXJkIHNjb3JlIGNyZWF0ZWQgY29ycmVjdGx5LicpIHtcbiAgICAgICAgIGNvbnN0IHNjb3Jlc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndWxMaXN0Jyk7XG4gICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgICAgICAgaXRlbS5pZCA9ICdzY29yZXNMaXN0LWl0ZW1zJztcbiAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtuZXdTY29yZS51c2VyfToke25ld1Njb3JlLnNjb3JlfWA7XG4gICAgICAgICBzY29yZXNMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgIH1cbiAgICAgfVxuICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgZmV0Y2hBcGk9YXN5bmMgKHVybCwgbWV0aG9kLCBqc29uQm9keSA9IG51bGwpID0+IHtcbiAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlJyxcbiAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULFBBVENILE9QVElPTlMsR0VUJyxcbiAgICAgICB9LFxuICAgICAgIG1ldGhvZCxcbiAgICAgICBib2R5OiBqc29uQm9keSAhPT0gbnVsbCA/IEpTT04uc3RyaW5naWZ5KGpzb25Cb2R5KSA6IFN0cmluZy5lbXB0eSxcbiAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IGRhdGEpKVxuICAgICAgIC5jYXRjaCgoKSA9PiB7IHRoaXMuZmxhZyA9IGZhbHNlOyB9KTtcbiAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=