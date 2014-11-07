"use strict"

$(document).ready(function(){
	var nbClick = 0;
	var nbImg = 3;
	var tabImg = [];
	var indexTab;
	
	var indexImg;
	var nameImg;
	var linkImg;

	//Remplir le tableau avec le nom des images, mélangé
	for(var i = 1; i <= nbImg; i++) {
		indexImg = i;
		nameImg = "img/memory0"+indexImg+".png";

		for(var j = 0; j < 2; j++) {
			indexTab =  Math.floor(Math.random() * (nbImg * 2));
			if(tabImg[indexTab] == null)
				tabImg[indexTab] = (nameImg);
			else
				j--;
		}
	}

	//$(".contain").append('<img id="img" src='+tabImg[0]+'/>');
	//$(".contain").append('<img id="img" src="img/memory01.png"/>');


	for(var i = 0; i < tabImg.length; i++) {
		$(".contain").append('<img id="img" src='+tabImg[i]+'/>');
		//linkImg = 'src/img/'+tabImg[i];
		//$(".contain").append('<img id="img" src=""+tabImg[i]+""/>');
		//$(".contain").attr("src", linkImg);
	}


	//game.write(nbClick);
	//var monScore = document.getElementById("score");
	$("#score").html("Nombre de clics : "+nbClick);
});
