var getMilitaryTime = function(input) {
  //creating an object of convertable hours
  const matchpm = {
    "01":"13",
    "02":"14",
    "03":"15",
    "04":"16",
    "05":"17",
    "06":"18",
    "07":"19",
    "08":"20",
    "09":"21",
    "10":"22",
    "11":"23",
    "12":"12"
  }
  
  
  if (input[input.length - 2] == "P"){
    let new_value = matchpm[input.substring(0,2)]
    return new_value + input.substring(2,8);
    
  }else if(input[input.length - 2] == "A"){
    if (input.substring(0,2) == "12"){
      return "00" + input.substring(2,8)
    }else {
        return input.substring(0,8)
      }
  }
  
};

console.log(getMilitaryTime("07:05:45PM"))