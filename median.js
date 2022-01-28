// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    input.sort();
    x = input.length;
    if (x % 2 == 0){
        x1 = input[(x/2)-1];
        x2 = input[x/2];
        return (x1+x2)/2;
    } 
    else{
        x3 = x-1;
        return input[x3/2];
    }    
}

console.log(result(input));