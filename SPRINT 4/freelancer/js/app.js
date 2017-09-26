var img = ["assets/images/portfolio/cabin.png","assets/images/portfolio/cake.png",
           "assets/images/portfolio/circus.png","assets/images/portfolio/game.png",
           "assets/images/portfolio/safe.png","assets/images/portfolio/submarine.png",];

for(var i in img)
{ 
   var secuencia = document.getElementById('imagenes');
   var divPicture = document.createElement('div'); 
       divPicture.setAttribute('class','col-4 seccionImg');
   var picture = document.createElement('img'); 
       picture.setAttribute('class','images');
       picture.setAttribute('src', img[i]);
   divPicture.appendChild(picture);
   secuencia.appendChild(divPicture);

}