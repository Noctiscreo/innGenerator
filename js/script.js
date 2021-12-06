// Generates a first name for the inn:
function generateInnFirstName() {
    let randomInnFirstName = innFirstName[Math.floor(Math.random() * innFirstName.length)];    
    return randomInnFirstName;
}
// Generates a second name for the inn:
function generateInnSecondName () {
    let randomInnSecondName = innSecondName[Math.floor(Math.random() * innSecondName.length)];
    return randomInnSecondName;
}

// Pick a random number from 1-8.
// The result is used in determining how to combine the inn names.

// Chooses how to combine the two names, using the random number above.

// **TO DO: 
// 1. Create variable for 'get element by ID'
// 2. Write a Switch statement
function combineInnNames () {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) {
        document.getElementById("innName").innerHTML = "The " + generateInnFirstName() + " " + generateInnSecondName();
    }
    if (randNumber == 1){
        document.getElementById("innName").innerHTML = "The inn of the " + generateInnFirstName() + " " + generateInnSecondName();
    }
    if (randNumber == 2){
        document.getElementById("innName").innerHTML = generateInnFirstName() + " " + generateInnSecondName();
    }
}



