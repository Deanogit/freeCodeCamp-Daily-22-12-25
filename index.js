// Message Decoder
// Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

// A positive number means the message was shifted forward in the alphabet.
// A negative number means the message was shifted backward in the alphabet.
// Case matters, decoded characters should retain the case of their encoded counterparts.
// Non-alphabetical characters should not get decoded.

function decode(message, shift) {
  console.log(message, shift);
  // reference arr
  // const alpha = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  // console.log(alpha)
  let counter = 0;
  for (let i = 0; i < message.length; i++) {
    // console.log(i)
    const regex = /[a-zA-Z]/;
    if (regex.test(message[i])) {
      console.log(message[i].charCodeAt(0));
      counter = message[i].charCodeAt(0);
      // check for wrap
      // 97 -122
      if (counter >= 97 && counter <= 122) {
        counter = counter - shift;
        if (counter < 97) {
          counter = counter + 26;
        } else if (counter > 122) {
          counter = counter - 26;
        }
      } else if (counter >= 65 && counter <= 90) {
        counter = counter - shift;
        if (counter < 65) {
          counter = counter + 26;
        } else if (counter > 90) {
          counter = counter - 26;
        }
      }
      // counter = counter - shift;

      //} else {
      // counter = counter + shift;
      //}
    }
  }
  // return message;
  // shift each letter according to shift
}
