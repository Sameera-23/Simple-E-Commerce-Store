async function register(){
const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const message=document.getElementById("message");

if(!username||!email||!password){
message.innerText="Please fill all fields";
return;
}

try{
const response=await fetch("http://localhost:5000/api/auth/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
email,
password
})
});

const data=await response.json();

if(data.success){
message.innerText="Registration Successful";
showLogin();
}else{
message.innerText=data.message||"Registration Failed";
}
}catch(error){
console.error(error);
message.innerText="Server Error";
}
}

async function login(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const message=document.getElementById("message");

try{
const response=await fetch("http://localhost:5000/api/auth/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
});

const data=await response.json();

if(data.token){
localStorage.setItem("token",data.token);
localStorage.setItem("username",data.username);
window.location.href="products.html";
}else{
message.innerText=data.message||"Login Failed";
}
}catch(error){
console.error(error);
message.innerText="Server Error";
}
}

function showLogin(){
document.getElementById("title").innerText="Login";
document.getElementById("username").style.display="none";
document.getElementById("submitBtn").innerText="Login";
document.getElementById("submitBtn").onclick=login;
document.getElementById("toggleText").innerHTML='New User? <a href="#" onclick="showRegister()">Register</a>';
document.getElementById("message").innerText="";
}

function showRegister(){
document.getElementById("title").innerText="Register";
document.getElementById("username").style.display="block";
document.getElementById("submitBtn").innerText="Register";
document.getElementById("submitBtn").onclick=register;
document.getElementById("toggleText").innerHTML='Already have an account? <a href="#" onclick="showLogin()">Login</a>';
document.getElementById("message").innerText="";
}

function togglePassword(){
const password=document.getElementById("password");
password.type=password.type==="password"?"text":"password";
}
