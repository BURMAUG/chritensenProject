//getting the div and setting the templete right and left
const class_template_image = document.getElementById('class_template_image');
class_template_image.style.paddingLeft = '150px';
class_template_image.style.paddingRight = '150px';

//get the images and reduce the borders
const class_images = document.getElementsByTagName('img');
//looping through al the images templates to adjust as desired
for(let i = 0; i < class_images.length; i++){
    class_images[i].style.borderRadius = '15px';
    class_images[i].style.height = '400px';
}


