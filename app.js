
var header = document.getElementById('header');
header.style.textAlign = 'center';
header.style.fontFamily = 'Arial';
header.style.padding = '15px';

let images = document.querySelectorAll(".row img");

for (var i=0, len = images.length; i<len; i++){
    images[i].style.display = 'block';
    images[i].style.display = 'inline-block';
    images[i].style.borderRadius = '20px';
    images[i].style.padding= '8px';
    images[i].style.marginLeft = 'auto';
    images[i].style.marginRight = 'auto';
    images[i].style.width = '250px';
}

