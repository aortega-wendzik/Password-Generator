function getPassword() {
    const chars = 
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$^&*()?><:{}[]'";

let passwordLength = 16;
let password = ' ';
for (let i = 0; i< passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()
    *chars.length);
    console.log(randomNumber);
    
    password += chars.substring(randomNumber, randomNumber + 1);
    console.log(password);
}
document.getElementById('password').value = password;
}