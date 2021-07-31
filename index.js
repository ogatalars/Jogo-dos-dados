const game = {
    firstPlayer: {
      id: 0,
      number: null,
    },
    secondPlayer: {
      id: 1,
      number: null,
    },
    rollDices: function () {
      this.firstPlayer.number = generateRandomDiceNumber();
      this.secondPlayer.number = generateRandomDiceNumber();
    },
    renderDices: function () {
      const imgElements = document.querySelectorAll("img");
      imgElements[this.firstPlayer.id].setAttribute(
        "src",
        getDiceImage(this.firstPlayer.number)
      );
      imgElements[this.secondPlayer.id].setAttribute(
        "src",
        getDiceImage(this.secondPlayer.number)
      );
    },
    renderWinner: function () {
      const { number: p1num } = this.firstPlayer;
      const { number: p2num } = this.secondPlayer;
      const headerElement = document.querySelector("h1");
      if (p1num > p2num) {
        headerElement.innerHTML = "Jogador 1 ganhou!";
        return;
      }
      if (p1num < p2num) {
        headerElement.innerHTML = "Jogador 2 ganhou!";
        return;
      }
      headerElement.innerHTML = "Empate";
    },
  };
  function generateRandomDiceNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getDiceImage(number) {
    return `images/dice${number.toString()}.png`;
  }
  game.rollDices();
  game.renderDices();
  game.renderWinner();