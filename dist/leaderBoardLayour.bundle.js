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
/*!**********************************!*\
  !*** ./src/leaderboardlayout.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leaderBoardLayour)
/* harmony export */ });
function leaderBoardLayour() {
  const scoresArray = [{ name: 'AAA', score: 98 }, { name: 'BBB', score: 68 },
    { name: 'CCC', score: 78 }, { name: 'DDD', score: 89 }, { name: 'EEE', score: 100 }];
  const container = document.createElement('div');
  container.className = 'container';
  const leaderBoardHeader = document.createElement('h1');
  leaderBoardHeader.textContent = 'LeaderBoard';
  container.appendChild(leaderBoardHeader);
  const leaderboard = document.createElement('div');
  leaderboard.className = 'leaderboard';
  const scores = document.createElement('div');
  scores.className = 'scores';
  const refresh = document.createElement('div');
  refresh.className = 'refresh';
  const recentScores = document.createElement('h2');
  recentScores.textContent = 'Recent scores';
  const refreshBtn = document.createElement('button');
  refreshBtn.textContent = 'Refresh';
  refresh.appendChild(recentScores);
  refresh.appendChild(refreshBtn);
  scores.appendChild(refresh);
  const listScores = document.createElement('div');
  listScores.className = 'list-scores';
  const ulList = document.createElement('ul');
  scoresArray.forEach((element) => {
    const items = document.createElement('li');
    items.textContent = `${`${element.name}:${element.score}`}`;
    ulList.appendChild(items);
  });
  listScores.appendChild(ulList);
  scores.appendChild(listScores);
  leaderboard.appendChild(scores);
  const addScore = document.createElement('div');
  addScore.className = 'add-score';
  const addScoreHeader = document.createElement('h2');
  addScoreHeader.textContent = 'Add Your Scores';
  const formAddDiv = document.createElement('div');
  formAddDiv.className = 'form-add';
  const formAdd = document.createElement('form');
  const playerNameDiv = document.createElement('div');
  const playerName = document.createElement('input');
  playerName.type = 'text';
  playerName.id = 'name';
  playerName.placeholder = 'Your name';
  playerNameDiv.appendChild(playerName);
  const playerScoreDiv = document.createElement('div');
  const playerScore = document.createElement('input');
  playerScore.type = 'text';
  playerScore.id = 'score';
  playerScore.placeholder = 'Your score';
  playerScoreDiv.appendChild(playerScore);
  const submitBtnDiv = document.createElement('div');
  const submitBtn = document.createElement('input');
  submitBtn.type = 'button';
  submitBtn.id = 'submit';
  submitBtn.value = 'Submit';
  submitBtnDiv.appendChild(submitBtn);
  formAdd.appendChild(playerNameDiv);
  formAdd.appendChild(playerScoreDiv);
  formAdd.appendChild(submitBtnDiv);
  formAddDiv.appendChild(formAdd);
  addScore.appendChild(addScoreHeader);
  addScore.appendChild(formAddDiv);
  leaderboard.appendChild(scores);
  leaderboard.appendChild(addScore);
  container.appendChild(leaderboard);
  return container;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Ysd0JBQXdCLHlCQUF5QixHQUFHLHlCQUF5QjtBQUM3RSxLQUFLLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEdBQUcsYUFBYSxHQUFHLGNBQWMsRUFBRTtBQUM5RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGVhZGVyQm9hcmRMYXlvdXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFkZXJCb2FyZExheW91cigpIHtcbiAgY29uc3Qgc2NvcmVzQXJyYXkgPSBbeyBuYW1lOiAnQUFBJywgc2NvcmU6IDk4IH0sIHsgbmFtZTogJ0JCQicsIHNjb3JlOiA2OCB9LFxuICAgIHsgbmFtZTogJ0NDQycsIHNjb3JlOiA3OCB9LCB7IG5hbWU6ICdEREQnLCBzY29yZTogODkgfSwgeyBuYW1lOiAnRUVFJywgc2NvcmU6IDEwMCB9XTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29uc3QgbGVhZGVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsZWFkZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdMZWFkZXJCb2FyZCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJCb2FyZEhlYWRlcik7XG4gIGNvbnN0IGxlYWRlcmJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9ICdsZWFkZXJib2FyZCc7XG4gIGNvbnN0IHNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZXMuY2xhc3NOYW1lID0gJ3Njb3Jlcyc7XG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVmcmVzaC5jbGFzc05hbWUgPSAncmVmcmVzaCc7XG4gIGNvbnN0IHJlY2VudFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHJlY2VudFNjb3Jlcy50ZXh0Q29udGVudCA9ICdSZWNlbnQgc2NvcmVzJztcbiAgY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZWZyZXNoQnRuLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xuICByZWZyZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XG4gIHJlZnJlc2guYXBwZW5kQ2hpbGQocmVmcmVzaEJ0bik7XG4gIHNjb3Jlcy5hcHBlbmRDaGlsZChyZWZyZXNoKTtcbiAgY29uc3QgbGlzdFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0U2NvcmVzLmNsYXNzTmFtZSA9ICdsaXN0LXNjb3Jlcyc7XG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNjb3Jlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbXMudGV4dENvbnRlbnQgPSBgJHtgJHtlbGVtZW50Lm5hbWV9OiR7ZWxlbWVudC5zY29yZX1gfWA7XG4gICAgdWxMaXN0LmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgfSk7XG4gIGxpc3RTY29yZXMuYXBwZW5kQ2hpbGQodWxMaXN0KTtcbiAgc2NvcmVzLmFwcGVuZENoaWxkKGxpc3RTY29yZXMpO1xuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXMpO1xuICBjb25zdCBhZGRTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRTY29yZS5jbGFzc05hbWUgPSAnYWRkLXNjb3JlJztcbiAgY29uc3QgYWRkU2NvcmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhZGRTY29yZUhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgWW91ciBTY29yZXMnO1xuICBjb25zdCBmb3JtQWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1BZGREaXYuY2xhc3NOYW1lID0gJ2Zvcm0tYWRkJztcbiAgY29uc3QgZm9ybUFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGxheWVyTmFtZS50eXBlID0gJ3RleHQnO1xuICBwbGF5ZXJOYW1lLmlkID0gJ25hbWUnO1xuICBwbGF5ZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gIHBsYXllck5hbWVEaXYuYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gIGNvbnN0IHBsYXllclNjb3JlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGxheWVyU2NvcmUudHlwZSA9ICd0ZXh0JztcbiAgcGxheWVyU2NvcmUuaWQgPSAnc2NvcmUnO1xuICBwbGF5ZXJTY29yZS5wbGFjZWhvbGRlciA9ICdZb3VyIHNjb3JlJztcbiAgcGxheWVyU2NvcmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyU2NvcmUpO1xuICBjb25zdCBzdWJtaXRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgc3VibWl0QnRuLmlkID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdEJ0bi52YWx1ZSA9ICdTdWJtaXQnO1xuICBzdWJtaXRCdG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KTtcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZURpdik7XG4gIGZvcm1BZGQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuRGl2KTtcbiAgZm9ybUFkZERpdi5hcHBlbmRDaGlsZChmb3JtQWRkKTtcbiAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVIZWFkZXIpO1xuICBhZGRTY29yZS5hcHBlbmRDaGlsZChmb3JtQWRkRGl2KTtcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoc2NvcmVzKTtcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoYWRkU2NvcmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==