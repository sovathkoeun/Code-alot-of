//localStorage
localStorage.setItem("name","sovath");
localStorage.setItem("Password","123456PNC");
localStorage.setItem('email','sovath.2020@gmail.com');
//localStorage.removeItem('email');
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('Password'))
console.log(localStorage.length);

//session storage
sessionStorage.setItem('username','admin');
sessionStorage.setItem('password','123pnc');
console.log(sessionStorage.getItem('username'))
console.log(sessionStorage.getItem('password'))

//cookie storage
document.cookie = "username=romdule;expires=" + new Date(2020,0,1).toString();