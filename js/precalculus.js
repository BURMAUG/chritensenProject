//get the year and semester
const year = document.querySelector('#yearly');
const semester = document.querySelector('.semester-filter');
//grab the filter for selecting sections 
const sections = document.querySelectorAll('.sections');
for (let i=0; i<sections.length; i++){
    console.log(sections[i]);
};


let option = document.createElement('option');
option.value = 'select-year';
option.textContent = 'Please select a year';
option.hidden = true;
year.appendChild(option);

if(year.value === '2020'){
    year.value = option.value
};

// this is for the semester
option = document.createElement('option');
option.value = 'semester-select';
option.hidden = true;
option.textContent = 'Select a semester';
semester.appendChild(option);
//check if the vcalue is spring
if(semester.value.toLowerCase() === 'spring'){
    semester.value = option.value; //and make the value whatever options value is.
}   