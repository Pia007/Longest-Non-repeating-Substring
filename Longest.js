// Longest Substring Without Repeating Characters
    // Given a string s, find the length of the longest substring without repeating characters.

    // Example 1:

    // Input: s = "abcabcbb"
    // Output: 3
    // Explanation: The answer is "abc", with the length of 3.
    // Example 2:
    
    // Input: s = "bbbbb"
    // Output: 1
    // Explanation: The answer is "b", with the length of 1.
    // Example 3:
    
    // Input: s = "pwwkew"
    // Output: 3
    // Explanation: The answer is "wke", with the length of 3.
    // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    // Example 4:
    
    // Input: s = ""
    // Output: 0



function lengthOfLongestSubstring(str) {
    // create a set to store the longest substring
    let longestStringLength = 0;

    // create a set to store the longest substring
        //Why? JS set cannot contain duplicate elements i.e. it keeps unique elements only.
        let longestStrLength = 0;
    
    
        // Loop through the provided string
        for (let i = 0; i < str.length; i++) {
            // Use a set to store the string created from the current point
            let stringSet = new Set();
    
            // Use an internal loop to evaluate the letters starting at the current point
            for (let x = i; x < str.length; x++) {
                // Use has() to check if the current letter exists in the current Set
                if (stringSet.has(str[x])) {
                    // If it does, stop because it already exists in the set
                    break;
                } else {
                    // Otherwise the letter is added to the set because it's not found
                    stringSet = stringSet.add(str[x]);
                }
            }
            
            // assign longestStrLength to the greater numerical value(longestStrLength or stringSet)
            longestStrLength = Math.max(
                longestStrLength,
                stringSet.size
            );
        }
    //output the length of the longest non repeating substring
    return longestStrLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("lokmmmhy"))
console.log(lengthOfLongestSubstring("fudddrrweq"))