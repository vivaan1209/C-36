class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })

        
    }

    updateGameState(state){
        database.ref('/').update({
            gameState : state
        })
    }

    startGame(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display()
        }
    }

}