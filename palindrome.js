        function checkPalindrome(str){
            var re = /[^A-Za-z0-9]/g; //Use Regular expression to move special characters
            str = str.toLowerCase().replace(re, ''); //
            if(str.length <= 1) {return true}
            else if(str[0]===str[str.length-1]){
                return checkPalindrome(str.substring(1,str.length-1))
            }
            else{
                return `Not Palindrome. `
            }
        }


        console.log(checkPalindrome('A man, a plan, a canal. Panama'))
        console.log(checkPalindrome('racecar'));
        console.log(checkPalindrome('test'))