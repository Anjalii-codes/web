function changemode(color) {
    return document.body.style.backgroundColor=color
}
let clickmebutton = document.getElementById('Targetbutton')
clickmebutton.addEventListener('click', function () {
    let curr_color = document.body.style.backgroundColor
    if (!curr_color || curr_color == 'white') {
        changemode('black')

    }
    else {
        changemode('white')
    }
    
})

