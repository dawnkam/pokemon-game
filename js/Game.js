class Game {
  constructor() { }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();

    p1 = createSprite(width / 2 - 50, height - 100);
    p1.addImage("p1", p1Animation[0]);
    p1.scale = 0.07;

    p2 = createSprite(width / 2 + 100, height - 100);
    p2.addImage("p2", p1Animation[0]);
    p2.scale = 0.07;
    pokemons = [p1,p2]
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  play() {
  //  this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      //image(track, 0, -height * 5, width, height * 6);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        pokemons[index - 1].position.x = x;
        pokemons[index - 1].position.y = y;


        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);


          // Changing camera position in y direction
          camera.position.y = pokemons[index - 1].position.y;
        }
      }



      drawSprites();
    }
  }
}