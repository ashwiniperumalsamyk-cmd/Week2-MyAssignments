
function isAnagram(str1, str2) {

    str1 = str1.replaceAll(" ", "").toLowerCase(); // 1. Remove spaces and convert to same case
    str2 = str2.replaceAll(" ", "").toLowerCase();

    str1 = str1.split("").sort().join(""); // 2. Sort the characters
    str2 = str2.split("").sort().join("");

    // 3. Compare sorted strings
    // 4. Return the result
    return str1 === str2;
}

console.log(isAnagram("listen", "silent")); //print it
console.log(isAnagram("hello", "world"));