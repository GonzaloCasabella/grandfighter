import Phaser from 'phaser'


 // hacer todo


export default class gameScene extends Phaser.Scene
{

	constructor()
	{
		super('game')
	}

    preload(){
        
        
        this.load.image('fondomapa', 'assets/mapa/pantallanegra.png')
        this.load.audio('pantallaoscura2', 'assets/sonido/sonido menu/transiccion.mp3')
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,'pantallanefra')
        this.add.image(560, 700, 'loadingg').setScale(0.6)
                        


        
   
   
    }
    
} 
       
