// wait for the DOM to load before executing any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM content has been loaded.")
    // define an array of card objects with names and images
    const cardArray = [
        {
            name: 'cat1',
            img: 'images/cat1.png'
        },
        {
            name: 'cat1',
            img: 'images/cat1.png'
        },
        {
            name: 'cat2',
            img: 'images/cat2.png'
        },
        {
            name: 'cat2',
            img: 'images/cat2.png'
        },
        {
            name: 'cat3',
            img: 'images/cat3.png'
        },
        {
            name: 'cat3',
            img: 'images/cat3.png'
        },
        {
            name: 'cat4',
            img: 'images/cat4.png'
        },
        {
            name: 'cat4',
            img: 'images/cat4.png'
        },
        {
            name: 'dog1',
            img: 'images/dog1.png'
        },
        {
            name: 'dog1',
            img: 'images/dog1.png'
        },
        {
            name: 'dog2',
            img: 'images/dog2.png'
        },
        {
            name: 'dog2',
            img: 'images/dog2.png'
        },
        {
            name: 'dog3',
            img: 'images/dog3.png'
        },
        {
            name: 'dog3',
            img: 'images/dog3.png'
        },
        {
            name: 'dog4',
            img: 'images/dog4.png'
        },
        {
            name: 'dog4',
            img: 'images/dog4.png'
        }
    ]
    // console.log("Card array has been defined.", cardArray)

    // shuffle the cardArray randomly
    cardArray.sort(() => 0.5 - Math.random())
    // console.log("Card array has been shuffled.", cardArray)

     // get the DOM elements for the grid and result display
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    // console.log("DOM elements have been retrieved.", grid, resultDisplay)
    // initialize variables to keep track of chosen and won cards
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
     // console.log("Variables have been initialized.", cardsChosen, cardsChosenId, cardsWon)

   // create the game board with images using DOM manipulation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/color.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check if two flipped cards match
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            // if same card is clicked twice, reset the card images
            cards[optionOneId].setAttribute('src', 'images/color.png')
            cards[optionTwoId].setAttribute('src', 'images/color.png')
            
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            // if two cards match, update the UI and remove their event listeners
            cards[optionOneId].setAttribute('src', 'images/green.png')
            cards[optionTwoId].setAttribute('src', 'images/green.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            // add the matched cards to the cardsWon array
            cardsWon.push(cardsChosen)
        } else {
            // if two cards don't match, reset their images
            cards[optionOneId].setAttribute('src', 'images/color.png')
            cards[optionTwoId].setAttribute('src', 'images/color.png')
            
        }
        // reset the chosen cards
        cardsChosen = []
        cardsChosenId = []
    
// Check if all cards have been won
if (cardsWon.length === cardArray.length / 2) {
    // Hide the game board and show the winning message
    setTimeout(function() {
      const container = document.querySelector('.container');
      container.style.display = 'none';
      const winningContainer = document.querySelector('.winning-container');
      winningContainer.style.display = 'block';
    }, 100);
  }

    }

    // Function to handle the card flip
    function flipCard() {
        // Get the ID of the clicked card
        let cardId = this.getAttribute('data-id')
         // Add the name of the chosen card to the chosen cards array
        cardsChosen.push(cardArray[cardId].name)
        // Add the ID of the chosen card to the chosen cards ID array
        cardsChosenId.push(cardId)
        // Set the image source of the clicked card to the corresponding card image
        this.setAttribute('src', cardArray[cardId].img)
        // If two cards have been chosen, wait 500ms and check if they match
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    // Call the function to create the board and start the game
    createBoard()
})



function startGame() {
    // Hide the card container and show the memory game container
    document.querySelector('.card-container').style.display = 'none';
    document.querySelector('.memory-game-container').style.display = 'block';
}