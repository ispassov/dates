import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

/* let date = new Date('1 January 2022')
date.setDate(date.getDate() + 329) */

/* let month = date.toLocaleString().split('/')[0]
let year = date.getFullYear()
let day = date.toLocaleString().split('/')[1]
let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] */

let firstDate = document.querySelector('.first-date')
let secondDate = document.querySelector('.second-date')
let btnCalculate = document.querySelector('.btn-calculate')
let days = document.querySelector('.days')

/* console.log(
    day,
    monthsArray[month-1],
    year
) */

btnCalculate.addEventListener('click', () => {
        /* Math.floor((((((secondDate.getTime() - firstDate.getTime()) / 1000)/60)/60)/24)),
        Math.floor((((((secondDate.getTime() - firstDate.getTime()) / 1000)/60)/60))),
        Math.floor((((((secondDate.getTime() - firstDate.getTime()) / 1000)/60)))) */
        days.classList.remove('d-none')
        days.innerHTML = `Days: ${Math.floor((((((new Date(secondDate.value).getTime() - new Date(firstDate.value).getTime()) / 1000)/60)/60)/24))}`
})


