const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" }
});

function encrypt(text, publicKey) {
  const buffer = Buffer.from(text, "utf8");
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("base64");
}

function decrypt(encryptedText, privateKey) {
  const buffer = Buffer.from(encryptedText, "base64");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString("utf8");
}

const message = "Your team name here";
const encrypted = encrypt(message, publicKey);
const decrypted = decrypt(encrypted, privateKey);

console.log("Original:", message);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
