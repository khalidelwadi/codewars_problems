let arr = [2, 3, 2, 1, 5, 1, 6]
// create new obj to store value with no duplicates
const objj = {}

for (let i = 0; i < arr.length; i++){
    if (objj.hasOwnProperty(arr[i])){
        objj[arr[i]] = false
        continue;
    }else {
        objj[arr[i]] = true;
    }
}
// new array to store the final result
let new_arr = []
// loop through the obj and adding properties to the new_arr
for (let j = 0; j < arr.length; j++){
    if (objj[arr[j]] != "added"){
        new_arr.push(arr[j])
        objj[arr[j]] = "added";
    }
}
// show the result
console.log(new_arr)