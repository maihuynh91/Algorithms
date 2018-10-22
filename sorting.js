function insertionSort(arr){
    for(let i = 1; i<arr.length; i++){
        for (let j = 0; j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr.splice(i, 1)
               
                arr.splice(j, 0, temp[0])
            }
        }
    }return arr;
}
let arr = [3,2,5,1]
console.log(insertionSort(arr))