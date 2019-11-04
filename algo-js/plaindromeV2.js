function isTextPlaindrome(text){
    text = text.toLowerCase();
    if(text === undefined) {
        return false;
    }

var left = 0;
var right = text.length - 1 ;

while ( left < right ) {
    if(text[left++] !== text[right -- ]) {
        return false;
    }
}

    return true;
}

function isPhrasePlaindrome(text) {
    var chars = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return isTextPlaindrome(chars);

}

console.log(isTextPlaindrome("Deleveled"));

console.log(isTextPlaindrome("sdsdssxcs1Sdsd**^"));

