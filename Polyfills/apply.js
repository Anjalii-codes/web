// apply function -- directly invokes the function by passing refrence which which points to this variable inside the method. but the only difference between call and apply is the way we pass arguements(list of arguements is passed).

/*let ob={
    fname:"Anjali",
    sname:"Prasad",
    fulln: function (hometown,state){ // function has the access of `this` keyword.
        console.log(`${this.fname} ${this.sname} from ${hometown},${state}`);
        
    }
}
ob.fulln("Rourkela","odisha")
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
let printfullname2= ob.fulln.apply(ob2,["Rourkela","odisha"])*/
//else 
function fulln(){
    console.log(`${this.fname} ${this.sname}`);
    
}
let ob={
    fname:"Anjali",
    sname:"Prasad",
    
}
fulln.apply(ob,["rkl","odisha"])
// function borrowing
let ob2={
    fname:"Anjali2",
    sname:"Prasad2",
}
fulln.apply(ob2,["rkl","odisha"])