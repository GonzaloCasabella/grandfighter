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
        this.load.image('circuloN', 'assets/texturas/circulonegro.png')
        this.load.audio('soundgame', 'assets/sonido/cinematic combate1.mp3')
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,this.fondo)
        this.add.image(190, 75, 'barranegra').setScale(1)
        this.add.image(585, 75, 'barranegra').setScale(1)
        this.add.image(400, 40, 'conteo').setScale(1)
        this.add.image(380, 75, 'contador').setScale(1)
        this.add.image(420, 75, 'contador').setScale(1)
        this.add.image(125, 95, 'powerup').setScale(1)
        this.add.image(645, 95, 'powerup').setScale(1)
        this.add.image(90, 550, 'circuloN').setScale(0.7)
        this.add.image(90, 550, 'hl1').setScale(0.5)
        this.add.image(675, 550, 'circuloN').setScale(0.7)

        const boton = this.add.image(550, 560, 'botonescena').setScale(0.4)
        this.soundgame = this.sound.add('soundgame')
        this.soundgame.play()

        setTimeout(() => {
            this.soundgame.stop()
            this.scene.start("creditos",this.data)
        }, 180000);
    
        
        
    }
    
} 
       
