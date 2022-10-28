 function   isPangrama(string){
    const myArr = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    let isPanagram = true
    
    let mySentence = string.join()
    
    for (let each of myArr){
      
      if (!mySentence.include(each)){ isPanagram = false ;break }

    }
    return isPanagram
  }

  isPangrama('ffdsjnhfiosjnfs')