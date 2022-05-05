class RequestHandler {

    // The class takes one parameter, A link to a text file with the users github api key
    constructor(keyDocument){
        this.getKey(keyDocument);
    }

    async getKey(document){

        let promise = await fetch(document);

        await promise.text().then(text => {
            this.setAPIKey(text)})
            .catch(error => console.log(error));  
    }

    setAPIKey(key){
        this.apiKey = key
    }

    async getLuke() {

        let promise = await fetch('https://swapi.dev/api/people/1/');
        let answer = await promise.json();

        return answer;
    }

    testing(){
        console.log('you are an idiot');
    }

    handleLuke(something) {
        console.log('working');
    }

    async getUser(user) {
        
        let promise = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                authorization: this.apiKey
            }
            })
    
        await promise.json()
        .then(response => {this.showResults(response)})
    }

    showResults(data) { 

        // Quick check to make sure the data is good. 

        if(data['message']){

            throw new Error('404 User not Found')

        } else {

        
            let desiredInfo = [data['login'], data['html_url'], data['repos_url']];

            // Display avatar

            let avatarUrl = data['avatar_url'];
            let profilePic = document.createElement('img');
            
            profilePic.src = `${avatarUrl}.png`;
            profilePic.alt = 'Profile Picture';

            document.querySelector('#profilePicture').appendChild(profilePic);

    

            // Display login, github link, and repos

            desiredInfo.forEach(function(datapoint){
                if(datapoint.includes('http')){
                    let listItem = document.createElement('li');
                    let link = document.createElement('a');

                    link.innerHTML = datapoint;
                    link.href = datapoint;

                    listItem.appendChild(link)
                    resultsDisplay.appendChild(listItem);
                } else {
                    let listItem = document.createElement('li');
                    listItem.innerHTML = datapoint;
                    resultsDisplay.appendChild(listItem);
                }
            })
        }
    }

}