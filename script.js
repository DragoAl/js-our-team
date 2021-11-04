// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, 
// il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// VARIABILI GLOBALI
var cardCont = document.querySelector(".team-container");
var cardBox = document.querySelector(".card-image");
var cardText = document.querySelector(".card-text")
let img;
let h3;

// creo l'array con i 6 oggetti del team inseriti
const arrTeam = [
    {
        "nome" : addName('Wayne Barnett'),
        "ruolo": 'Founder & CEO',
        "immagine": addImg("img/angela-caroll-chief-editor.jpg")
        
    },

    {
        "nome" : 'Angela Carol',
        "ruolo": 'Chief Editor',
        // "immagine": add_img("img/angela-caroll-chief-editor.jpg")
    },

    {
        "nome" : 'Walter Gordon',
        "ruolo": 'Office Manager',
        // "immagine": add_img("img/angela-caroll-chief-editor.jpg")
    },

    {
        "nome" : 'Angela Lopez',
        "ruolo": 'Social Media Manager',
        // "immagine": add_img("img/angela-caroll-chief-editor.jpg")
    },

    {
        "nome" : 'Scoot Estrada',
        "ruolo": 'Developer',
        // "immagine": add_img("img/angela-caroll-chief-editor.jpg")
    },

    {
        "nome" : 'Barbara Ramos',
        "ruolo": 'Graphic Designer',
        // "immagine": add_img("img/angela-caroll-chief-editor.jpg")
    }

];
// stampo il contenuto dell'array log
console.log(arrTeam);

for (let i = 0; i < arrTeam; i++) {
    let objTeam = arrTeam[i];
    
    for (let key in objTeam) {
        console.log((key, objTeam[key]));
    }
}
 




 



// FUNZIONI
function addName(nome, cognome) {
    var name = document.createElement('h3');
    name.append(nome, cognome);
    cardText.appendChild(h3);
    return h3

}

function addImg(link) { 
	var img = document.createElement('img'); 
    img.src = link; 
	cardBox.appendChild(img);
    return img
}