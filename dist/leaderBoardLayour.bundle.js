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
 const errorDiv=document.createElement("div");
 errorDiv.id="errorDiv" ;
 errorDiv.className="errorDiv"; 
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
  refreshBtn.id="refreshbtn";
  refreshBtn.textContent = 'Refresh';
  refresh.appendChild(recentScores);
  refresh.appendChild(refreshBtn);
  scores.appendChild(refresh);
  const listScores = document.createElement('div');
  listScores.className = 'list-scores';
  const ulList = document.createElement('ul');
  ulList.id="ulList"
  scoresArray.forEach((element) => {
    const items = document.createElement('li');
    items.id="scoresList-items"
    items.className="scoresList-items"
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
  submitDivErr.className="submitDivErr";
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
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Ysd0JBQXdCLHlCQUF5QixHQUFHLHlCQUF5QjtBQUM3RSxLQUFLLHlCQUF5QixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQjtBQUN2RjtBQUNBO0FBQ0EsK0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixHQUFHLGFBQWEsR0FBRyxjQUFjLEVBQUU7QUFDOUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxlYWRlckJvYXJkTGF5b3VyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVhZGVyQm9hcmRMYXlvdXIoKSB7XHJcbiAgY29uc3Qgc2NvcmVzQXJyYXkgPSBbeyBuYW1lOiAnQUFBJywgc2NvcmU6IDk4IH0sIHsgbmFtZTogJ0JCQicsIHNjb3JlOiA2OCB9LFxyXG4gICAgeyBuYW1lOiAnQ0NDJywgc2NvcmU6IDc4IH0sIHsgbmFtZTogJ0RERCcsIHNjb3JlOiA4OSB9LCB7IG5hbWU6ICdFRUUnLCBzY29yZTogMTAwIH1dO1xyXG4gY29uc3QgZXJyb3JEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuIGVycm9yRGl2LmlkPVwiZXJyb3JEaXZcIiA7XHJcbiBlcnJvckRpdi5jbGFzc05hbWU9XCJlcnJvckRpdlwiOyBcclxuIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICBjb25zdCBsZWFkZXJCb2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgbGVhZGVyQm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnTGVhZGVyQm9hcmQnO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckRpdik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlYWRlckJvYXJkSGVhZGVyKTtcclxuICBjb25zdCBsZWFkZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9ICdsZWFkZXJib2FyZCc7XHJcbiAgY29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2NvcmVzLmNsYXNzTmFtZSA9ICdzY29yZXMnO1xyXG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZWZyZXNoLmNsYXNzTmFtZSA9ICdyZWZyZXNoJztcclxuICBjb25zdCByZWNlbnRTY29yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHJlY2VudFNjb3Jlcy50ZXh0Q29udGVudCA9ICdSZWNlbnQgc2NvcmVzJztcclxuICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcmVmcmVzaEJ0bi5pZD1cInJlZnJlc2hidG5cIjtcclxuICByZWZyZXNoQnRuLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xyXG4gIHJlZnJlc2guYXBwZW5kQ2hpbGQocmVjZW50U2NvcmVzKTtcclxuICByZWZyZXNoLmFwcGVuZENoaWxkKHJlZnJlc2hCdG4pO1xyXG4gIHNjb3Jlcy5hcHBlbmRDaGlsZChyZWZyZXNoKTtcclxuICBjb25zdCBsaXN0U2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGlzdFNjb3Jlcy5jbGFzc05hbWUgPSAnbGlzdC1zY29yZXMnO1xyXG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgdWxMaXN0LmlkPVwidWxMaXN0XCJcclxuICBzY29yZXNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtcy5pZD1cInNjb3Jlc0xpc3QtaXRlbXNcIlxyXG4gICAgaXRlbXMuY2xhc3NOYW1lPVwic2NvcmVzTGlzdC1pdGVtc1wiXHJcbiAgICBpdGVtcy50ZXh0Q29udGVudCA9IGAke2Ake2VsZW1lbnQubmFtZX06JHtlbGVtZW50LnNjb3JlfWB9YDtcclxuICAgIHVsTGlzdC5hcHBlbmRDaGlsZChpdGVtcyk7XHJcbiAgfSk7XHJcbiAgbGlzdFNjb3Jlcy5hcHBlbmRDaGlsZCh1bExpc3QpO1xyXG4gIHNjb3Jlcy5hcHBlbmRDaGlsZChsaXN0U2NvcmVzKTtcclxuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXMpO1xyXG4gIGNvbnN0IGFkZFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkU2NvcmUuY2xhc3NOYW1lID0gJ2FkZC1zY29yZSc7XHJcbiAgY29uc3QgYWRkU2NvcmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGFkZFNjb3JlSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBZb3VyIFNjb3Jlcyc7XHJcbiAgY29uc3QgZm9ybUFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcm1BZGREaXYuY2xhc3NOYW1lID0gJ2Zvcm0tYWRkJztcclxuICBjb25zdCBmb3JtQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBwbGF5ZXJOYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgcGxheWVyTmFtZS5pZCA9ICduYW1lJztcclxuICBwbGF5ZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XHJcbiAgcGxheWVyTmFtZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcclxuICBjb25zdCBwbGF5ZXJTY29yZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBwbGF5ZXJTY29yZS50eXBlID0gJ3RleHQnO1xyXG4gIHBsYXllclNjb3JlLmlkID0gJ3Njb3JlJztcclxuICBwbGF5ZXJTY29yZS5wbGFjZWhvbGRlciA9ICdZb3VyIHNjb3JlJztcclxuICBwbGF5ZXJTY29yZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZSk7XHJcbiAgY29uc3Qgc3VibWl0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdWJtaXRCdG4udHlwZSA9ICdidXR0b24nO1xyXG4gIHN1Ym1pdEJ0bi5pZCA9ICdhZGRzY29yZWJ0bic7XHJcbiAgc3VibWl0QnRuLnZhbHVlID0gJ1N1Ym1pdCc7XHJcbiAgY29uc3Qgc3VibWl0RGl2RXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3VibWl0RGl2RXJyLmNsYXNzTmFtZT1cInN1Ym1pdERpdkVyclwiO1xyXG4gIHN1Ym1pdEJ0bkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gIGZvcm1BZGQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZURpdik7XHJcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZURpdik7XHJcbiAgZm9ybUFkZC5hcHBlbmRDaGlsZChzdWJtaXREaXZFcnIpO1xyXG4gIGZvcm1BZGREaXYuYXBwZW5kQ2hpbGQoZm9ybUFkZCk7XHJcbiAgZm9ybUFkZERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG5EaXYpO1xyXG4gIGFkZFNjb3JlLmFwcGVuZENoaWxkKGFkZFNjb3JlSGVhZGVyKTtcclxuICBhZGRTY29yZS5hcHBlbmRDaGlsZChmb3JtQWRkRGl2KTtcclxuICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXMpO1xyXG4gIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKGFkZFNjb3JlKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==