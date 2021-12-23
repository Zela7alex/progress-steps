const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// Represents whichever one is Active
let currentActive = 1


//Listens for click "next". When it clicks it runs a function. 
next.addEventListener('click', () => {
    currentActive++
    // This states that it will only go to the length of the class so 4.
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

//Listens for click "prev" same as "next" even listener.
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()


})

//This function creates the loop around to next numbers 
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {

    } else {
        prev.disabled = false
        next.disabled = false
    }
}