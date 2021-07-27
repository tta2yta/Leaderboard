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
function leaderBoardLayour(){
    const scoresArray=[{name:'AAA', score:98},{name:'BBB', score:68},
    {name:'CCC', score:78},{name:'DDD', score:89},{name:'EEE', score:100},]
    const container=document.createElement('div')
    container.className="container";
    const leaderBoardHeader=document.createElement('h1');
    leaderBoardHeader.textContent="LeaderBoard"
    container.appendChild(leaderBoardHeader);
    const leaderboard=document.createElement('div');
    const scores=document.createElement('div');
    scores.className="scores"
    const refresh=document.createElement('div');
    refresh.className="refresh"
    const recentScores=document.createElement('h2');
    recentScores.textContent="Recent scores"
    const refreshBtn=document.createElement('button');
    refreshBtn.textContent="Refresh";
    refresh.appendChild(recentScores);
    refresh.appendChild(refreshBtn);
    score.appendChild(refresh);
    const listScores=document.createElement('div');
    listScores.className="list-scores";
    const ulList=document.createElement('ul');
    scoresArray.forEach(element => {
        const items=document.createElement('li');
        items.textContent=`${scoresArray.name +':' + scoresArray.score}`;
        listScores.appendChild(items);
    });
    listScores.appendChild(ulList);
    scores.appendChild(listScores)
    leaderboard.appendChild(scores);
    const addScore=document.createElement('div');
    addScore.className="add-score";
    const addScoreHeader=document.createElement('h2');
    addScoreHeader.textContent="Add Your Scores";
    const formAddDiv=document.createElement('div');
    formAddDiv.className="form-add";
    const formAdd=document.createElement('form');
    const playerName=document.createElement('input');
    playerName.type="text"
    playerName.id="name";
    const playerScore=document.createElement('input');
    playerName.type="text"
    playerName.id="score";
    const submitBtn=document.createElement('input');
    submitBtn.type="button"
    submitBtn.id="submit";
    submitBtn.value="Submit";
    formAdd.appendChild(playerName);
    formAdd.appendChild(playerScore);
    formAdd.appendChild(submitBtn);
    formAddDiv.appendChild(formAdd)
    addScore.appendChild(addScoreHeader);
    addScore.appendChild(formAddDiv);
    leaderboard.appendChild(scores);
    leaderboard.appendChild(addScore);
    container.appendChild(leaderboard);
    return container;
}





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Ysd0JBQXdCLHFCQUFxQixFQUFFLHFCQUFxQjtBQUNwRSxLQUFLLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBMEM7QUFDdkU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGVhZGVyQm9hcmRMYXlvdXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFkZXJCb2FyZExheW91cigpe1xyXG4gICAgY29uc3Qgc2NvcmVzQXJyYXk9W3tuYW1lOidBQUEnLCBzY29yZTo5OH0se25hbWU6J0JCQicsIHNjb3JlOjY4fSxcclxuICAgIHtuYW1lOidDQ0MnLCBzY29yZTo3OH0se25hbWU6J0RERCcsIHNjb3JlOjg5fSx7bmFtZTonRUVFJywgc2NvcmU6MTAwfSxdXHJcbiAgICBjb25zdCBjb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWU9XCJjb250YWluZXJcIjtcclxuICAgIGNvbnN0IGxlYWRlckJvYXJkSGVhZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBsZWFkZXJCb2FyZEhlYWRlci50ZXh0Q29udGVudD1cIkxlYWRlckJvYXJkXCJcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJCb2FyZEhlYWRlcik7XHJcbiAgICBjb25zdCBsZWFkZXJib2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHNjb3Jlcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNjb3Jlcy5jbGFzc05hbWU9XCJzY29yZXNcIlxyXG4gICAgY29uc3QgcmVmcmVzaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlZnJlc2guY2xhc3NOYW1lPVwicmVmcmVzaFwiXHJcbiAgICBjb25zdCByZWNlbnRTY29yZXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHJlY2VudFNjb3Jlcy50ZXh0Q29udGVudD1cIlJlY2VudCBzY29yZXNcIlxyXG4gICAgY29uc3QgcmVmcmVzaEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlZnJlc2hCdG4udGV4dENvbnRlbnQ9XCJSZWZyZXNoXCI7XHJcbiAgICByZWZyZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XHJcbiAgICByZWZyZXNoLmFwcGVuZENoaWxkKHJlZnJlc2hCdG4pO1xyXG4gICAgc2NvcmUuYXBwZW5kQ2hpbGQocmVmcmVzaCk7XHJcbiAgICBjb25zdCBsaXN0U2NvcmVzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlzdFNjb3Jlcy5jbGFzc05hbWU9XCJsaXN0LXNjb3Jlc1wiO1xyXG4gICAgY29uc3QgdWxMaXN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBzY29yZXNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaXRlbXMudGV4dENvbnRlbnQ9YCR7c2NvcmVzQXJyYXkubmFtZSArJzonICsgc2NvcmVzQXJyYXkuc2NvcmV9YDtcclxuICAgICAgICBsaXN0U2NvcmVzLmFwcGVuZENoaWxkKGl0ZW1zKTtcclxuICAgIH0pO1xyXG4gICAgbGlzdFNjb3Jlcy5hcHBlbmRDaGlsZCh1bExpc3QpO1xyXG4gICAgc2NvcmVzLmFwcGVuZENoaWxkKGxpc3RTY29yZXMpXHJcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXMpO1xyXG4gICAgY29uc3QgYWRkU2NvcmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRTY29yZS5jbGFzc05hbWU9XCJhZGQtc2NvcmVcIjtcclxuICAgIGNvbnN0IGFkZFNjb3JlSGVhZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhZGRTY29yZUhlYWRlci50ZXh0Q29udGVudD1cIkFkZCBZb3VyIFNjb3Jlc1wiO1xyXG4gICAgY29uc3QgZm9ybUFkZERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1BZGREaXYuY2xhc3NOYW1lPVwiZm9ybS1hZGRcIjtcclxuICAgIGNvbnN0IGZvcm1BZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgcGxheWVyTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcGxheWVyTmFtZS50eXBlPVwidGV4dFwiXHJcbiAgICBwbGF5ZXJOYW1lLmlkPVwibmFtZVwiO1xyXG4gICAgY29uc3QgcGxheWVyU2NvcmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHBsYXllck5hbWUudHlwZT1cInRleHRcIlxyXG4gICAgcGxheWVyTmFtZS5pZD1cInNjb3JlXCI7XHJcbiAgICBjb25zdCBzdWJtaXRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdEJ0bi50eXBlPVwiYnV0dG9uXCJcclxuICAgIHN1Ym1pdEJ0bi5pZD1cInN1Ym1pdFwiO1xyXG4gICAgc3VibWl0QnRuLnZhbHVlPVwiU3VibWl0XCI7XHJcbiAgICBmb3JtQWRkLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xyXG4gICAgZm9ybUFkZC5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZSk7XHJcbiAgICBmb3JtQWRkLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgICBmb3JtQWRkRGl2LmFwcGVuZENoaWxkKGZvcm1BZGQpXHJcbiAgICBhZGRTY29yZS5hcHBlbmRDaGlsZChhZGRTY29yZUhlYWRlcik7XHJcbiAgICBhZGRTY29yZS5hcHBlbmRDaGlsZChmb3JtQWRkRGl2KTtcclxuICAgIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKHNjb3Jlcyk7XHJcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChhZGRTY29yZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==