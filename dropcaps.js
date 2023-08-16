function dropCap(n) {
    // split the text based on spaces
    let s_arr = n.split(" ")
    let new_arr = []
    // each word to new_arr array
    for (let i = 0; i < s_arr.length; i++){
        if (s_arr[i] == ""){
            new_arr.push(" ")
            continue;
        }else if (s_arr[i].length <= 2){
            new_arr.push(s_arr[i])
            new_arr.push(" ")
        }else {
            let low = s_arr[i].toLowerCase();
            new_arr.push(low.charAt(0).toUpperCase() + low.slice(1))
        }
    }
    let m_arr = []
    // add space after each word
    for (let i = 0; i < new_arr.length; i++){
        if (new_arr[i].length > 2){
            m_arr.push(new_arr[i]);m_arr.push(" ")
            continue;
        }
        m_arr.push(new_arr[i])
    }
    //remove the last space if it wasn't on the original text
    m_arr.pop()
    let resut = ""
    for (let j = 0; j < m_arr.length; j++){
        resut += m_arr[j]
    }
      return resut;
}