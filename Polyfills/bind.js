// bind() method creates a new function with a specific this value and preset arguments, without calling it immediately.


function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
let b=fulln.bind(ob,"rkl","odisha")
b()
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
let b1=fulln.bind(ob2,"rkl","odisha")
b1()