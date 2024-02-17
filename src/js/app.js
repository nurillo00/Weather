const elBox = document.getElementById('box');
const elTitle = document.getElementById('title');
const elData = document.getElementById('data');
const elSome = document.getElementById('some');
const elTemp = document.getElementById('temp');
const elWet = document.getElementById('wet');
const elCloud = document.getElementById('img');
const elSun = document.getElementsByClassName('sun');
let sana = new Date()

fetch('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
    .then((res) => res.json())
    .then((data) => getData(data))



if (sana.getDay() == 1) {
    elTitle.textContent = 'Dushanba'
} else if (sana.getDay() == 2) {
    elTitle.textContent = 'Seshanba'
} else if (sana.getDay() == 3) {
    elTitle.textContent = 'Chorshanba'
} else if (sana.getDay() == 4) {
    elTitle.textContent = 'Payshanba'
} else if (sana.getDay() == 5) {
    elTitle.textContent = 'Juma'
} else if (sana.getDay() == 6) {
    elTitle.textContent = 'Shanba'
} else if (sana.getDay() == 7) {
    elTitle.textContent = 'Yakshanba'
} else if (sana.getMonth) {
    
} 

elCloud.style.display = 'none'



function getData(item) {    
elData.textContent = sana.getDate() + ' ' + sana.getMonth() +  ' ' + sana.getFullYear()
elSome.textContent = item.name
elTemp.textContent = item.main.temp + ' °C'
elWet.textContent = item.weather[0].main

}