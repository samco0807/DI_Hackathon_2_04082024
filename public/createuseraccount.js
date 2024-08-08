// select the form
const form = document.getElementById("newUserAccount");

// Send the value to the server
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();

  try {
    const response = await axios.post("http://localhost:3001/user/user", {
      firstName,
      lastName,
      email,
      username,
      phoneNumber,
    });
    if (response.status === 201) {
      console.log("User account created successfully!");
      form.reset(); // Clear the form or redirect to another page
    } else {
      console.log("Error creating user:", response.data);
      console.log("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
});
