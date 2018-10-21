//  var arr = [[1,2,3], [1,[1,2]]];
// var count = 0;

// function countArr(arr){
//   if(Array.isArray(arr)===false){count++;}//base case
//   else{
//     for(let i = 0; i<arr.length;i++){
//       countArr(arr[i]);
   
//                 }
// } 
// return count
// }
// console.log("result " + countArr(arr))
 

// function reverseStr(str){
//     if (str === "") return "";
//     else{
//         return reverseStr(str.substring(1)) + str[0]
//     }
// }

// console.log(reverseStr("bloc!"))

        let arr = [[1,0], [1,[2,6]]];
        function countArrayElement(arr){
            count=0;
            if(Array.isArray(arr)===false){
                return 1;
            }else{
                for (element of arr) { //recheck of and in in Array
                    count+=  countArrayElement(element)
                }
            }return count
        }

        console.log(countArrayElement(arr))