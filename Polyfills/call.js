// call function -- directly invokes the function by passing refrence which which points to this variable inside the method
/*let ob={
    fname:"Anjali",
    sname:"Prasad",
    fulln: function (){ // function has the access of `this` keyword.
        console.log(`${this.fname} ${this.sname}`);
        
    }
}
ob.fulln()
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
let printfullname2= ob.fulln.call(ob2)*/
//else 
function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
fulln.call(ob)
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
fulln.call(ob2)