function duplicateArrayElements(arr) {
    var duplicated = [];
    for (var i = 0; i < arr.length; i++) {
        duplicated.push(arr[i]);
        duplicated.push(arr[i]);
    }
    return duplicated;
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

const imgs = [
  "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
  "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=612x612&w=0&k=20&c=-niqIUX8Kfiyn50xgUzxxUYX6H2q9BlGc3PX5PVM-iA=",
"https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
"https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846",
"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
];

const duplicatedImages = duplicateArrayElements(imgs)
const shuffledImages = shuffleArray(duplicatedImages)

const container = document.getElementById('container')

let selectedCardId;

const disableCards = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    img1.classList.add('disabled')
    img2.classList.add('disabled')
}

const checkIfSameImg = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    return img1.src === img2.src;
}

const resetFlipedCards = (id1, id2) => {
    const img1 = document.getElementById(id1);
    const img2 = document.getElementById(id2);
    setTimeout(() => {
        img1.style.display = 'none';
        img2.style.display = 'none';
    }, 1000)
    
}

shuffledImages.forEach((img, i) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-image');
    imgElement.src = img;
    imgElement.id = i;
    imgElement.style.display = 'none';

    cardContainer.onclick = () => {
        if (imgElement.style.display === 'none') {
            imgElement.style.display = 'block';
            if (!selectedCardId) {
                selectedCardId = imgElement.id;
            } else {
                if (checkIfSameImg(selectedCardId, imgElement.id)) {
                    disableCards(selectedCardId, imgElement.id);
                } else {
                    resetFlipedCards(selectedCardId, imgElement.id);
                }
                selectedCardId = null;
            }
        }
    }
    cardContainer.appendChild(imgElement);
    container.appendChild(cardContainer);
})