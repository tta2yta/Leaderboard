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
const leaderBoardLayour = () => {
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leaderBoardLayour);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esd0JBQXdCLHlCQUF5QixHQUFHLHlCQUF5QjtBQUM3RSxLQUFLLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixHQUFHLGFBQWEsR0FBRyxjQUFjLEVBQUU7QUFDOUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFIiwiZmlsZSI6ImxlYWRlckJvYXJkTGF5b3VyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbGVhZGVyQm9hcmRMYXlvdXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNjb3Jlc0FycmF5ID0gW3sgbmFtZTogJ0FBQScsIHNjb3JlOiA5OCB9LCB7IG5hbWU6ICdCQkInLCBzY29yZTogNjggfSxcbiAgICB7IG5hbWU6ICdDQ0MnLCBzY29yZTogNzggfSwgeyBuYW1lOiAnREREJywgc2NvcmU6IDg5IH0sIHsgbmFtZTogJ0VFRScsIHNjb3JlOiAxMDAgfV07XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yRGl2LmlkID0gJ2Vycm9yRGl2JztcbiAgZXJyb3JEaXYuY2xhc3NOYW1lID0gJ2Vycm9yRGl2JztcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29uc3QgbGVhZGVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsZWFkZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdMZWFkZXJCb2FyZCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJCb2FyZEhlYWRlcik7XG4gIGNvbnN0IGxlYWRlcmJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9ICdsZWFkZXJib2FyZCc7XG4gIGNvbnN0IHNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY29yZXMuY2xhc3NOYW1lID0gJ3Njb3Jlcyc7XG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVmcmVzaC5jbGFzc05hbWUgPSAncmVmcmVzaCc7XG4gIGNvbnN0IHJlY2VudFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHJlY2VudFNjb3Jlcy50ZXh0Q29udGVudCA9ICdSZWNlbnQgc2NvcmVzJztcbiAgY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZWZyZXNoQnRuLmlkID0gJ3JlZnJlc2hidG4nO1xuICByZWZyZXNoQnRuLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xuICByZWZyZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XG4gIHJlZnJlc2guYXBwZW5kQ2hpbGQocmVmcmVzaEJ0bik7XG4gIHNjb3Jlcy5hcHBlbmRDaGlsZChyZWZyZXNoKTtcbiAgY29uc3QgbGlzdFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0U2NvcmVzLmNsYXNzTmFtZSA9ICdsaXN0LXNjb3Jlcyc7XG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsTGlzdC5pZCA9ICd1bExpc3QnO1xuICBzY29yZXNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW1zLmlkID0gJ3Njb3Jlc0xpc3QtaXRlbXMnO1xuICAgIGl0ZW1zLmNsYXNzTmFtZSA9ICdzY29yZXNMaXN0LWl0ZW1zJztcbiAgICBpdGVtcy50ZXh0Q29udGVudCA9IGAke2Ake2VsZW1lbnQubmFtZX06JHtlbGVtZW50LnNjb3JlfWB9YDtcbiAgICB1bExpc3QuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuICB9KTtcbiAgbGlzdFNjb3Jlcy5hcHBlbmRDaGlsZCh1bExpc3QpO1xuICBzY29yZXMuYXBwZW5kQ2hpbGQobGlzdFNjb3Jlcyk7XG4gIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKHNjb3Jlcyk7XG4gIGNvbnN0IGFkZFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFNjb3JlLmNsYXNzTmFtZSA9ICdhZGQtc2NvcmUnO1xuICBjb25zdCBhZGRTY29yZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFkZFNjb3JlSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBZb3VyIFNjb3Jlcyc7XG4gIGNvbnN0IGZvcm1BZGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUFkZERpdi5jbGFzc05hbWUgPSAnZm9ybS1hZGQnO1xuICBjb25zdCBmb3JtQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwbGF5ZXJOYW1lLnR5cGUgPSAndGV4dCc7XG4gIHBsYXllck5hbWUuaWQgPSAnbmFtZSc7XG4gIHBsYXllck5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbiAgcGxheWVyTmFtZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcbiAgY29uc3QgcGxheWVyU2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwbGF5ZXJTY29yZS50eXBlID0gJ3RleHQnO1xuICBwbGF5ZXJTY29yZS5pZCA9ICdzY29yZSc7XG4gIHBsYXllclNjb3JlLnBsYWNlaG9sZGVyID0gJ1lvdXIgc2NvcmUnO1xuICBwbGF5ZXJTY29yZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZSk7XG4gIGNvbnN0IHN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWJtaXRCdG4udHlwZSA9ICdidXR0b24nO1xuICBzdWJtaXRCdG4uaWQgPSAnYWRkc2NvcmVidG4nO1xuICBzdWJtaXRCdG4udmFsdWUgPSAnU3VibWl0JztcbiAgY29uc3Qgc3VibWl0RGl2RXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Ym1pdERpdkVyci5jbGFzc05hbWUgPSAnc3VibWl0RGl2RXJyJztcbiAgc3VibWl0QnRuRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm1BZGQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZURpdik7XG4gIGZvcm1BZGQuYXBwZW5kQ2hpbGQocGxheWVyU2NvcmVEaXYpO1xuICBmb3JtQWRkLmFwcGVuZENoaWxkKHN1Ym1pdERpdkVycik7XG4gIGZvcm1BZGREaXYuYXBwZW5kQ2hpbGQoZm9ybUFkZCk7XG4gIGZvcm1BZGREaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuRGl2KTtcbiAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVIZWFkZXIpO1xuICBhZGRTY29yZS5hcHBlbmRDaGlsZChmb3JtQWRkRGl2KTtcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoc2NvcmVzKTtcbiAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoYWRkU2NvcmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGVhZGVyQm9hcmRMYXlvdXI7Il0sInNvdXJjZVJvb3QiOiIifQ==