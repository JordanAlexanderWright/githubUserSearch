const myButton = document.querySelector('.testing'),
    resultsDisplay = document.querySelector('.searchResults'),
    userInput = document.querySelector('#userInput');

const requests = new RequestHandler('githubtoken.txt');

// myButton.addEventListener('click', showChildren);
userInput.addEventListener('keyup', userHandling);

function userHandling(){

    try {

        let loopCount = resultsDisplay.childElementCount;

        for(let x = 0; x < loopCount; x++){
            resultsDisplay.children[0].remove();
        }

        document.querySelector('#avatar').remove();

    } catch {
        console.log(`Probably didn't exist yet`);
    }

    input = userInput.value;
    requests.getUser(input)
    console.log(input);
}

// requests.testing();

// requests.getLuke()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// let user = 'soule222';

// user = 'bertw82'

// requests.getUser(user)