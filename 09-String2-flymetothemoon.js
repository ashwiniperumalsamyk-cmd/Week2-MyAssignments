function lastWord(s) {
    s = s.trim(); // 1. Trim the String

    let words = s.split(" "); // 2. Split the String into Words

    let last = words[words.length - 1]; // 3. Identify the Last Word

    let length = last.length; // 4. Calculate the Length of the Last Word

    return length; // 5. Return the length
}

console.log(lastWord(" fly me to the moon "));
