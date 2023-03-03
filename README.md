form.addEventListener('submit', (e) =>  {
  let messages = []
  if(names.value === '' || email.value === '' || comments.value === '')
  messages.push('')
  
  if (messages.length > 0){
    e.preventDefault()
    

  }
  


})