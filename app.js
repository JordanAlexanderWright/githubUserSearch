const myButton = document.querySelector('.testing'),
    resultsDisplay = document.querySelector('.searchResults'),
    userInput = document.querySelector('#userInput');

requests = new RequestHandler

myButton.addEventListener('click', requests.testing);

// requests.testing();

requests.getLuke()
    .then(data => console.log(data))
    .catch(error => console.log(error));

let user = 'soule222';

requests.getUser(user)
    .then(response => requests.showResults(response))
    .catch(error => console.log(error));
