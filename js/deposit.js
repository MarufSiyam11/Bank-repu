// step 1 -add even listener to the deposit buttun
document.getElementById('btn-diposit').addEventListener('click',function(){
    // step-2 -get the dipositamouunt from the deposit input feild
    const depositFeild =document.getElementById('deposit-feild')
    const depositAmount =depositFeild.value;
     
    // step 3 -get the currect deposit total
    const depositTotalElement =document.getElementById('deposit-total')
        const depositTotal =depositTotalElement.innerText;
        depositTotalElement.innerText=depositAmount;
        depositFeild.value='';
    
})