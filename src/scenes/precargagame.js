import Phaser from 'phaser'


 // precarga automatica aescena game.
// implementar audio y fx


export default class precargagameScene extends Phaser.Scene
{

	constructor()
	{
		super('precarga')
	}

    preload(){
        
        
        this.load.image('fondomapa', 'assets/mapa/pantallanegra.png')
        this.load.image('loadingprecarga', 'assets/loadingg.png')
        this.load.audio('pantallaoscura2', 'assets/sonido/sonido menu/transiccion.mp3')
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,'pantallanefra')
        this.add.image(560, 700, 'loadingg').setScale(0.6)
                        


        
   
   
    }
    
} 
       
