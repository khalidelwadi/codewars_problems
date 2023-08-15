function checkLogs(log) {
    //check if log is empty
    if (log.length == 0){
        return 0;
    }
    //put hours, minutes and seconds in seperate arrays
  let hours = []  
  let minutes = []
  let seconds = []
  for (let i = 0; i<log.length; i++){
      hours.push(log[i].substring(0,2))
    }
  
  for (let i = 0; i < log.length; i++){
      minutes.push(log[i].substring(3,5))
  }
  for (let i = 0; i < log.length; i++){
      seconds.push(log[i].substring(6,))
  }
  
  
  let count = 1
  for (let i = 0; i < hours.length - 1; i++){
      if (hours[i] > hours[i + 1]){
          count += 1
      }else if(hours[i] == hours[i + 1]){
         if (minutes[i] > minutes[i + 1]){
                count += 1
            }
            else if (minutes[i] == minutes[i + 1]){
                if (seconds[i] >= seconds[i + 1]){
                    count += 1
                }
            }
         }
      }
      return count;
}