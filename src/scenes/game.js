import Phaser from 'phaser'


 // hacer todo


export default class gameScene extends Phaser.Scene
{

	constructor()
	{
		super('game')
	}
    init(data){
        this.fondo = data.fondo;
    }
    preload(){
        
        
        
        this.load.audio('pantallaoscura2', 'assets/sonido/sonido menu/transiccion.mp3')
        this.load.image('botonescena', 'assets/texturas/botones/cambioescena.png')
        this.load.audio('soundgame', 'assets/sonido/cinematic combate1.mp3')
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,this.fondo)
        const boton = this.add.image(550, 560, 'botonescena').setScale(0.4)
        this.soundgame = this.sound.add('soundgame')
        this.soundgame.play()

        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        .on("up", () => {
            this.soundgame.stop()
            this.scene.start("creditos")
        },this)
    
   
   
    }
    
} 
       
