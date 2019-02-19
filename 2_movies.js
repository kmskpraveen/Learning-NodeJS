// exporting everything within module.exports object
// using Object Factory, which prevents sharing of same
// code which imports this and helps to have their (modules which imports this)
// own custom copy

module.exports = function(){
    return{
        favMovie : ""
    }
};

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

// function printAvatar(){
//     console.log("Avatar Movie");
// }

// function printBatman(){
//     console.log("Batman Movie");
// }

// customising the export
// module.exports.avatar = printAvatar;