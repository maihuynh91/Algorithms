function binarySearch(list, value){
  let start = 0
  let end = list.length-1;
  let middle = Math.floor((start+end)/2);
  let count = 0

  while( list[middle]!== value && start<end){
    if(list[middle]<value){
      start = middle+ 1;
    }else{
      end = middle-1
    }
    middle = Math.floor((start+end)/2)
    count++
  }console.log(count)
  return (list[middle]!==value) ? -1: middle 
}

let list = ["a","b","c","d","e","f","g"]

console.log(binarySearch(list, "g"))
