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
        
    }

    create()
    {
        this.add.image(400, 300, 'fondo')

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
            this.scene.start("registro")
        },this)
        
    }
}
