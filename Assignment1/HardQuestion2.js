function Contains(str){
    for(var i=0;i<str.length;i++){
        if(!isNaN(str.charAt(i))) return true;
    }
    return false;
}
function numInStr(a){
    var arr = [];
    for(var i=0;i<a.length;i++){
        if(Contains(a[i])){
            arr.push(a[i]);
        }
    }
    console.log(arr);
}
numInStr(["1a","a","2b","b"]);
numInStr(['abc','abc1']);