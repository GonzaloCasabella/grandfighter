import Phaser from 'phaser'


// implementar textos
//implementar boton de reinicio
//implementar audio y fx


export default class creditosScene extends Phaser.Scene
{

	constructor()
	{
		super('creditos')
	}

    preload(){

        this.load.image('creditosmenu', 'assets//mapa/fondoregistro.png')
    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'creditosmenu' )
        

            

        
    }
        
    
    
}
