var elForm = document.querySelector('.form')
var elKm = document.querySelector('.km')
var elTime1 = document.querySelector('.time1')
var elTime2 = document.querySelector('.time2')
var elTime3 = document.querySelector('.time3')
var elTime4 = document.querySelector('.time4')


elForm.addEventListener('submit' , function (km) {
    km.preventDefault()

    elTime1.textContent = km.target.km.value / 5 
    elTime2.textContent = km.target.km.value / 20
    elTime3.textContent = km.target.km.value / 100
    elTime4.textContent = km.target.km.value / 800
})
