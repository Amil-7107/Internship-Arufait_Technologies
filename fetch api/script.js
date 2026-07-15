function loadUsers(){

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(users => {

let output = "";

users.forEach(user => {

output += `

<div class="card">

<h2>${user.name}</h2>

<p><strong>Email:</strong> ${user.email}</p>

<p><strong>Phone:</strong> ${user.phone}</p>

<p><strong>Company:</strong> ${user.company.name}</p>

</div>

`;

});

document.getElementById("users").innerHTML = output;

})

.catch(error => {

document.getElementById("users").innerHTML =
"<h2>Unable to fetch data.</h2>";

console.log(error);

});

}