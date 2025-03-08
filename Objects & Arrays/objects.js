const person = {
    x:10,
    firstName: "Anjali",
    lastName: "Prasad",
    hobbies: ['Coding', 'Reading'],
    isMarrid: false,
    hasbf: false,
    hadbf: false,
    hadCrush: Infinity,
    getFullName : function(){
        return 'Anjali Prasad'
    },
    address:{
        hno: 1,
        street: 2,
        countryCode: 'IN',
        state: 'HR'
    }
}

console.log(person.address.countryCode);

// UseCase of Object - Group krne k liye

const remote ={
    color: "Black",
    brand: "Xyz Comany",
    dimensions: {height: 1, width: 1},
    turnOff: function(){
        
    }
}