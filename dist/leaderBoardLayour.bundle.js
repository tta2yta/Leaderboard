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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaderBoardLayour=()=> {
  const scoresArray = [{ name: 'AAA', score: 98 }, { name: 'BBB', score: 68 },
    { name: 'CCC', score: 78 }, { name: 'DDD', score: 89 }, { name: 'EEE', score: 100 }];
  const errorDiv = document.createElement('div');
  errorDiv.id = 'errorDiv';
  errorDiv.className = 'errorDiv';
  const container = document.createElement('div');
  container.className = 'container';
  const leaderBoardHeader = document.createElement('h1');
  leaderBoardHeader.textContent = 'LeaderBoard';
  container.appendChild(errorDiv);
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
  refreshBtn.id = 'refreshbtn';
  refreshBtn.textContent = 'Refresh';
  refresh.appendChild(recentScores);
  refresh.appendChild(refreshBtn);
  scores.appendChild(refresh);
  const listScores = document.createElement('div');
  listScores.className = 'list-scores';
  const ulList = document.createElement('ul');
  ulList.id = 'ulList';
  scoresArray.forEach((element) => {
    const items = document.createElement('li');
    items.id = 'scoresList-items';
    items.className = 'scoresList-items';
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
  submitBtn.id = 'addscorebtn';
  submitBtn.value = 'Submit';
  const submitDivErr = document.createElement('div');
  submitDivErr.className = 'submitDivErr';
  submitBtnDiv.appendChild(submitBtn);
  formAdd.appendChild(playerNameDiv);
  formAdd.appendChild(playerScoreDiv);
  formAdd.appendChild(submitDivErr);
  formAddDiv.appendChild(formAdd);
  formAddDiv.appendChild(submitBtnDiv);
  addScore.appendChild(addScoreHeader);
  addScore.appendChild(formAddDiv);
  leaderboard.appendChild(scores);
  leaderboard.appendChild(addScore);
  container.appendChild(leaderboard);
  return container;
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFnQjtBQUNoQix3QkFBd0IseUJBQXlCLEdBQUcseUJBQXlCO0FBQzdFLEtBQUsseUJBQXlCLEdBQUcseUJBQXlCLEdBQUcsMEJBQTBCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEdBQUcsYUFBYSxHQUFHLGNBQWMsRUFBRTtBQUM5RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJsZWFkZXJCb2FyZExheW91ci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0ICBsZWFkZXJCb2FyZExheW91cj0oKT0+IHtcbiAgY29uc3Qgc2NvcmVzQXJyYXkgPSBbeyBuYW1lOiAnQUFBJywgc2NvcmU6IDk4IH0sIHsgbmFtZTogJ0JCQicsIHNjb3JlOiA2OCB9LFxuICAgIHsgbmFtZTogJ0NDQycsIHNjb3JlOiA3OCB9LCB7IG5hbWU6ICdEREQnLCBzY29yZTogODkgfSwgeyBuYW1lOiAnRUVFJywgc2NvcmU6IDEwMCB9XTtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JEaXYuaWQgPSAnZXJyb3JEaXYnO1xuICBlcnJvckRpdi5jbGFzc05hbWUgPSAnZXJyb3JEaXYnO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICBjb25zdCBsZWFkZXJCb2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxlYWRlckJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gJ0xlYWRlckJvYXJkJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlYWRlckJvYXJkSGVhZGVyKTtcbiAgY29uc3QgbGVhZGVyYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVhZGVyYm9hcmQuY2xhc3NOYW1lID0gJ2xlYWRlcmJvYXJkJztcbiAgY29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjb3Jlcy5jbGFzc05hbWUgPSAnc2NvcmVzJztcbiAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZWZyZXNoLmNsYXNzTmFtZSA9ICdyZWZyZXNoJztcbiAgY29uc3QgcmVjZW50U2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcmVjZW50U2NvcmVzLnRleHRDb250ZW50ID0gJ1JlY2VudCBzY29yZXMnO1xuICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlZnJlc2hCdG4uaWQgPSAncmVmcmVzaGJ0bic7XG4gIHJlZnJlc2hCdG4udGV4dENvbnRlbnQgPSAnUmVmcmVzaCc7XG4gIHJlZnJlc2guYXBwZW5kQ2hpbGQocmVjZW50U2NvcmVzKTtcbiAgcmVmcmVzaC5hcHBlbmRDaGlsZChyZWZyZXNoQnRuKTtcbiAgc2NvcmVzLmFwcGVuZENoaWxkKHJlZnJlc2gpO1xuICBjb25zdCBsaXN0U2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RTY29yZXMuY2xhc3NOYW1lID0gJ2xpc3Qtc2NvcmVzJztcbiAgY29uc3QgdWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWxMaXN0LmlkID0gJ3VsTGlzdCc7XG4gIHNjb3Jlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbXMuaWQgPSAnc2NvcmVzTGlzdC1pdGVtcyc7XG4gICAgaXRlbXMuY2xhc3NOYW1lID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgIGl0ZW1zLnRleHRDb250ZW50ID0gYCR7YCR7ZWxlbWVudC5uYW1lfToke2VsZW1lbnQuc2NvcmV9YH1gO1xuICAgIHVsTGlzdC5hcHBlbmRDaGlsZChpdGVtcyk7XG4gIH0pO1xuICBsaXN0U2NvcmVzLmFwcGVuZENoaWxkKHVsTGlzdCk7XG4gIHNjb3Jlcy5hcHBlbmRDaGlsZChsaXN0U2NvcmVzKTtcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoc2NvcmVzKTtcbiAgY29uc3QgYWRkU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkU2NvcmUuY2xhc3NOYW1lID0gJ2FkZC1zY29yZSc7XG4gIGNvbnN0IGFkZFNjb3JlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYWRkU2NvcmVIZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIFlvdXIgU2NvcmVzJztcbiAgY29uc3QgZm9ybUFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQWRkRGl2LmNsYXNzTmFtZSA9ICdmb3JtLWFkZCc7XG4gIGNvbnN0IGZvcm1BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBsYXllck5hbWUudHlwZSA9ICd0ZXh0JztcbiAgcGxheWVyTmFtZS5pZCA9ICduYW1lJztcbiAgcGxheWVyTmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICBwbGF5ZXJOYW1lRGl2LmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuICBjb25zdCBwbGF5ZXJTY29yZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBsYXllclNjb3JlLnR5cGUgPSAndGV4dCc7XG4gIHBsYXllclNjb3JlLmlkID0gJ3Njb3JlJztcbiAgcGxheWVyU2NvcmUucGxhY2Vob2xkZXIgPSAnWW91ciBzY29yZSc7XG4gIHBsYXllclNjb3JlRGl2LmFwcGVuZENoaWxkKHBsYXllclNjb3JlKTtcbiAgY29uc3Qgc3VibWl0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHN1Ym1pdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIHN1Ym1pdEJ0bi5pZCA9ICdhZGRzY29yZWJ0bic7XG4gIHN1Ym1pdEJ0bi52YWx1ZSA9ICdTdWJtaXQnO1xuICBjb25zdCBzdWJtaXREaXZFcnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWl0RGl2RXJyLmNsYXNzTmFtZSA9ICdzdWJtaXREaXZFcnInO1xuICBzdWJtaXRCdG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KTtcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZURpdik7XG4gIGZvcm1BZGQuYXBwZW5kQ2hpbGQoc3VibWl0RGl2RXJyKTtcbiAgZm9ybUFkZERpdi5hcHBlbmRDaGlsZChmb3JtQWRkKTtcbiAgZm9ybUFkZERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG5EaXYpO1xuICBhZGRTY29yZS5hcHBlbmRDaGlsZChhZGRTY29yZUhlYWRlcik7XG4gIGFkZFNjb3JlLmFwcGVuZENoaWxkKGZvcm1BZGREaXYpO1xuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXMpO1xuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChhZGRTY29yZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJib2FyZCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9