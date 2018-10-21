// You and a friend have set a wager to see who can find the word "Albatross" in the dictionary the
// fastest. Write a program to allow you to win the bet.

let words = ['World', 'Brother','Albatross', 'AA', 'World', 'Yes'];
function findWord(list, word){
    list.sort()
    let start=0;
    let end= list.length-1;
    let middle = Math.floor((start+end)/2)
    while(list[middle]!== word && start<end){
        if(list[middle]>word){
            end = middle-1
        }else{
            start = middle+ 1;
        }
        middle = Math.floor((start+end)/2)
    }
    return (list[middle]!==word) ? -1: middle

}

console.log(findWord(words, 'Albatross'))

