// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const friends = ['Michael', 'Steven', 'Peter']

friends.push("John")

console.log(friends)


const rectangle = {
    get_square: function(_length, width) {
        return _length * width
    }  
};

console.log(rectangle.get_square(3,5 ))


for (let i = 1; i <= 10; i++) {
    console.log(`${i} loop`)
}