
function validateName(element) {
  const regEx = /^[A-Z]([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/
  
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {
      errorElement.innerHTML = `Invalid Name.`
      return false
  }
      
  errorElement.innerHTML = ``
 
  return true
}




function validateEmail(element) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {
      errorElement.innerHTML = `must be a valid email address.`
      return false
  }
      
  errorElement.innerHTML = ``
  
  return true
}

function validateComments(element) {
  const regEx = /^([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {
      errorElement.innerHTML = `enter comments.`
      return false
  }
      
  errorElement.innerHTML = ``
 
  return true
}



function validate(event) {
  switch(event.target.type) {
    case 'text':
      validateName(event.target)
      break;
      case 'email':
          validateEmail(event.target)
          break;
          case 'tel':
            validateComments(event.target)
            break;
          
         
     
        
  }
}


async function handleLogin(e) {
  e.preventDefault()
  const errors = []
  const errorMessage = document.getElementById('errorMessage')
  errorMessage.innerHTML = ''

  for(let element of e.target) {
      if(element.required) {
          const errorElement = document.getElementById(`error-${element.id}`)
          
          if (element.value.length === 0) {
              errorElement.innerHTML = `${element.id} is required.`
              errors.push(false)
          } else {
              errorElement.innerHTML = ``

              switch(element.type) {
                 
                  case 'name':
                      errors.push(validateName(element))
                      break
                      case 'email':
                        errors.push(validateEmail(element))
                        break
                      case 'comments':
                        errors.push(validateComments(element))
                        break
                     
              }
          }
      }
  }

  if (!errors.includes(false)) {
    //https://localhost:7058/api/login

    const data = {
        email: e.target['email'].value,
        name: e.target['name'].value,
        comments: e.target['comments'].value
    }

    const res = await fetch('https://kyh-net22.azurewebsites.net/api/contacts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
            // 'Autorization': `bearer ${sessionStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(data)
    })

    if (res.status === 200) {
      errorMessage.innerHTML = 'Ditt meddelande har skickats!'

    } 

    
}
}
