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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Ysd0JBQXdCLHlCQUF5QixHQUFHLHlCQUF5QjtBQUM3RSxLQUFLLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEdBQUcsYUFBYSxHQUFHLGNBQWMsRUFBRTtBQUM5RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGVhZGVyQm9hcmRMYXlvdXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFkZXJCb2FyZExheW91cigpIHtcclxuICBjb25zdCBzY29yZXNBcnJheSA9IFt7IG5hbWU6ICdBQUEnLCBzY29yZTogOTggfSwgeyBuYW1lOiAnQkJCJywgc2NvcmU6IDY4IH0sXHJcbiAgICB7IG5hbWU6ICdDQ0MnLCBzY29yZTogNzggfSwgeyBuYW1lOiAnREREJywgc2NvcmU6IDg5IH0sIHsgbmFtZTogJ0VFRScsIHNjb3JlOiAxMDAgfV07XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gIGNvbnN0IGxlYWRlckJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBsZWFkZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdMZWFkZXJCb2FyZCc7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlYWRlckJvYXJkSGVhZGVyKTtcclxuICBjb25zdCBsZWFkZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9ICdsZWFkZXJib2FyZCc7XHJcbiAgY29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2NvcmVzLmNsYXNzTmFtZSA9ICdzY29yZXMnO1xyXG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZWZyZXNoLmNsYXNzTmFtZSA9ICdyZWZyZXNoJztcclxuICBjb25zdCByZWNlbnRTY29yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHJlY2VudFNjb3Jlcy50ZXh0Q29udGVudCA9ICdSZWNlbnQgc2NvcmVzJztcclxuICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVmcmVzaEJ0bi50ZXh0Q29udGVudCA9ICdSZWZyZXNoJztcclxuICByZWZyZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XHJcbiAgcmVmcmVzaC5hcHBlbmRDaGlsZChyZWZyZXNoQnRuKTtcclxuICBzY29yZXMuYXBwZW5kQ2hpbGQocmVmcmVzaCk7XHJcbiAgY29uc3QgbGlzdFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpc3RTY29yZXMuY2xhc3NOYW1lID0gJ2xpc3Qtc2NvcmVzJztcclxuICBjb25zdCB1bExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIHNjb3Jlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW1zLnRleHRDb250ZW50ID0gYCR7YCR7ZWxlbWVudC5uYW1lfToke2VsZW1lbnQuc2NvcmV9YH1gO1xyXG4gICAgdWxMaXN0LmFwcGVuZENoaWxkKGl0ZW1zKTtcclxuICB9KTtcclxuICBsaXN0U2NvcmVzLmFwcGVuZENoaWxkKHVsTGlzdCk7XHJcbiAgc2NvcmVzLmFwcGVuZENoaWxkKGxpc3RTY29yZXMpO1xyXG4gIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKHNjb3Jlcyk7XHJcbiAgY29uc3QgYWRkU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRTY29yZS5jbGFzc05hbWUgPSAnYWRkLXNjb3JlJztcclxuICBjb25zdCBhZGRTY29yZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgYWRkU2NvcmVIZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIFlvdXIgU2NvcmVzJztcclxuICBjb25zdCBmb3JtQWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9ybUFkZERpdi5jbGFzc05hbWUgPSAnZm9ybS1hZGQnO1xyXG4gIGNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHBsYXllck5hbWUudHlwZSA9ICd0ZXh0JztcclxuICBwbGF5ZXJOYW1lLmlkID0gJ25hbWUnO1xyXG4gIHBsYXllck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcclxuICBwbGF5ZXJOYW1lRGl2LmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xyXG4gIGNvbnN0IHBsYXllclNjb3JlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHBsYXllclNjb3JlLnR5cGUgPSAndGV4dCc7XHJcbiAgcGxheWVyU2NvcmUuaWQgPSAnc2NvcmUnO1xyXG4gIHBsYXllclNjb3JlLnBsYWNlaG9sZGVyID0gJ1lvdXIgc2NvcmUnO1xyXG4gIHBsYXllclNjb3JlRGl2LmFwcGVuZENoaWxkKHBsYXllclNjb3JlKTtcclxuICBjb25zdCBzdWJtaXRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHN1Ym1pdEJ0bi50eXBlID0gJ2J1dHRvbic7XHJcbiAgc3VibWl0QnRuLmlkID0gJ3N1Ym1pdCc7XHJcbiAgc3VibWl0QnRuLnZhbHVlID0gJ1N1Ym1pdCc7XHJcbiAgc3VibWl0QnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KTtcclxuICBmb3JtQWRkLmFwcGVuZENoaWxkKHBsYXllclNjb3JlRGl2KTtcclxuICBmb3JtQWRkLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bkRpdik7XHJcbiAgZm9ybUFkZERpdi5hcHBlbmRDaGlsZChmb3JtQWRkKTtcclxuICBhZGRTY29yZS5hcHBlbmRDaGlsZChhZGRTY29yZUhlYWRlcik7XHJcbiAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoZm9ybUFkZERpdik7XHJcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoc2NvcmVzKTtcclxuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChhZGRTY29yZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlYWRlcmJvYXJkKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=