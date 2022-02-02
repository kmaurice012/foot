///////////////////////Login form validation
function validate() {
  // const users = [];
  // const uname = {};
  // const pword = {};
  let obj = JSON.parse(localStorage.user);
  // let idd = obj.id;
  obj.map(x => {
    // console.log(x.id);
    // console.log(x.username);
    let usename = x.username;
    // console.log(usename,"fuck this");
    let pasword = x.password;
    // console.log(usename,"fuck this");

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == usename && password == pasword) {
      window.location.href = "homepage/main.html";
     
    } 
    else{
      // alert("Wrong Credentials");
      // console.log("nope try ,again");
    }
  })

    //  console.log(obj,"obdddddd");
  // let usename = obj.username;
  // let pasword = obj.password;
  // console.log(idd,"id");
  // console.log(usename,"username");
  // console.log(pasword,"this is the fucking password");

  // let username = document.getElementById("username").value;
  // let password = document.getElementById("password").value;

  // if (username == usename && password == pasword) {
  //   window.location.href = "homepage/main.html";
  //   console.log("It fucking worked");
  // } else {
  //   console.log("Wrong credentials");
  // }

  // console.log(username);
  // console.log(password);
}

const test = async () => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    credentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "X-Auth-Token": "a869fc31948d475d8d05f85052ee535b",
    },
  });

  apiClient
    .get("/users")
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    })
    .catch((error) => {
      text.innerHTML = error;
    });
  // apiClient.get("users/1").then((response) => {
  //   sessionStorage.setItem("brilli", JSON.stringify(response.data));
  //   console.log(response.data);
  // });
};

