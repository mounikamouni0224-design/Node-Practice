const registerUser = require('./registration')
const fs = require('fs')
const express = require('express')
function hello(){
    console.log("hey hi node!")
}
hello();


// registerUser.CheckForUser();
// registerUser.registerUser();
/*fs.writeFile('./samplemounikainit.txt',"Testing FS Module",(err) => {
    if(err)
    {
        console.log("Error Occured");
        return
    }
    console.log("File Created!")
})*/
const app = express();

//app.get()

app.listen(3000,()=>{
    console.log("Your server is running succesfully!")
})
