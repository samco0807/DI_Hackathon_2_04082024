// select the input values
const form = document.getElementById("newUserAccount");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    userName: userName.value.trim(),
    password: password.value.trim(),
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

// FINAL CODE
const sendData = () => {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let userdata = {
    user,
    pass,
  };
  axios
    .post("http://localhost:3000/user", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("root").innerHTML = `${data.message}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getData = () => {
  axios
    .get("http://localhost:3000/show")
    .then((res) => res.json())
    .then((data) => {
      showUsers(data);
    });
};

const showUsers = (data) => {
  let root = document.getElementById("root");
  root.innerHTML = "";
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerText = item.username;
    root.appendChild(div);
  });
};

const findData = () => {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let userdata = {
    user,
    pass,
  };
  axios
    .post("http://localhost:3000/find", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("root").innerHTML = `${data.message}`;
    })
    .catch((err) => {
      console.log(err);
    });
};
