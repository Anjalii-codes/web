
function showimg() {
    const lightoff = document.getElementById('dark')
    let currmode=lightoff.src.split('/').pop()

    if (currmode ==="lighton.jpg" ){
        lightoff.src = "lightoff.jpg"
    }
    else {
        lightoff.src = "lighton.jpg"
    }

    
    }
    

