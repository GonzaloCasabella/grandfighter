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


export default class registroScene extends Phaser.Scene
{
    jugadores_listos=0

	constructor()
	{
		super('registro')
	}

	preload()
    {
       

        this.load.image('fondoregistro', 'assets/fondoregistro.png')
        this.load.image('pantalla', 'assets/pantalla.png')
        this.load.image('regboton', 'assets/texturas/botones/entertext1.png')
        this.load.image('regboton2', 'assets/texturas/botones/entertext2.png')
        this.load.image('avanzar', 'assets/avanzar.png')
        this.load.image('id1', 'assets/id1.png')
        this.load.image('id2', 'assets/id2.png')
        this.load.image('basura', 'assets/basura.png')
        this.load.image('basura2', 'assets/basura2.png')
    }

    create()
    {
        let contexto =this
        this.add.image(400, 300, 'fondoregistro')
        this.add.image(400, 300, 'pantalla').setScale(1.5)
        let boton1 = this.add.image(600, 250, 'regboton').setScale(1)
        boton1.setInteractive().on("pointerup", () => {
            boton1.disableInteractive()
            boton1.alpha =0.5
            this.jugadores_listos++
        },this)
        let boton2 = this.add.image(600, 340, 'regboton').setScale(1)
        boton2.setInteractive().on("pointerup", () => {
            boton2.disableInteractive()
            boton2.alpha =0.5
            this.jugadores_listos++
        },this)

        this.add.image(175, 255, 'id1').setScale(1)
        this.add.image(175, 345, 'id2').setScale(1)
        this.add.image(500, 250, 'basura').setScale(1)
        this.add.image(500, 340, 'basura2').setScale(1)
        this.add.image(400, 460, 'avanzar').setScale(1)

        this.add.text
        (240,120, "Registre usuarios", {
        fontSize: "30px",
        fontStyle: "bold",
        color: "#ffff00"})

        this.add.text
        (305,160, "(Min 2 jugadores)", {
        fontSize: "20px",
        fontStyle: "bold",
        color: "#ffff00"})
    
        this.add.text
        (200,230, "jugador5000", {
            fontSize:"40px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (200,320, "jugador5000", {
            fontSize:"40px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
    } 
    update()
    {
        if (this.jugadores_listos > 1) {
            this.scene.start("carga",{fondo:"fondocarga1"})   
        }
    }
}
