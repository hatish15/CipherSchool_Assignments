function realType(typevalue){
    var type = (Object.prototype.toString.call(typevalue));
    console.log(type.substring(8).replace(']',''));
}
realType(1);
realType("a");
realType(true);
realType([]);
realType(null);