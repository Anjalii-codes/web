// return type --function
Function.prototype.mybind= function(...args){
    let obj=this
    let params = args.slice(1)
    return function(...args2){
        return obj.apply(args[0],[...params,...args2]) // [...params,...args2] --- conacatinates both

        }
    }
    

function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
let b=fulln.mybind(ob,"rkl","odisha")
b()
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
let b1=fulln.mybind(ob2,"rkl","odisha")
b1()