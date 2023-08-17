function tailSwap(arr) {
    const objj = {}
    // create an obj for each element in the array
    for(let i = 0; i < arr.length; i++){
        let new_list = arr[i].split(":");
        objj[new_list[0]] = new_list[1]
    
    }
    
    const propertyNames = Object.keys(objj);
    const values = Object.values(objj)
    // rever the value of proprties in obj
    values.reverse()
    let result = []
    
    let text = ""
    
    for (let i = 0; i < propertyNames.length; i++){
        text += propertyNames[i] + ':' + values[i]
        result.push(text)
        text = ""
    }
    //check if the starting char is a number
    if (result[0][0] === "1" || result[0][0] === "2"||result[0][0] === "3"||result[0][0] === "4"||result[0][0] === "5"||result[0][0] === "6"||result[0][0] === "7"||result[0][0] === "8"||result[0][0] === "9"||result[0][0] === "0" ){
       //check if it equal to the first element in the original array
        if(result[0][0] != arr[0][0]){
            result.reverse()
        }
    }
      return result;
    }