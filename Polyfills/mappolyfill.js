// return a new array
Array.prototype.mymap=function(userfunc){
    let contextt_is = this
    new_array=[]
    for(let i=0;i<contextt_is.length;i++){
        let ele=userfunc(contextt_is[i],i,this)
        new_array.push(ele)
    }
    return new_array
}
let a= [1,2,3,4]
let a1 =a.mymap((e)=>{return e**e})
console.log(a1)