let array = [4,1,0,9]

function bubbleSorting(array){
    for(let i = 0; i<array.length; i++){
        for(let j = 1; j<array.length;j++){
            if(array[j-1]>array[j]){
                let temp = array[j-1];
                array[j-1]= array[j];
                array[j] = temp;
                console.log(array)
            }
        }
    }return array;
}

console.log(bubbleSorting(array));

// function bubbleSorting(array){
//    let swapped
// do{
//     swapped = false;
//     for(let i = 0; i<array.length; i++){
//         if(array[i-1]>array[i]){
//             swapped= true
//             let temp = array[i-1];
//             array[i-1]= array[i];
//             array[i] = temp; 
//     }}
// } 
// while(swapped===true) ;
// return array;  
// }
// let arr= [4,0,2,1]
// console.log(bubbleSorting(arr))