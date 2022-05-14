const myButton = document.querySelector('.testing'),
    resultsDisplay = document.querySelector('.searchResults'),
    userInput = document.querySelector('#userInput');

const requests = new RequestHandler('githubtoken.txt');


userInput.addEventListener('keyup', userHandling);

function userHandling(){

    try {

        let loopCount = resultsDisplay.childElementCount;

        for(let x = 0; x < loopCount; x++){
            resultsDisplay.children[0].remove();
        }

        // avatar should only ever have one, but 
        // a bug happens when keystrokes are pressed too quickly. SO removing all. 
        
        loopCount = profilePicture.childElementCount;

        for(let x = 0; x < loopCount; x++){
            document.querySelector('#avatar').remove();
        }

    } catch {
        console.log(`Probably didn't exist yet`);
    }

    input = userInput.value;
    requests.getUser(input)
    console.log(input);
}