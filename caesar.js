function caesarEncrypt(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= 'A' && char <= 'Z') {
      let position = char.charCodeAt(0) - 65;
      let newPosition = (position + shift) % 26;
      result += String.fromCharCode(newPosition + 65);
    } 
    else if (char >= 'a' && char <= 'z') {
      let position = char.charCodeAt(0) - 97;
      let newPosition = (position + shift) % 26;
      result += String.fromCharCode(newPosition + 97);
    } 
    else {
      result += char;
    }
  }

  return result;
}
function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}


console.log(caesarEncrypt("Hello World", 3));
console.log(caesarDecrypt("Khoor Zruog", 3));
// Output: "Khoorr Zruog"