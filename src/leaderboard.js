class LeaderBoard{
    constructor(){

    }

     createGame=()=>{
         const Http=new XMLHttpRequest();
         const url="";
         Http.open("POST", url);
         Http.send();

         Http.onreadystatechange=function(){
             if(this.readyState===4 && this.status==400)
             console.log(Http.responseText)  
         }

    }
}