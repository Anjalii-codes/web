if(!Array.prototype.myreduce){
    Array.prototype.myreduce=function(userfunc,initialValue){
        let acc = initialValue === undefined? this[0] : initialValue
        let curval = initialValue === undefined? 1 : 0
        for(let i =curval ;i<this.length;i++){
            acc=userfunc(acc,this[i],i,this)
        }
        return acc


    }
}

arr=[132,123,90,78,78]
let m= arr.reduce((acc , i)=> acc*i)
console.log(m);

arr=[132,123,90,78,78]
let m1= arr.myreduce((acc , i)=> acc*i)
console.log(m1);

