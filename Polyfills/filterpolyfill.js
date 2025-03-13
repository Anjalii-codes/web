// return a new array
Array.prototype.myfilter=function(userfunc){
    let contextt=this
    newarray=[]
    for(let i=0;i<contextt.length;i++){
        if(userfunc(contextt[i],i,contextt)){
            newarray.push(contextt[i])

        }

    }
    return newarray
}
let a=[1,2,30,5]
let b= a.myfilter((e)=>{
    if(e%2==0){
        return e
    }
})
console.log(b)