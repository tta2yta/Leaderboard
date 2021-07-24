export default class LeaderBoard{
    constructor(){

    }

     createGame=(name)=>{
         const gameName={name:name}
         const url='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
            fetch(url, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(gameName)
            }).then(res => {
            console.log("Request complete! response:", res.text());
            });

    }
}