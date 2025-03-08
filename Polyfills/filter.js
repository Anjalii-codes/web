if(!Array.prototype.myfilter){
    Array.prototype.myfilter=function(userfunc){
        let a1=[]
        for(let i =0;i<this.length;i++){
            if((userfunc(this[i],i,this))){
                a1.push(this[i])
            }
        }
        return a1

    }
}



arr=[2,,40,0,6,7,9,0,7]
let a= arr.myfilter(e=>{
    if(e%2==0){
        return e
    }


})
console.log(a);


