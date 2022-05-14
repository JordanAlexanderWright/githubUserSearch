class RequestHandler {

    constructor(apiDoc) {
        this.apiDoc = apiDoc
    }
    async getKey(){

        let promise = await fetch(this.apiDoc);

        await promise.text().then(text => {return text})
            .catch(error => console.log(error));  
    }

    testing(){
        console.log('you are an idiot');
    }

    async getUser(user) {
        
        let promise = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                authorization: this.getKey()
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
            profilePic.id = 'avatar'

            document.querySelector('#profilePicture').appendChild(profilePic);

    

            // Display login, github link, and repos

            desiredInfo.forEach(function(datapoint){
                if(datapoint.includes('http')){
                    let listItem = document.createElement('li');
                    let link = document.createElement('a');

                    // Creating the link. target will make the link open in a new tab. 
                    link.innerHTML = datapoint;
                    link.href = datapoint;
                    link.target = '_blank'

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