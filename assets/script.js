const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/* 1- ajouter une variable pour stocker l'index du slide actuel */

let index_actuel = 0

/* 2- creer une variable pour selectionner les éléments à mettre à jour */
const banner_image = document.querySelector('.banner-img'); // element "img" class banner-img
const banner_tagLine = document.querySelector('#banner p'); // element "p" dans la div id banner
const dots = document.querySelectorAll(".dot"); // "tous les elements" de la class ".dot"

/* 3- fonction pour mettre à jour le carrousel 
  en modifiant les éléments HTML correspondants :*/

function update_carousel() { 

    // Récupérer la valeur des éléments du slide actuel (en utilisant l'index_actuel)
	const slide_actuel = slides[index_actuel]; // attribue la valeur-actuelle (0), à l'élément "index" de "slides"(json)
	const image_url = './assets/images/slideshow/' + slide_actuel.image; // atttribue l'url de l'élément "image" (json index 0)
	const tagLineText = slide_actuel.tagLine; // attribue l'element "tagline" (json index 0)

	// Mettre à jour les éléments HTML avec les nouvelles valeurs
	banner_image.src = image_url; // ".banner-img src""./assets/images/slideshow/""slide1.jpg"
	banner_tagLine.innerHTML = tagLineText; //"#banner p" "Impressions tous formats..."
}

/* 3.1- fonction pour mettre à jour les bullets */
  
function update_dots() {

	dots.forEach((element, index) => { // pour chaque "element" et "index" 

		if (index != index_actuel) { // si l'index actuel est différent de l'index actif
			element.classList.remove("dot_selected");  // supprimer la classe "dot_selected"

		} else { //si non,
			element.classList.add("dot_selected"); //ajouter la classe "dot_selected" 
		}
	});
}

/* 4- fonction pour passer au slide suivant ou précédent :*/

function slide(sens) { // parametre à prendre en compte
	if (sens == 'gauche') { // si le paramettre est "gauche"
		index_actuel--; // décrémenter l'index-actuel
	} else { // sinon
		index_actuel++; // incrémenter l'index actuel
	}

	// condition pour boucler à l'infini
	if (index_actuel >= slides.length) { // si l'index actuel dépasse ou égale les 4 éléments du slide (index 3)
		index_actuel = 0; // on réinitialise l'index actuel à 0

	} else // si non

	if (index_actuel < 0) { // si valeur négative, 
		index_actuel = slides.length - 1; // enlever 1 au 4 éléments du slide (= index 3 qui est la dernière image du carroussel)
	}
	
	update_carousel(); // fonction mettre à jour carroussel
	update_dots(); // fonction mettre à jour les bullets
}

// 5- ****** click sur les flèches ******/ 

let arrow_left = document.querySelector(".arrow_left"); // selection flêche gauche (par sa class)
arrow_left.addEventListener("click", () => { // Ajoute un écouteur d'événements de clic à la flèche gauche
	slide('gauche') // Appelle la fonction slide en passant la valeur 'gauche' comme paramètre, pour faire défiler les slides vers la gauche
});


let arrow_right = document.querySelector(".arrow_right"); // selection flêche droite (par sa class)
arrow_right.addEventListener("click", () => { // Ajoute un écouteur d'événements de click à la flèche droite
	slide('droite') // Appelle la fonction slide en passant la valeur 'droite' comme paramètre, pour faire défiler les slides vers la droite
}); 








