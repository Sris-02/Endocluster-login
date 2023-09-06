const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const number=document.getElementById('number');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError=(element,message) => {
    const inputGroup = element.parentElement;
    const errorDisplay= inputGroup.querySelector('.error');

    errorDisplay.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

const setSuccess=element => {
    const inputGroup = element.parentElement;
    const errorDisplay= inputGroup.querySelector('.error');

    errorDisplay.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
};

const isValidEmail =email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const valideInputs = () => {
    const usernameValue =username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const numberValue=number.value.trim();
    
    if(usernameValue === ''){
         setError(username,'Username is required');
    } else {
         setSuccess(username);
    }
    
    if(emailValue === ''){
        setError(email,'Email is required');
        
    } else if (!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
         setError(password,'Password is required');
      } else  if(passwordValue.length <8){
         setError(password,'Password must be at least 8 characters');
      } else{
         setSuccess(password);
    }

    if(numberValue === ''){
        setError(number,'Number is required');
    } else if(numberValue.length <11) {
        setError(number,'Number must be of 10 digits')
    } else {
        setSuccess(number);
    }

};