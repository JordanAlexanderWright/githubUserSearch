const myButton = document.querySelector('.testing'),
    resultsDisplay = document.querySelector('.searchResults'),
    userInput = document.querySelector('#userInput');

const requests = new RequestHandler('githubtoken.txt');

myButton.addEventListener('click', requests.testing);

// requests.testing();

// requests.getLuke()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

let user = 'soule222';

user = 'bertw82'

requests.getUser(user)