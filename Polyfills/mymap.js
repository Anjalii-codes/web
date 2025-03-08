// arr=[1,2,3,4]
// let neww=arr.map(s=>s*2
// )
// console.log(neww)

if(!Array.prototype.mymap){
    Array.prototype.mymap=function(userfunc){
        let newww=[]

        for(let i=0; i<this.length;i++){
            newww.push(userfunc(this[i],i))
        }
    
        return newww
    }
    
}
arr =["anjali" , "sonu" , "mohit"]
let neww_1= arr.map(e => e.toUpperCase())
console.log(neww_1)
arr =["anjali" , "sonu" , "mohit"]
let neww_2= arr.mymap(e => e.toUpperCase())
console.log(neww_2)