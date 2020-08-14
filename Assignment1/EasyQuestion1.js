function charCount(letter,str){
    var count =0;
    for(var i = 0;i < str.length; i++){
        if(letter == str.charAt(i)){
            count++;
        }
    }
    return count;
}
console.log(charCount('a','edabit'));
console.log(charCount('c','Chamber of secrets'));
console.log(charCount('b','big fat bubble'));