function caesarsCipherEncrypt(str, key = '.') {
  let encodedStr = '';
  key = String(key).charCodeAt(0);
  str.split('').forEach((char) => {
    encodedStr += String.fromCharCode((char.charCodeAt(0) + key + 65536 / 2) % 65536);
    // charCodeAt returns the UTF-16 code unit (integer betw 0 and 65535) of character @ given index
  });
  return encodedStr;
}

function caesarsCipherDecrypt(encodedStr, key = '.') {
  let decodedStr = '';
  key = String(key).charCodeAt(0);
  encodedStr.split('').forEach((char) => {
    decodedStr += String.fromCharCode(char.charCodeAt(0) - (key + 65536 / 2));
    // charCodeAt returns the UTF-16 code unit (integer betw 0 and 65535) of character @ given index
  });
  return decodedStr;
}

export { caesarsCipherDecrypt, caesarsCipherEncrypt };