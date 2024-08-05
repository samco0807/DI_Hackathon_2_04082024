// // select the input values
const form = document.getElementById("newTransaction");
// const budgetName = document.getElementById("budgetName");
// const startDate = document.getElementById("startDate");
// const endDate = document.getElementById("endDate");
// const amount = document.getElementById("amount");
// const category = document.getElementById("category");
// const notes = document.getElementById("notes");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    description: description.value.trim(),
    category: category.value.trim(),
    amount: amount.value.trim(),
    date: date.value.trim(),
  };
  //   Send the value to the server
  axios
    .post("/submitData", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
