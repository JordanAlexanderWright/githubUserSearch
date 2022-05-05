class RequestHandler {

    constructor(keyDocument){
        this.getKey(keyDocument);
    }

    async getKey(document){

        console.log('hello')
        let promise = await fetch(document);

        let promiseText = await promise.text().then(text => {
            this.setAPIKey(text)})
            .catch(error => console.log(error));  
    }

    setAPIKey(key){
        this.apiKey = key
        console.log(this.apiKey)
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
        
        let response = await promise.json();

        return response;
    }

    showResults(data) { 
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