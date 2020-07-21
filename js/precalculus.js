//get the year and semester
const year = document.querySelector('#yearly');
const semester = document.querySelector('.semester-filter');

let option = document.createElement('option');
option.value = 'select-year';
option.textContent = 'Please select a year';
option.hidden = true;
year.appendChild(option);

if(year.value === '2020'){
    year.value = option.value
};

option = document.createElement('option');
option.value = 'semester-select';
option.hidden = true;
option.textContent = 'Select a semester';
semester.appendChild(option);

if(semester.value.toLowerCase() === 'spring'){
    semester.value = option.value;
}