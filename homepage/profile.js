function profile() {
  swal({
    content: "input",
    content: {
      element: "input",
      attributes: {
        placeholder: "Type your password",
        type: "password",
      },
    },
    buttons: {
      cancel: true,
      confirm: "Confirm",
      roll: {
        text: "Do a barrell roll!",
        value: "roll",
      },
    },
  }).then((value) => {
    // swal(`You typed: ${value}`);
    // return post(`http://localhost:3000/users/14/password${value}`);
    let newPassword = value;
    console.log(newPassword, "almost motherfucker");
    let users = JSON.parse(localStorage.user);
    console.log(users);
    if (users.length === 0) {
      let changedUser = users.filter(() => {});
    }
    // axios
    //   .post("http://localhost:3000/users", {
    //     // id: Math.round(Math.random() * 100),
    //     username: "brilli",
    //     password: newPassword,
    //   })
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });

  // swal({
  //     text: 'Search for a movie. e.g. "La La Land".',
  //     content: "input",
  //     text: 'Enter new password".',
  //     content: "input",
  //     button: {
  //       text: "Submit!",
  //       closeModal: false,
  //     },

  //   })
  //   .then(name => {
  //     if (!name) throw null;

  //     return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  //   })
  //   .then(results => {
  //     return results.json();
  //   })
  //   .then(json => {
  //     const movie = json.results[0];

  //     if (!movie) {
  //       return swal("No movie was found!");
  //     }

  //     const name = movie.trackName;
  //     const imageURL = movie.artworkUrl100;

  //     swal({
  //       title: "Top result:",
  //       text: name,
  //       icon: imageURL,
  //     });
  //   })
  //   .catch(err => {
  //     if (err) {
  //       swal("Oh noes!", "The AJAX request failed!", "error");
  //     } else {
  //       swal.stopLoading();
  //       swal.close();
  //     }
  //   });
}
