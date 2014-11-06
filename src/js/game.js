"use strict"

$(document).ready(function(){
	var nbClick = 0;
	var nbImg = 3;
	var tabImg = [];
	var indexTab;
	
	var indexImg;
	var nameImg;

	//Remplir le tableau avec le nom des images, mélangé
	for(var i = 1; i <= nbImg; i++) {
		indexImg = i;
		nameImg = "memory0"+indexImg;
		for(var j = 0; j < 2; j++) {
			indexTab =  Math.floor(Math.random() * nbImg);
			if(tabImg[indexTab] == null)
				tabImg[indexTab].push(nameImg);
			else
				j--;
		}
	}

	//game.write(nbClick);
	//var monScore = document.getElementById("score");
	$("#score").html("Nombre de clics : "+nbClick);
});
