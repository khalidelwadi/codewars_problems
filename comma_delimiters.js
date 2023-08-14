function printArray(array){
    let result = ""
  
    for (let i = 0; i < array.length; i++){
        result += array[i]
        result += ","
     }
     
     return result.slice(0, -1);

}


