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
        this.load.audio('soundcreditos', 'assets/sonido/sonido menu/finish.mp3')
    }

        

    

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'creditosmenu' )
        this.soundcreditos = this.sound.add('soundcreditos') 
        

            

        
    }
        
    
    
}
