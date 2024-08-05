// select the input values
const form = document.getElementById("newUserAccount");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const userName = document.getElementById("userName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    userName: userName.value.trim(),
  };
  //   Send the value to the server
  axios
    .post("/submitData", userData, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: firstName }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
