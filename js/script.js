





const validateName = (e) => {
  const regEx = /^[A-Z]([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/
  if (!regEx.test(e.target.value)) {
    document.getElementById("error").innerText = "Fel"
    
      console.log("firstname not valid")
      return false
  }
  document.getElementById("error").innerText = ""
  
      
  console.log("firstname valid")
  return true
}


const validateEmail = (e) => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  

  if (!regEx.test(e.target.value)) {
    document.getElementById("error-email").innerText = "Fel"
    
      console.log("firstname not valid")
      return false
  }
  document.getElementById("error").innerText = ""
  console.log("firstname valid")
  return true

}