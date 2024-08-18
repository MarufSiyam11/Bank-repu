document.getElementById('btn-submit').addEventListener('click',function(){
    // get the email
    const userEmial =document.getElementById('user-email')
    const email =userEmial.value;
    // get the password
    const userPasword =document.getElementById('user-password')
    const password =userPasword.value;
    // console.log(password)
    if(email ==='maruf@gmail.com' && password === 'siyam'){
        window.location.href='bank.html'
    }else{
       alert('Gmail & Password Wrong')
    }
})