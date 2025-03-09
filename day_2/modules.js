const fs = require('fs');
const os = require('os');

let user = os.userInfo();
console.log(user);
console.log(user  .username);

fs.appendFile('greeting.txt', 'hi ' + user.username + '\n', ()=>{
    console.log('file created');
})