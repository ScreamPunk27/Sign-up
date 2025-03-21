const submit = document.getElementById('input-submit');
const inputs = document.querySelectorAll('.input');
const messages = document.querySelectorAll('.msg-equals');
const email = document.getElementById('input-email');
const msgEmail = document.querySelector('.msg-email');
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let totalVerifications = 4
let verifications = [false,false,false,false];

submit.addEventListener('click',(e)=> {
    e.preventDefault();
    emptyOrNot()
    checkupEmail();
    
    checkupAll();
})


const emptyOrNot = ()=> {
    inputs.forEach((input,index) => {
        if(input.value == ''){
            messages[index].style.opacity='1';
            input.style.border='1px solid var(--red)';
            input.style.backgroundImage='url(../images/icon-error.svg)';
            verifications.splice(index,1,false)
        }else{
            messages[index].style.opacity='0';
            input.style.border='1px solid var(--green)';
            input.style.backgroundImage='none';
            verifications.splice(index,1,true)
        }
    })
}

const checkupEmail = ()=> {
    if(email.value == ''){
        email.style.border='1px solid var(--red)';
        email.style.backgroundImage='url(../images/icon-error.svg)';
        msgEmail.textContent='Email cannot be empty';
        msgEmail.style.opacity='1';
        verifications.splice(verifications.length-1,1,false);
    }else{
        if( validEmail.test(email.value) ){
            email.style.border='1px solid var(--green)';
            email.style.backgroundImage='none';
            msgEmail.style.opacity='0';
            verifications.splice(verifications.length-1,1,true);
        }else{
            email.style.border='1px solid var(--red)';
            email.style.backgroundImage='url(../images/icon-error.svg)';
            msgEmail.textContent='Email is invalid';
            msgEmail.style.opacity='1';
            verifications.splice(verifications.length-1,1,true);
        }
    }   
}



const checkupAll = ()=> {
    let counter = 0
    verifications.forEach(e => {
        if(e == true){
            counter++;
        }
    })

    if(counter == 4){
        alert('Everithing is ok');
        location.reload();
    }
    
}
