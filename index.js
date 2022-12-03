import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let firstDate = document.querySelector('.first-date')
let secondDate = document.querySelector('.second-date')
let btnCalculate = document.querySelector('.btn-calculate')
let btnToday = document.querySelector('.btn-today')
let days = document.querySelector('.days')
let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

btnCalculate.addEventListener('click', () => {
        days.classList.remove('d-none')
        days.innerHTML = `Days: ${Math.floor((((((new Date(secondDate.value).getTime() - new Date(firstDate.value).getTime()) / 1000)/60)/60)/24))}`
})

btnToday.addEventListener('click', () => {
    secondDate.value = `${new Date().getDate()} ${monthsArray[new Date().getMonth()]} ${new Date().getFullYear()}`
})
