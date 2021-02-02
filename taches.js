function calculJour(j){
    const jour = ['lun' , 'mar' , 'mer' , 'jeu' , 'ven' , 'sam' , 'dim'];
    return jour[j-1];
}

function calculMois(m){
    const mois = ['jan' , 'fev' , 'mar' , 'avr' , 'mai' , 'jun' , 'jul' , 
        'aou' , 'sep' , 'oct' , 'nov' , 'dec'];
    return mois[m];
}
function calculDate(d){
    if(d<10){
        let e = '0' + d.toString();
        return e;
    }else{
        return d;
    }
    
}

function init(){
    //----------------------------------------------------
    //  DEFINIR LES ACTIONS COCHER LA CASE
    //----------------------------------------------------
    const cocher = document.querySelectorAll('.tacheCoche');
    cocher.forEach((item) => {
        item.addEventListener('click', (e) => {
            let c = e.currentTarget;
            c.parentNode.style.backgroundColor = "green";
            c.firstChild.innerHTML = "&#9745;";
        })
    });

    //----------------------------------------------------
    //  DEFINIR LES ACTIONS SUPPRIMER UNE DIV
    //----------------------------------------------------
    const supprimer = document.querySelectorAll('.tacheSupprimer');
    supprimer.forEach((item) => {
        item.addEventListener('click', (e) => {
            let c = e.currentTarget;
            c.parentNode.remove();
        })
    });
}



//----------------------------------------------------
//  DEFINIR LES ACTIONS ASSOCIEES AU BUTTON
//----------------------------------------------------
const ajouter = document.querySelectorAll('#ajouter');
ajouter.forEach((item) => {
    item.addEventListener('click', (e) => {
        // récupère le contenu de l'input
        const i = document.getElementById('ajoutTache');
        const dl = document.getElementById('ajoutDate').value;
        // récupère le id de la dernière div
        // convertit en nombre puis ajoute 1
        const listDiv = document.querySelectorAll('.tache');
        let num = 1 + Number(listDiv[listDiv.length-1].id);
        // crée une div avec la tache associée
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','tache');
        newDiv.setAttribute('id',num);

        // date de saisie
        let newDivDate = document.createElement('div');
        newDivDate.setAttribute('class','tacheDate');
        let newPDate = document.createElement('p');
        let now = new Date();
        newPDate.innerHTML = "&#9998;" + " " + " " + calculDate(now.getDate()) + " " + calculMois(now.getMonth()) + " " + now.getFullYear();
        newDivDate.appendChild(newPDate);

        // Dead Line
        const tab = dl.split('-');
        const deadLine = new Date(tab[0] , tab[1] , tab[2]);
        let newDivDeadLine = document.createElement('div');
        newDivDeadLine.setAttribute('class','tacheDeadLine');
        let newPDeadLine = document.createElement('p');
        newPDeadLine.innerHTML = "&#128276;" + " " + " " + calculDate(deadLine.getDate()) + " " + calculMois(deadLine.getMonth()-1) + " " + deadLine.getFullYear();
        newDivDeadLine.appendChild(newPDeadLine);

        //titre
        let newDivTitre = document.createElement('div');
        newDivTitre.setAttribute('class','tacheTitre');
        let newTitre = document.createElement('h2');
        newTitre.textContent = i.value;
        newDivTitre.appendChild(newTitre);
        
        //coche
        let newDivCoche = document.createElement('div');
        newDivCoche.setAttribute('class','tacheCoche');
        let newP1 = document.createElement('p');
        newP1.innerHTML = "&#9744;";
        newDivCoche.appendChild(newP1);
        
        //suppr
        let newDivSuppr = document.createElement('div');
        newDivSuppr.setAttribute('class','tacheSupprimer');
        let newP2 = document.createElement('p');
        newP2.innerHTML = "&#10060;";
        newDivSuppr.appendChild(newP2);

        //ajout des div
        newDiv.appendChild(newDivDate);
        newDiv.appendChild(newDivDeadLine);
        newDiv.appendChild(newDivTitre);
        newDiv.appendChild(newDivCoche);
        newDiv.appendChild(newDivSuppr);
        
        //sélectionne la div page et place la nouvelle div
        const divTriche = document.getElementById('triche');
        const divListe = divTriche.parentNode;
        divListe.insertBefore(newDiv,divTriche);

        i.value = "";

        init();

        
    })
});

init();