function sayHello( name, city, state ) {
    let full_name = ''
    for (let i = 0; i < name.length; i++){
      full_name += name[i]
      if (name[i] != name[name.length-1]){
        full_name += " "
      }
    }
    return `Hello, ${full_name}! Welcome to ${city}, ${state}!`
  }