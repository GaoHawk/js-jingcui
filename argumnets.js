var sum = function(){
    var i, sum = 0;
    for(i=0;i<arguments.length;i+=1){
        sum += arguments[i];
    }
    return sum;
}

document.writeln(sum(4,8,15,16,23,42));