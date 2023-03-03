



  

const names = document.getElementById('name')
const email = document.getElementById('email')
const comments = document.getElementById('comments')

const form = document.getElementById('form')





const validateName = (e) => {
  const regEx = /^[A-Z]([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/
  if (!regEx.test(e.target.value)) {
    document.getElementById("error-name").innerText = "Invalid Name!"
    document.getElementById('name-message').innerText = 'Your name has to start with uppercase'
    
      console.log("firstname not valid")
      return false
  }
  document.getElementById("error-name").innerText = ""
  document.getElementById("name-message").innerText = ""
  
  
      
  console.log("firstname valid")
  return true
}


const validateEmail = (e) => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  

  if (!regEx.test(e.target.value)) {
    document.getElementById("error-email").innerText = "Invalid Email!"
    
      console.log("firstname not valid")
      return false
  }
  document.getElementById("error-email").innerText = ""
  console.log("firstname valid")
  return true

}
const validateComments = (e) => {
  const regEx = /^([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/

  if (!regEx.test(e.target.value)) {
    document.getElementById("error-comments").innerText = "Please write your comments"
    
      console.log("firstname not valid")
      return false
  }
  document.getElementById("error-comments").innerText = ""
  console.log("firstname valid")
  return true
}

form.addEventListener('submit', (e) =>  {
  let messages = []
  if(names.value === '' || email.value === '' || comments.value === '')
  messages.push('')
  
  if (messages.length > 0){
    e.preventDefault()
    

  }
 

})




