// Slider Javascript

var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

// Slider Javascript


// Accordions

//Start Accodion table generated by an apiy
// premier legue
function premier() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.premier);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  const gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: rowData1,
  };

  const gridDiv1 = document.querySelector("#myGrida");
  new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display");
  // console.log("name_to_display");
  nameToDisplay.innerHTML = document.getElementById("premierLeague").name;
}
// bundesliga accordion

function bundes() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.bundes);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid1");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  // const gridOptions1 = {
  //   columnDefs: columnDefs1,
  //   rowData: rowData1,
  // };

  // const gridDiv1 = document.querySelector("#myGridb");
  // new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container1");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display1");
  // console.log("name_to_display1");
  nameToDisplay.innerHTML = document.getElementById("bundesliga").name;
}
// function bundes() {
//   let container = document.getElementById("container1");
//   container.style.visibility === "hidden"
//     ? (container.style.visibility = "visible")
//     : (container.style.visibility = "hidden");
//   let nameToDisplay = document.getElementById("name_to_display");
//   nameToDisplay.innerHTML = document.getElementById("bundesliga").name;
// }

// Uefa accordion

function champions() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.champions);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid2");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  const gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: rowData1,
  };

  const gridDiv1 = document.querySelector("#myGridc");
  new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container2");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display2");
  // console.log("name_to_display2");
  nameToDisplay.innerHTML = document.getElementById("uefa").name;
}

// laliga accordion

function laliga() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.champions);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid3");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  const gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: rowData1,
  };

  const gridDiv1 = document.querySelector("#myGridd");
  new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container3");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display3");
  // console.log("name_to_display4");
  nameToDisplay.innerHTML = document.getElementById("uefa").name;
}
//LIGUE 1

function ligue1() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.champions);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid4");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  const gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: rowData1,
  };

  const gridDiv1 = document.querySelector("#myGride");
  new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container4");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display4");
  // console.log("name_to_display4");
  nameToDisplay.innerHTML = document.getElementById("uefa").name;
}

// SERIA A
function seriaA() {
  const columnDefs = [];
  const columnDefs1 = [];
  let rowData = [];
  const rowObj = {};
  let rowData1 = [];
  const rowObj1 = {};
  let obj = JSON.parse(localStorage.seria);
  let obj1 = JSON.parse(localStorage.matches);

  //  saving Api`s on sesion storage`

  const columnData = obj.standings[0].table[0];
  const columnData1 = obj1.matches[0];

  for (const [key, value] of Object.entries(columnData)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs.push(colObject);
  }
  let rowArray = obj.standings[0].table;
  for (let i of rowArray) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    i.team = i.team.name;
    rowData.push(i);
    // console.log(rowObj)
    // console.log(rowData);
  }
  for (const [key, value] of Object.entries(columnData1)) {
    let colObject = { field: key, sortable: true, filter: true };
    // key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})
    columnDefs1.unshift(colObject);
  }
  let rowArray1 = obj1.matches;
  for (let i of rowArray1) {
    // for (const [key, value] of Object.entries(i)) {
    //     key === 'team' ? Object.assign(rowObj, {[key]: value.name}) : Object.assign(rowObj, {[key]: value})

    // }
    for (const [key, value] of Object.entries(i)) {
    }
    i.awayTeam = i.awayTeam.name;
    i.competition = i.competition.name;
    i.homeTeam = i.homeTeam.name;
    i.odds = "not available";
    i.referees = "not available";
    i.score = i.score.winner === null ? "not available" : i.score.winner;
    i.season = i.season.currentMatchday;
    i.group = i.group === null ? "not available" : i.group;

    rowData1.unshift(i);
    // console.log(rowObj)
    // console.log(rowData);
  }

  // specify the data
  //   const rowData = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //   ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  const gridDiv = document.querySelector("#myGrid5");
  new agGrid.Grid(gridDiv, gridOptions);
  // End of Accodion table generated by an api

  const gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: rowData1,
  };

  const gridDiv1 = document.querySelector("#myGridf");
  new agGrid.Grid(gridDiv1, gridOptions1);

  let container = document.getElementById("container5");
  container.style.display === "none"
    ? (container.style.display = "block")
    : (container.style.display = "none");
  let nameToDisplay = document.getElementById("name_to_display5");
  // console.log("name_to_display5");
  nameToDisplay.innerHTML = document.getElementById("seria").name;
}

// Accordions

// Axios

const testing = async () => {


  const apiClient = axios.create({
    baseURL: "http://api.football-data.org/v2",
    credentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": "a869fc31948d475d8d05f85052ee535b",
    },
  });

  apiClient
    .get("/matches")
    .then((response) => {
      localStorage.setItem("matches", JSON.stringify(response.data));
      // console.log(response.data);
    })
    .catch((error) => {
      text.innerHTML = error;
    });
  apiClient.get("/competitions/2002/standings").then((response) => {
    localStorage.setItem("bundes", JSON.stringify(response.data));
    console.log(response.data);
  });
  apiClient.get("/competitions/2021/standings").then((response) => {
    localStorage.setItem("premier", JSON.stringify(response.data));
    // console.log(response.data);
  });
  apiClient.get("/competitions/2019/standings").then((response) => {
    localStorage.setItem("seria", JSON.stringify(response.data));
    // console.log(response.data);
  });

  


 
};