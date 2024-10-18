// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(window.scrollY > 0){
        nav.style.background = "black";
    }else{
        nav.style.backgroundColor = "rgba(0 , 0, 0, 0.6)";
    }
}
 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

// function validateForm() {
//     // Clear all previous errors
//     document.querySelectorAll('.error').forEach(e => e.innerHTML = '');
//     let isValid = true;
   
//     // Name validation (only letters and spaces)
//     const name = document.getElementById("logname").value;
//     if (!/^[a-zA-Z\s]+$/.test(name)) {
//         document.getElementById("nameError").innerHTML = "Name can only contain letters and spaces.<br>";
//         isValid = false;
//     }
//     // Email validation
//     const email = document.getElementById("logemail").value;
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//         document.getElementById("emailError").innerHTML =
//         "Invalid email format.<br>";
//         isValid = false;
//     }
//     // Password validation (8-20 characters, must contain letters and numbers)
//     const password = document.getElementById("logpass").value;
//     if (!/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,20}$/.test(password)) {
//         document.getElementById("passwordError").innerHTML =
//         "Password must be 8-20 characters long and include letters and numbers.<br>";
//         isValid = false;
//     }

//     return isValid;
// }

// // Get references to your forms
// const loginForm = document.getElementById('loginForm');
// const signupForm = document.getElementById('signupForm');

// // Add event listeners for form submission
// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission
//   // Perform login validation here
//   // ... (replace with your actual validation logic)
//   // If validation passes, redirect to home page
//   window.location.href = "index.html"; 
// });

// signupForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent default form submission
//   // Perform signup validation here
//   // ... (replace with your actual validation logic)
//   // If validation passes, redirect to home page
//   window.location.href = "index.html"; 
// });
