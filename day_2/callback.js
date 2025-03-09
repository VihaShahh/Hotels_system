// function callback(){
//     console.log("means this function we pass as a arg to add function means it add function nu kam pate pchi call krvu che etle")
// }

// // const add = function(a,b,callback){
//     const result = a + b
//     console.log(result)
//     callback();
// }
// add(1,3,callback);
//=====================================================================
const add = function(a,b,callback){
     const result = a + b
     console.log(result)
    callback();
}
// pan aai tu kya y aa callback function lakyu j nthi pan upar ni jem to ene add function call na para ma as a inline function y use thay

add(3,4, function(){
    console.log("means this  callback functi")
})
//==============================
//add function , 1st para - 3, second -4, third - callback function
// add(3,4, () => console.log("means this  callback function"))