   const form = document.getElementById("form")
   const username = document.getElementById("username")
   const email = document.getElementById("email")
   const password = document.getElementById("password")
   const confirmPassword = document.getElementById("password2")

form.addEventListener('submit', function(event){
				event.preventDefault()
				inputValue()
})

function inputValue(){
				const usernameValue = username.value.trim()
				const emailValue = email.value.trim()
				const passwordValue = password.value.trim()
				const confirmPasswordValue = ConfirmPassword.value.trim()			
				
				
				if (usernameValue ===''){
				setIncorrectFor(username, 'username cannot be blank')
				}
				else if(usernameValue.length < 6){
								setIncorrectFor(username, 'username must be up to 6 characters')
				}
				else{
								setCorrect(username)
				}
}
		 function setIncorrectFor(input, message){
	      const formOrder = input.parentElement;
								const small = formOrder.querySelector('small')
								small.innerText = message
								
								formOrder.className = 'form-order error'
				}
				function setCorrect(input){
								const formOrder = input.parentElememt;
								 formOrder.className = 'form-order correct'
				}
      
      if (emailValue ===''){
				setIncorrectFor(email, 'Email cannot be blank')
				}
				
				else{
								setCorrect(email)
				}

      if (passwordValue ===''){
				setIncorrectFor(password, 'Password cannot be blank')
				}
				else if(passwordValue.lenght < 8){
								setIncorrectFor(username, 'Password must be up to 6 characters')
				}
				else{
								setCorrect(password)
				}

      if (password2Value ===''){
				setIncorrectFor(password2, 'Confirm password cannot be blank')
				}
				else if(password2Value.lenght !== password){
								setIncorrectFor(password2, 'Password does not match')
				}
				else{
								setCorrect(password2)
				}

