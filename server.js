const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");


dotenv.config();
// The encrypted message
const encryptedMessage = "iLk4FTFSFAsJT13xErNO1BlQk9rt/Wmrc/MI0Ogu/hAhDrcSA8yryoFXNvPDl44N06WjbQKjW2IDIuvIG6lLiJzvSRzFbr4+Sey56wqwpY8wLLY1/ZxZbysX0yiiKUYN9tvzdPKi8fiF+InEuSo047QJn+CrCpbMFu6LGqI/eUbIep8W6Bwz1SDc3IINT349uFqOQbAJIi8iMvbo69Tdt+eBmamh/zv+Y1tephj5R+b5FxbJQHc3hdE29xGuOqE8OKonXhwltaU2RW+Y3WKniqfHVKupaTnsONvgzbLJfBwnG/eibYzfVofae++MFSFyg5GnwjabZsNUWHR2YeF9wi8j/9sI592Z4sy7GAqQz8/iWj5kuXuIocx7g2Gwu2ankNSEidq5EMUOI4zizNBRj7igc7Iju/mxxoOaomfWjdcFjxtX6q1RlgYd4gF/teM4/xPG6+kS13a60xqH2nf/GV8KCnbIG3BJrg6CJunOiqo=";
// Configuration matching the encryption
const key = CryptoJS.enc.Utf8.parse(process.env.key);
const iv = CryptoJS.enc.Utf8.parse(process.env.iv);
try {
    // Decrypt with proper configuration
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // Convert to UTF8 string
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    if (decryptedText) {
        console.log("Decrypted successfully:", decryptedText);
        // If the result is JSON, you can parse it
        try {
            const jsonData = JSON.parse(decryptedText);
            console.log("Parsed JSON:", jsonData);
        } catch (e) {
            console.log("Note: Result is not JSON format");
        }
    } else {
        console.log("Decryption resulted in empty string");
    }
} catch (error) {
    console.error("Decryption error:", error.message);
}