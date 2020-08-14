var str = 'hello bro how r u';
function specialReverse(str,letter){
    var arr = str.split(' ');
    for(var i=0;i<arr.length;i++){
        if(arr[i].charAt(0)==letter){
            arr[i] = arr[i].split("").reverse().join("");
        }
    }
    console.log(arr.join(' '));
}
specialReverse('word searches are super fun','s');

