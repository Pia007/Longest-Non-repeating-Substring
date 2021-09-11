// Longest Non-repeating substring

// DOM Elements
const lsForm = document.getElementById("ls-form");
// const str = document.getElementById("ls-text").value;
const lsOutcome = document.getElementById("lsResponse");
const buttonCheckStr = document.getElementById("ls-check-string");
const buttonStrReset = document.getElementById("ls-reset-form");


// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
buttonCheckStr.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonCheckStr.addEventListener('click', checkInput);

function hideLsOutcome() {
    lsOutcome.style.display ="none";
}

// CLEAR Form
function clearLsForm() {
    setTimeout(function() {
        lsForm.reset();
        hideLsOutcome();
    }, 3000);
};

// Check format of input
function checkInput(str) {
    var str = document.getElementById("ls-text").value;

    // Loop through the string
    for (let i = 0; i < str.length - 1; i++){
        // regex for letter and special characters or just special characters
        let specialChar = /[A-Za-z][!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        
        //regev for letters and numbers or just numbers
        let numbers = /[A-Za-z]\d|\d/

        //check if either regex pattern is present in the string
        if(specialChar.test(str) || numbers.test(str)) {

            // if yes, user gets prompted to enter the correct data type
            lsOutcome.innerHTML = "Enter only letters";
            lsOutcome.style.color = "#FF1919";
            lsOutcome.style.display = "block";
 
        }else{
            //otherwise, call length of string function
            lengthOfLongestSubstring()
        }
        // clear the form after the function runs
        clearLsForm()
    }   

}


function lengthOfLongestSubstring(str) {
    var str = document.getElementById("ls-text").value;
    
    // create a set to store the longest substring
        //Why? JS set cannot contain duplicate elements i.e. it keeps unique elements only.
    let longestStringLength = 0;
    
    
    // Loop through the provided string
    for (let i = 0; i < str.length; i++) {
        // Use a set to store the string created from the current point
        let currentStringSet = new Set();

        // Use an internal loop to evaluate the letters starting at the current point
        for (let x = i; x < str.length; x++) {
            // Use has() to check if the current letter exists in the current Set
            if (currentStringSet.has(str[x])) {
                // If it does, stop because it already exists in the set
                break;
            } else {
                // Otherwise the letter is added to the set because it's not found
                currentStringSet = currentStringSet.add(str[x]);
            }
        }
        
        // if this string is bigger, update the length
        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }
    // Outputs the length of the longest string
    lsOutcome.innerHTML =  "The length of the longest non-repeating string is " + `${longestStringLength}`
    lsOutcome.style.color = "#00FF2A";
    lsOutcome.style.display ="block";
   
};