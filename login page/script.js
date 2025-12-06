const password = document.getElementById('password')
const togglePass = document.getElementById('togglePass')
const reqBox = document.getElementById('reqBox')
const message = document.getElementById('message')

const ruleLength = document.getElementById('ruleLength')
const ruleUpper = document.getElementById('ruleUpper')
const ruleNumber = document.getElementById('ruleNumber')
const ruleSpecial = document.getElementById('ruleSpecial')

togglePass.onclick = () => {
  if (password.type === 'password') {
    password.type = 'text'
    togglePass.textContent = 'Hide'
  } else {
    password.type = 'password'
    togglePass.textContent = 'Show'
  }
}

password.onblur = () => {
  reqBox.style.display = 'block'
  validatePassword()
}

function validatePassword() {
  const passValue = password.value

  updateRule(ruleLength, passValue.length >= 6)
  updateRule(ruleUpper, /[A-Z]/.test(passValue))
  updateRule(ruleNumber, /[0-9]/.test(passValue))
  updateRule(ruleSpecial, /[^A-Za-z0-9]/.test(passValue))

  return (
    passValue.length >= 6 &&
    /[A-Z]/.test(passValue) &&
    /[0-9]/.test(passValue) &&
    /[^A-Za-z0-9]/.test(passValue)
  )
}

function updateRule(element, condition) {
  element.className = condition ? 'valid' : 'invalid'
}

document.getElementById('loginBtn').onclick = () => {
  const username = document.getElementById('username').value.trim()

  if (username.length < 3) {
    message.textContent = 'Username too short'
    message.style.color = 'red'
    return
  }

  if (!validatePassword()) {
    message.textContent = 'Password rules not met'
    message.style.color = 'red'
    return
  }

  const loginData = {
    username,
    password: password.value,
    time: new Date().toLocaleString()
  }

  localStorage.setItem('loginInfo', JSON.stringify(loginData))

  message.textContent = 'Login successful'
  message.style.color = 'green'
}
