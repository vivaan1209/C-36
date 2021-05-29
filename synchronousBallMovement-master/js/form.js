class Form{
    constructor(){

    }
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game")
      title.position(525,0);

      var textBox = createInput("Name");
      textBox.position(525,160)
      var button = createButton("Play");
      button.position(550,200)
      var greeting = createElement('h3')

      button.mousePressed(function(){
          textBox.hide();
          button.hide();

          var name = textBox.value();
          playerCount += 1;
          player.update(name);
          player.updateCount(playerCount);

          greeting.html("Hello " + name);
          greeting.position(130,160)


      })

      

    }

}