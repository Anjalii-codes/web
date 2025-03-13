Function.prototype.mycall=function(userfunc={},...args){
    userfunc.fn =this
    userfunc.fn(...args)


}

function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
fulln.mycall(ob)
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
fulln.mycall(ob2)