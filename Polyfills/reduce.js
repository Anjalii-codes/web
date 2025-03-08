if(!Array.prototype.myreduce){
    Array.prototype.myreduce=function(userfunc,initialValue){
        for(let i =0 ; i<this.length;i++){
            let s=userfunc(s,this[i],i,this,initialValue=0)
        }
        return s


    }
}




arr=[1,2,3,4,4]
let a = arr.myreduce((acc,i)=>acc+i)
console.log(a)