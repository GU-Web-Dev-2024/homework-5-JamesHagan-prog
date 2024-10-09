const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

let artCount = 0;
let counter = document.getElementById("counter");
let artButton = document.getElementById("add-art-button");
let resetButton = document.getElementById("reset-button");
let artwork = document.getElementsByClassName("art-panel");

function setArtEvent(newArtPanel) {
    newArtPanel.addEventListener("click", ()=>{
        newArtPanel.style.background = "#75aaff";
        artCount++;
        counter.innerText = "Artworks Viewed: " + artCount;
    });
}

for (let i = 0; i < artwork.length; i++){
    let art = artwork[i];
    art.addEventListener("click", ()=>{
        art.style.background = "#75aaff";
        artCount++;
        counter.innerText = "Artworks Viewed: " + artCount;
    });
}

artButton.addEventListener("click", ()=>{
    let newArtPanel = document.createElement("div");
    let newArt = document.createElement("img");
    let newDesc = document.createElement("p");
    let i = Math.floor(Math.random() * 9);
    
    newArt.src = newArtworks[i].img;
    newArt.alt = newArtworks[i].title;
    newDesc.innerText = newArtworks[i].title + " by " + newArtworks[i].artist;
    newArtPanel.setAttribute("class","art-panel");

    newArtPanel.appendChild(newArt);
    newArtPanel.appendChild(newDesc);
    document.getElementsByClassName("art-grid")[0].appendChild(newArtPanel);
    setArtEvent(newArtPanel);
});

resetButton.addEventListener("click", ()=>{
    let artwork = document.getElementsByClassName("art-panel");
    artCount = 0;
    counter.innerText = "Artworks Viewed: " + artCount;
    for (let i = 0; i < artwork.length; i++){
        let art = artwork[i];
        art.style.background = "";
    }   
});