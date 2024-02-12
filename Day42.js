// Date is an object in JavaSript, so we have to declare it using the ' new ' keyword.

let myDate = new Date();
console.log(typeof myDate); // object
console.log(myDate);

// toString() method is used to convert the Date into string.


let myDate = new Date().toString();
console.log(myDate);
console.log(typeof myDate); // string


// toDateString() method extract the date from the Date() object and show it in string.

let myDate = new Date();
console.log(myDate.toDateString()); // Fri Feb 09 2024 



// toTimeString() method extract the time (since 1 January 1970) from the Date() object and show it in string.

let myDate = new Date();
console.log(myDate.toTimeString()); // Fri Feb 09 2024 




console.log(new Date().toISOString());



// this method is same as toISOString() method


console.log(new Date().toJSON());