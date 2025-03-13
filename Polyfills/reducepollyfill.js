// return a single value
Array.prototype.myreduce=function(userfunc,initialvalue){
    let contextt=this
    let acc=initialvalue===undefined? contextt[0] : initialvalue
    let startindex= initialvalue===undefined? 1:0
    for(let i=startindex;i<contextt.length;i++){
        acc=userfunc(acc,contextt[i],i,contextt)

    }
    return acc
}

let a =[1,2,3,4,5]
let b = a.myreduce((acc,e)=>{
    return acc+e
},5)
console.log(b)