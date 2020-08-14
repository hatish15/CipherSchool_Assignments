function testJackpot(arr){
    let newSet = new Set();
    for(var i=0;i<arr.length;i++){
        newSet.add(arr[i]);
    }
    return newSet.size == 1 ? true:false;

}
console.log(testJackpot(['ss','ss','Ss','ss']));