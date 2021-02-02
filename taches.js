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
        // récupère le id de la dernière div
        // convertit en nombre puis ajoute 1
        const listDiv = document.querySelectorAll('.tache');
        let num = 1 + Number(listDiv[listDiv.length-1].id);
        // crée une div avec la tache associée
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','tache');
        newDiv.setAttribute('id',num);

        let newDivTitre = document.createElement('div');
        newDivTitre.setAttribute('class','tacheTitre');
        let newTitre = document.createElement('h2');
        newTitre.textContent = i.value;
        newDivTitre.appendChild(newTitre);
        
        let newDivCoche = document.createElement('div');
        newDivCoche.setAttribute('class','tacheCoche');
        let newP1 = document.createElement('p');
        newP1.innerHTML = "&#9744;";
        newDivCoche.appendChild(newP1);
        
        let newDivSuppr = document.createElement('div');
        newDivSuppr.setAttribute('class','tacheSupprimer');
        let newP2 = document.createElement('p');
        newP2.innerHTML = "&#10060;";
        newDivSuppr.appendChild(newP2);

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