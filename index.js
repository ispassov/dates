import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

let date = new Date('1 January 2022')
date.setDate(date.getDate() + 329)

let month = date.toLocaleString().split('/')[0]
let year = date.getFullYear()
let day = date.toLocaleString().split('/')[1]
let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

console.log(
    day,
    monthsArray[month-1],
    year
)

let testDate = new Date('1 January 2022')
let testNow = new Date()

console.log(
    Math.floor((((((testNow.getTime() - testDate.getTime()) / 1000)/60)/60)/24)),
    Math.floor((((((testNow.getTime() - testDate.getTime()) / 1000)/60)/60))),
    Math.floor((((((testNow.getTime() - testDate.getTime()) / 1000)/60))))
)