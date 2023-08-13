function array(string) {
    // check if string is empty
    if (string == ""){
      return null;
    }

    let result = ""
    let arr = string.split(',');
    // remove last and first elements
    arr.pop();arr.shift()

    // check if array is empty
    if (arr.length == 0){
      return null
    }
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
        // add space if the arr[i] is not equal to the last element in arr
        if (arr[i] != arr[arr.length - 1]){
            result += " "
        }
    
    }
      
      return result;
}

hendend