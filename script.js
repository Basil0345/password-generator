let text = document.getElementById("text");
document.getElementsByClassName("field")[0].style.display = "none";
text.innerHTML = ""
let wp = document.getElementById("wp");
let sp = document.getElementById("sp");
let ssp = document.getElementById("ssp");
let fp = document.getElementById("fp");
let copyBtn = document.getElementById("copyBtn");

copyBtn.onclick = () => {
    copyContent();
}

const copyContent = async () => {
    try {
        let text = document.getElementById('text').innerHTML;
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

class Password {
    constructor() {
        this.chars = "abcdefghijklmnopqrtuvwxyz";
        this.charUps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.numbers = "1234567890";
        this.specialChars = "!@#$%^&*";
        this.funnyPass = ["123456", "password", "12345678", "1234", "12345", "baseball", "master", "michael", "football", "shadow", "monkey", "abc123", "pass", "6969", "jordan", "password", "123456", "qwerty", "123456789", "letmein", "admin", "welcome", "monkey", "password1", "12345", "abc123", "football", "iloveyou", "sunshine", "123123", "1234567890", "qwerty123", "dragon", "1234567", "baseball", "ranger", "hunter", "2000", "test", "soccer", "hockey", "killer"]
    }

    funnyPassword() {
        return this.funnyPass[Math.floor(Math.random() * this.funnyPass.length)]
    }

    weekPassword() {
        let letter1 = this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
        let letter2 = this.chars[Math.floor(Math.random() * this.chars.length)];
        let letter3 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        let letter4 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        return letter1 + letter2 + letter3 + letter4
    }

    strongPassword() {
        let letter1 = this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
        let letter2 = this.charUps[Math.floor(Math.random() * this.charUps.length)];
        let letter3 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        let letter4 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        let letter5 = this.chars[Math.floor(Math.random() * this.chars.length)]
        let letter6 = this.chars[Math.floor(Math.random() * this.chars.length)]
        return letter1 + letter2 + letter3 + letter4 + letter5 + letter6;
    }

    superStrongPassword() {
        let letter1 = this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
        let letter2 = this.charUps[Math.floor(Math.random() * this.charUps.length)];
        let letter3 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        let letter4 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        let letter5 = this.chars[Math.floor(Math.random() * this.chars.length)]
        let letter6 = this.chars[Math.floor(Math.random() * this.chars.length)]
        let letter7 = this.charUps[Math.floor(Math.random() * this.charUps.length)];
        let letter8 = this.specialChars[Math.floor(Math.random() * this.specialChars.length)];

        return letter1 + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8;
    }

}

let generatePassword = new Password();

fp.onclick = () => {
    document.getElementsByClassName("field")[0].style.display = "block";
    text.innerHTML = generatePassword.funnyPassword();
}

wp.onclick = () => {
    document.getElementsByClassName("field")[0].style.display = "block";
    text.innerHTML = generatePassword.weekPassword();
}

sp.onclick = () => {
    document.getElementsByClassName("field")[0].style.display = "block";
    text.innerHTML = generatePassword.strongPassword();
}

ssp.onclick = () => {
    document.getElementsByClassName("field")[0].style.display = "block";
    text.innerHTML = generatePassword.superStrongPassword();
}