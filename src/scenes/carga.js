import Phaser from 'phaser'


// implementar el "Loading"
//corregir ubicacion de texto
//implementar audio y fx


export default class cargaScene extends Phaser.Scene
{
    fondocarga = "fondocarga1"

	constructor()
	{
		super('carga')
	}

    preload(){

        this.load.image('loading', 'assets/loadingg.png')
        this.load.image('botonescena', 'assets/texturas/botones/cambioescena.png')
        this.load.audio('backgroundcarga', 'assets/sonido/cinematic pelea3.mp3')
    }

    
    init(data)
    {
        if(data.fondo){
            this.fondocarga=data.fondo
            
        }
        
    }
    

    create()
    {
        let contexto =this
        this.add.image(400, 300, this.fondocarga)
        this.add.image(500, 300, 'loading').setScale(1)
        this.backgroundcarga = this.sound.add('backgroundcarga')
        this.backgroundcarga.play();
        const boton = this.add.image(350, 555, 'botonescena')

        this.add.text
        (553,560, "Optimizando...",{
            fontSize: "20px",
            fontStyle: "bold",
            color: "#F6F4D4"
        })
            
        this.tweens.add({
            targets: boton, 
            scale: 1.2,
            ease: "Linear",
            duration: 500,
            repeat: -1,
            yoyo: true
        })
        boton.setInteractive().on("pointerup", () => {
            this.backgroundcarga.stop()
            this.scene.start("selec personajes")
        },this)
        
    }
        
    
    
}
