export default class LeaderBoard{
    constructor(){

    }

     createGame=(name)=>{
         const gameName={name:name}
         const Http=new XMLHttpRequest();
         const url="https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
         Http.setRequestHeader('Content-Type', 'application/json');
         Http.open("POST", url);
         Http.send(JSON.stringify({
            value: {gameName}
        }));

         Http.onreadystatechange=function(){
             if(this.readyState===4 && this.status==400)
             console.log(Http.responseText)  
         }

    }
}