function addLength(str) {
    let count = 0;
    let word = "";
    let result = [];
   for (let i = 0; i < str.length; i++){
    
     if (str[i] == " "){
       result.push(word +" "+ count.toString())
       console.log(word)
       count = 0
       word = ""
       continue;
     }
     word += str[i]
    
     count += 1
   }
   result.push(word + " "+ count.toString())
   return result;
}

 
console.log(addLength("apple ban"))