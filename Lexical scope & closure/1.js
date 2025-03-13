/*function close(){ ---- function scoped
    for(var i=0;i<4;i++){
        setTimeout(()=>console.log(i),1000)
    }
}
close()*/
/*function close(){ ----- block scope
    for(let i=0;i<4;i++){
        setTimeout(()=>console.log(i),1000)
    }
}
close()*/
function change(x){  
    setTimeout(()=>console.log(x),1000)
}

function close(){
    for(var i=0;i<4;i++){
        change(i)
    }
}
close()
