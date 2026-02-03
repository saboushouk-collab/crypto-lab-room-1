function vigenereEncrypt(plaintext, keyword) {
  let result = "";
  let keyIndex = 0;

  plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
  keyword = keyword.toUpperCase();

  for (let i = 0; i < plaintext.length; i++) {
    let plainPos = plaintext.charCodeAt(i) - 65;
    let keyPos = keyword.charCodeAt(keyIndex % keyword.length) - 65;

    let cipherPos = (plainPos + keyPos) % 26;
    result += String.fromCharCode(cipherPos + 65);

    keyIndex++;
  }

  return result;
}

console.log(vigenereEncrypt("ATTACK", "LEMON"));
// Output: "LXFOPV"