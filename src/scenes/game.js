import Phaser from 'phaser'


// implementar el "Loading"
//implementar audio y fx


export default class gameScene extends Phaser.Scene
{

	constructor()
	{
		super('game')
	}

    preload(){

        this.load.image('mapagame', 'assets//mapa/patiotemplogame.png')
    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'mapagame' )
        

            

        
    }
        
    
    
}
