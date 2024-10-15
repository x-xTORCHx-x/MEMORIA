const cards = 
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 
'cat.jpeg',
        newAlt: 'Angular Image'
    },
    {
        id: 2,
        image: 
'lion.jpeg',
        newAlt: 'HTML Image'
    },
    {
        id: 3,
        image: 
'panda.jpeg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 4,
        image: 
'dog.jpeg',
        newAlt: 'React Image'
    },
    {
        id: 5,
        image: 
'tiger.jpeg',
        newAlt: 'Vue Image'
    },
    {
        id: 6,
        image: 
'panda.jpeg',
        newAlt: 'JavaScript Image'
    },
    {
        id: 7,
        image: 
'tiger.jpeg',
        newAlt: 'Vue Image'
    },
    {
        id: 8,
        image: 
'lion.jpeg',
        newAlt: 'HTML Image'
    },
    {
        id: 9,
        image: 
'zebra.jpeg',
        newAlt: 'CSS Image'
    },
    {
        id: 10,
        image: 
'zebra.jpeg',
        newAlt: 'Angular Image'
    },
    {
        id: 11,
        image: 
'cat.jpeg',
        newAlt: 'CSS Image'
    },
    {
        id: 12,
        image: 
'dog.jpeg',
        newAlt: 'React Image'
    }
]

// function to restart the game
const restartGame = () => {
    let toggledCard = 
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount=0;
    movesDisplay.innerText = `Movimentos: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 
}
restart.addEventListener('click', restartGame);


for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc = 
        toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else{
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerText = `Movimentos: ${move}`;
        if(winCount===6){
            setTimeout(()=>{
                alert(`Você ganhou o jogo em ${move} movimentos.`)
            }, 300)
        }
    })
}

