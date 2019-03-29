// exporting everything within module.exports object
// using Object Factory, which prevents sharing of same
// code which imports this and helps to have their (modules which imports this)
// own custom copy

// Code for Video-11
module.exports = function(){
    return{
        favMovie : ""
    }
};

// Code for Videos-9,10
// exporting everything within module.exports object
// module.exports = {
//     favMovie: "",
//     printAvatar: function(){
//         console.log("Avatar Movie");    
//     },
//     printBatman: function(){
//         console.log("Batman Movie");    
//     }
// };

// Code for Video-8
// function printAvatar(){
//     console.log("Avatar Movie");
// }

// function printBatman(){
//     console.log("Batman Movie");
// }

// customising the export
// module.exports.avatar = printAvatar;