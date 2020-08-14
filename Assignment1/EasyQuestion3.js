function replaceVowel(str){
    var newstr = '';
    newstr = str.replace(/a/g,'1');
    newstr = newstr.replace(/e/g,'2');
    newstr = newstr.replace(/i/g,'3');
    newstr = newstr.replace(/o/g,'4');
    newstr = newstr.replace(/u/g,'5');


    return newstr;
}

console.log(replaceVowel('karachi'));
console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));