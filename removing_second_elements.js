function removeEveryOther(arr){
    //new array to store result
    let new_arr = []
    for (let i = 0; i < arr.length; i++){
        //loop throug array and store every second value
        if (i % 2 == 0){
            new_arr.push(arr[i])
        }
    }
    return new_arr
  }

