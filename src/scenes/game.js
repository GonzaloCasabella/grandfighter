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
        this.load.image('barranegra', 'assets/texturas/barra.png')
        this.load.image('logogame', 'assets/texturas/fight.png')
        this.load.image('conteo', 'assets/texturas/timer.png')
        this.load.image('contador', 'assets/texturas/contador.png')
        this.load.image('muerte', 'assets/texturas/x.png')
        this.load.image('powerup', 'assets/texturas/barra power.png')
        this.load.audio('soundgame', 'assets/sonido/cinematic combate1.mp3')
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,this.fondo)
        this.add.image(300, 100, 'barranegra').setScale(1)
        this.add.image(450, 100, 'barranegra').setScale(1)
        this.add.image(400, 100, 'logogame').setScale(0.6)
        this.add.image(400, 140, 'conteo').setScale(1)
        this.add.image(380, 100, 'contador').setScale(1)
        this.add.image(420, 100, 'contador').setScale(1)
        this.add.image(310, 130, 'powerup').setScale(1)
        this.add.image(460, 130, 'powerup').setScale(1)
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
       
