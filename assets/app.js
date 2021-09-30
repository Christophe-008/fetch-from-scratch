document.querySelector("#bt").addEventListener("click", () => {
  fetch("game.php")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   data.forEach((element) => {
      //     console.log(element);
      //   });
      game(data[0]);
    })
    .catch((err) => console.log(err));
});

function game(arg) {
  document.querySelector("#data").textContent = arg.name;
}
