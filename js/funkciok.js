function add(x, b, c){
    return x + b + c;
    }

function add2(...a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }

    return sum;
}