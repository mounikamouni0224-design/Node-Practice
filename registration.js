
function CheckForUser(){
    console.log(("Checking for user!"));
    return false;
}
function registerUser(){
    console.log("User registered successfully!")
}
module.exports= {
    CheckForUser : CheckForUser,
    registerUser : registerUser
};