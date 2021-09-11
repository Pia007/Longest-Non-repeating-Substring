// Longest Non-repeating substring

// DOM Elements
const lsForm = document.getElementById("ls-form");
// const str = document.getElementById("ls-text").value;
const lsOutcome = document.getElementById("lsResponse");
const buttonCheckStr = document.getElementById("ls-check-string");
const buttonStrReset = document.getElementById("ls-reset-form");


// Hides outcome when form is cleared
function hideLsOutcome() {
    lsOutcome.style.display ="none";
}

// CLEAR Form
function clearLsForm() {
    lsForm.reset();
    hideLsOutcome();
};

// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
// Check Two Sum Button
buttonCheckStr.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonCheckStr.addEventListener('click', lengthOfLongestSubstring);


// Reset Form Button
// buttonStrReset.addEventListener('click', function(e) {
//     e.preventDefault();
// });
buttonStrReset.addEventListener('click', clearLsForm);



function lengthOfLongestSubstring(str) {
    var str = document.getElementById("ls-text").value;
    str = str.toLowerCase().split('');
    // create a set to store the longest substring
    let longestStringLength = 0;
    let currentStringSet = new Set();
    // let longestString = []
    

    // Loop through the provided string
    for (let i = 0; i < str.length; i++) {
        // Use a set to store the string created from the current point
        currentStringSet = new Set();

        // Use an internal loop evaluate the letters from current position
        for (let x = i; x < str.length; x++) {
            // Use "has() to check if the current letter exists in the current Set
            if (currentStringSet.has(str[x])) {
                // If it does, stop because it already exists in the set
                break;
            } else {
                // Otherwise the letter is added to the set because it's not found
                currentStringSet.add(str[x]);

            }
        }
        // updateLength();
        // if this string is bigger, update the length
        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
        // longestString = currentStringSet
        // let longest = longestStringLength
        // function updateLength() {
        //     lsOutcome.innerHTML = Math.max(
        //         longestStringLength,
        //         currentStringSet.size
        //     );
        // }
    }
    //output the length of the longest non repeating substring
    // return longestStringLength;
    lsOutcome.innerHTML =  "The length of the longest non-repeating string is " + `${longestStringLength}` + "," + `${currentStringSet}`
};