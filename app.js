//getting the image of the professor for the home page
const professorImage = document.getElementById('prof-image');
professorImage.style.height = '700px';
professorImage.style.width = '650px';
professorImage.style.borderRadius = '150px';


// style="justify-content: center; padding-left: 200px;"
//I think i have to get the div and then try to center 
//the images
const class_template_image = document.getElementsByClassName('class_template_image');
class_template_image.style.paddingLeft ='200px'; //something is wrong here => uncaught type error 'paddingLeft not defined'

