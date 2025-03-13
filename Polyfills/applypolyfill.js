Function.prototype.myapply=function(userfunc={},args=[]){
    userfunc.fn=this

    userfunc.fn(...args)
}
function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
fulln.myapply(ob,["rkl","odisha"])
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
fulln.myapply(ob2,["rkl","odisha"])