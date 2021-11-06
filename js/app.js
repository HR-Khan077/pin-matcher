function getFourDigitPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4 ){
        return pin;
    }
    else{
        return getFourDigitPin();
    }
}
function generatePin(){
    const pin = getFourDigitPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const input = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            input.value = '';
        }
    }
    else{
        const firstInput = input.value;
        const otherInput = firstInput + number;
        input.value = otherInput;
    }
});
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if(pin == typedPin){
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else{
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}