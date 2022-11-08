import Phaser from 'phaser'


// implementar audio y fx


export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
       

        this.load.image('fondo', 'assets/principal.png')
        this.load.image('logo', 'assets/logo.png')
        this.load.image('boton', 'assets/texturas/botones/start_boton.png')
        this.load.image("fondocarga1", "assets/menucarga.png")
        this.load.audio("soundtrack", "assets/sonido/sonido menu/soundtrack.mp3")
        this.load.audio("soundbutton", "assets/sonido/sonido menu/soundbutton.mp3")
    }

    create()
    {
        this.add.image(400, 300, 'fondo')
        this.backgroundMusic = this.sound.add('soundtrack')
        this.backgroundMusic.play();
        this.soundbutton = this.sound.add('soundbutton')

        const logo = this.add.image(400, 300, 'logo')
        const boton = this.add.image(400, 500, 'boton')
    
        
        this.tweens.add({
            targets: boton, 
            scale: 1.2,
            ease: "Linear",
            duration: 500,
            repeat: -1,
            yoyo: true
        })
        boton.setInteractive().on("pointerup", () => {
            this.soundbutton.play()
            this.backgroundMusic.stop()
            this.scene.start("idioma")
        },this)
        
    }
}
