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

   const dotsContainer = document.getElementById("dots-container"); // Obtient l'élément conteneur
// Boucle for pour parcourir tous les éléments enfants
for (let i = 0; i < dotsContainer.children.length; i++) {
    let element = dotsContainer.children[i]; // Obtient l'élément enfant courant
    let elementId = element.id; // Obtient l'ID de l'élément
  
    console.log("ID de l'élément", i, ":", elementId);
  }
  