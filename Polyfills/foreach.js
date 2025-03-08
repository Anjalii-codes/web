if(!Array.prototype.myforeach){

    Array.prototype.myforeach=function(userfunc){
        let orignalarray=this
        for(let i =0;i<orignalarray.length;i++ ){
            userfunc(orignalarray[i],i)
        }

        

    }
}
arr=[1,2,3,4,5]
let ts=0
arr.forEach(s1=>{
    ts+=s1


})
console.log(ts)
arr=[1,2,3,4,5]
let s=0
arr.myforeach(s1=>{
    s+=s1


})
console.log(s)