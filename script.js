function validate(e){
    e.preventDefault();

    const email = document.getElementById(`email`).value;
    const pass = document.getElementById(`password`).value;
    const age = document.getElementById(`age`).value;
    const msgBox = document.getElementById(`massage`);

    let massage = '';

    if (email === ''){
    massage='Please Enter An Email';
    msgBox.style.color = 'red';
    }
    else if (pass === ''){
        massage='Password Must Be Vaild';
        msgBox.style.color = 'red';
        }
    else if (age === ''){
            massage='Age Must Be Between 12 and 50';
            msgBox.style.color = 'red';
            }
           
    else{
             massage='Login Succesfull';
            msgBox.style.color = 'green';
            }
            msgBox.innerText = massage;
}
