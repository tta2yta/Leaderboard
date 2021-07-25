export default class LeaderBoard{
    constructor(){
        this.id=null
    }
    async setId(id){
        let  tokenId=id.result.substring(id.result.indexOf(':'));
        tokenId=tokenId.substring(tokenId.lastIndexOf(':') + 1, tokenId.lastIndexOf(' '))
        this.id=tokenId
    }
    getId(){
        return this.id
    }

    async createGame(name){
         const gameName={name:name}
         let tokenId="";
         const url='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
            let response= await fetch(url, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(gameName)
            }).then(res =>res.json().then(data=>this.setId(data)));
    }

    displayScores(){
        if (this.id !== null){

        }

    }
    
}