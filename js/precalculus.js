//getting all the options tag
const option = document.getElementsByTagName('select');

//get all sections selections 
const sections = document.getElementsByClassName('sections-selection')[0];
console.log(sections);

//make the selection options more visible
for (let i=0; i<option.length;i++){
    console.log(option[i]); 
    option[i].style.height = '30px';
    option[i].style.width = '100px';
    option[i].style.margin = '4px';
    option[i].style.borderRadius = "5px";
}
  

//enter the day of the month required and the time start and  end 
function office_hours(day, startTime, endTime){
    return `${day} ${startTime} - ${endTime}`;
};
var day = office_hours('Monday', 12, 23);
console.log(day);
//this function makes the semester, year and classes 
//the semester, year and at least one class is required to use the function
function sections_maker(semester, year, class_one, class_two, class_three, class_four, class_five) {

    class_three = class_three || '';//optional
    class_four = class_four || '';//optional
    class_five = class_five || '';//optional
    //getting the main div
    const main = document.querySelector('.main'); 
    //creating a div to insert other documents in.
    const div = document.createElement('div');
    div.className = 'classes';
    //Create a h2 element for both semester and year
    var header = document.createElement('h2');
    header.innerHTML = semester + " "+ year;
    //creating a ul for the classes tp be added
    var ul = document.createElement('ul');    
    ul.innerHTML = `
                    <li><a href="#">${class_one}</a></li>
                    <li><a href="#">${class_two}</a></li>
                    <li><a href="#">${class_three}</a></li>`;
    //Appending all that is needed
    main.appendChild(div);
    div.appendChild(header);
    div.appendChild(ul);

    return div;
};





console.log(sections_maker('spring', 2002, 'calculus-120', 'calculus II ', 'Calculus III'))