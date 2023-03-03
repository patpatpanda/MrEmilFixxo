
try {
  const toggleButton = document.querySelector('[data-option="toggle"]')
  const target = toggleButton.getAttribute('data-target')
  toggleButton.addEventListener('click', toggleTarget)

  function toggleTarget() {
      const element = document.querySelector(target)

      if (!element.classList.contains('hide')) {
          element.classList.add('hide')
      } else {
          element.classList.remove('hide')
      }
  }
} 
catch {}











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

async function handleContactForm(e) {
  e.preventDefault()

  const form = {
    email: e.target['email'].value,
    names: e.target['name'].value,
    Comments: e.target['comments'].value
}

  const res = await fetch('https://kyh-net22.azurewebsites.net/api/contacts', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
  })
  
  if (res.status === 200)
      console.log('tack för din förfrågan!')

}


  




const arrow = document.querySelector('#totop-arrow')
arrow.addEventListener('click', function(){
  window.scrollTo({top:0,behavior:"smooth"})
})
