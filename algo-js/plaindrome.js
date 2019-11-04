
function isPalindrome(word) {

    let w = String(word).toLowerCase();
    let mylist = [];
    let mylistIn = [];

    for(let i = 0; i <w.length ; i++ ) {
        mylistIn.push(w.charAt(i));
    }

    mylistIn = mylistIn.join('');

    for (let end = w.length -1 ; end >=  0; end--){
        mylist.push(w.charAt(end));
    }
    mylist = mylist.join('');

    if(mylist === mylistIn) {
        return true;
    } else {
        return false;
    }
   
}

function palindrome(text) {

    if (text === undefined) {
        return false;
    }
    let word = String (text).toLowerCase(); 
    let invWord = word.split("").reverse().join("");
    if(word === invWord) {
        return true;
    } else {
        return false;
 }
}

console.log(isPalindrome("Deleveled"));
console.log("\nplaindrome function");
console.log(palindrome("Deleveled"));

