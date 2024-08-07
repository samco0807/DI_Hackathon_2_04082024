const axios = require("axios");
const { response } = require("express");

// Make a request for a budget with a given ID
const displayAllBudgets = () => {
  const root = document.querySelector(".root");
  axios
    .get("http://localhost:3001/budget/budget")
    .then(function (budget) {
      const budget = response.data;
      budgets.forEach((budget) => {
        root.innerHTML = `
         <tr>
        <td><span class="math-inline"> ${budget.name}</td\>
        <td><span class="math-inline"> ${budget.amont}</td\>
        <td><span class="math-inline"> ${budget.category}</td\>
       
        `;
      });
    })
    .catch(function (error) {
      console.log("cannot retrive budget");
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  displayAllBudgets();
};
