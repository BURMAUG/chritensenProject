//getting the second divs parent which is supposed to be div 
//but i am getting an undefined in the console
const childNodeP  = document.querySelectorAll('div')[1].parentNode;
console.log(childNodeP); 
//create the seconf main container div
const imageContainerDiv = document.createElement('div');
imageContainerDiv.className = 'container';
childNodeP.appendChild(imageContainerDiv);
//create the image Div and append it into the container div
const imgDiv = document.createElement('div');
imgDiv.className = 'prof-image';
imageContainerDiv.appendChild(imgDiv);
//create the Image and append it into the imgDiv
const img = document.createElement('img');
img.className = 'professor-image';
img.id = 'prof-image';
img.src = '../dist/pictures/1272604247.jpg';
img.alt='professor image';
imgDiv.appendChild(img);
let html = '';

//make a paragraph element
let p = document.createElement('p');
p.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum `;
//another paragraph element
let anotherP = document.createElement('p')
anotherP.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
//another paragraph element
let anotherPP = document.createElement('p')
anotherPP.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
imageContainerDiv.appendChild(p);
imageContainerDiv.appendChild(anotherP);
imageContainerDiv.appendChild(anotherPP);


// //enter the day of the month required and the time start and  end 
// function office_hours(day, startTime, endTime){
//     return `${day} ${startTime} - ${endTime}`;
// };
// var day = office_hours('Monday', 12, 23);
// console.log(day);
// //this function makes the semester, year and classes 
// //the semester, year and at least one class is required to use the function
// function sections_maker(semester, year, class_one, class_two, class_three, class_four, class_five) {

//     class_three = class_three || '';//optional
//     class_four = class_four || '';//optional
//     class_five = class_five || '';//optional
//     //getting the main div
//     const main = document.querySelector('.main'); 
//     //creating a div to insert other documents in.
//     const div = document.createElement('div');
//     div.className = 'classes';
//     //Create a h2 element for both semester and year
//     var header = document.createElement('h2');
//     header.innerHTML = semester + " "+ year;
//     //creating a ul for the classes tp be added
//     var ul = document.createElement('ul');    
//     ul.innerHTML = `
//                     <li><a href="#">${class_one}</a></li>
//                     <li><a href="#">${class_two}</a></li>
//                     <li><a href="#">${class_three}</a></li>`;
//     //Appending all that is needed
//     main.appendChild(div);
//     div.appendChild(header);
//     div.appendChild(ul);

//     return div;
// };





// console.log(sections_maker('spring', 2002, 'calculus-120', 'calculus II ', 'Calculus III'))