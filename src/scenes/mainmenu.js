import Phaser from 'phaser'


// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
//import { sharedInstance as events } from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)


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
