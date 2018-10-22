function quickSort(arr){
    let left=[];
    let right=[];
    let pivot = arr[arr.length-1]
    if(arr.length<=1)return arr;
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else right.push(arr[i])
    }
   let a = quickSort(right);
   let b = quickSort(left)
   return [...b, pivot, ...a]
    
}

let list =[2,0,5,1,3]
console.log(quickSort(list))