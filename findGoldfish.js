// You work at a pet store, and a child has asked you to net the only white-spotted goldfish from 
// the fish tank. Write a program that will help you net the right fish.

        let tank = ['black', 'white','white-spotted', 'red','yellow'];
        function findRightFish(tank, fish){
            for(let i =0; i<tank.length; i++){
                if(fish=== tank[i]){
                    return fish;
                }
            }
            return "not found";
            }

        console.log(findRightFish(tank, "w"));