const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* exercice 1 
let arrow_left = document.querySelector(".arrow_left") // selection class fleche gauche
arrow_left.addEventListener("click", () => { // écoute du clck
	console.log("fleche gauche")          // resultat dans console
})

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
     console.log("fleche droite")          // resultat dans console
}) -----------------------------------------------------*/


/* 1- ajouter une variable pour stocker l'index du slide actuel :*/

   let index_actuel = 0
   
/* 2-  fonction qui mettra à jour le carrousel 
  en modifiant les éléments HTML correspondants :*/

function update_carousel(){ //selection des elements
	const banner_image = document.querySelector('.banner-img');
	const banner_tagLine = document.querySelector('#banner p');
	
   
  // Récupérer les éléments du slide actuel en utilisant l'index courant
    const slide_actuel = slides[index_actuel];
	const image_url = './assets/images/slideshow/' + slide_actuel.image;
    const tagLineText = slide_actuel.tagLine;
	const active_dot = document.getElementById(index_actuel);

  // Mettre à jour les éléments HTML avec les nouvelles valeurs
     banner_image.src = image_url;//".banner-img src""./assets/images/slideshow/""slide1.jpg"
	 banner_tagLine.innerHTML = tagLineText; //"#banner p" "Impressions tous formats..."
	 active_dot.classList.toggle('dot_selected');
	}   

/* 3- fonction pour passer au slide suivant :*/

function slide_suivant(){
    index_actuel ++;
	 // si l'index dépasse le nombre de slides, le réinitialiser à 0.
	 if (index_actuel >= slides.length){
		index_actuel = 0
	   }
	  update_carousel(); // Mettre à jour le carrousel avec le nouveau slide
}

function slide_precedent (){
	index_actuel --;
	if (index_actuel < 0 ){ //si valeur négative, enlever 1
    index_actuel = slides.length -1 ; // 
	}
	update_carousel();
}
  
 //****** click sur les flèches ******/ 

  let arrow_right = document.querySelector(".arrow_right");//selection flêcche
  arrow_right.addEventListener("click", slide_suivant); //affecte "slide-suivant" au "click"

  let arrow_left = document.querySelector(".arrow_left");
  arrow_left.addEventListener("click", slide_precedent);

//****** dots selected ************** */


  


