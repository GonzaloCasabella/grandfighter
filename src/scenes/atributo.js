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


export default class atributoScene extends Phaser.Scene
{
    jugadores_listos=0
    fondoingame = "menuingame"

	constructor()
	{
		super('atributo')
	}

    preload(){
        this.load.image('cuadropersonaje', 'assets/texturas/interfazc.png')
        this.load.image('botonitrcv', 'assets/texturas/botones/enter.png')
        this.load.image('botonmouse', 'assets/texturas/botones/mouseinzquierdo.png')
        this.load.image('botonmouse2', 'assets/texturas/botones/mousederecho.png')
        this.load.image('botonesp', 'assets/texturas/botones/esp.png')
        this.load.image('botonx', 'assets/texturas/botones/seleccionar.png')
        this.load.image('box', 'assets/texturas/boxname_personaje.png')
        this.load.image('box2', 'assets/texturas/boxname_personaje.png')
        this.load.image('versus', 'assets/texturas/vs.png')
        this.load.image('sello', 'assets/logoescenario.png')
        this.load.image('idn', 'assets/id1.png')
        this.load.image('idn2', 'assets/id2.png')
    }

    
    init(data)
    {
        if(data.fingame){
            this.fondoingame=data.fingame
            
        }
        
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300, this.fondoingame)
        this.add.image(400, 340, 'cuadropwesonaje').setScale(1)
        this.add.image(400, 600, 'botonitrcv').setScale(1)
        this.add.image(500, 600, 'botonmouse').setScale(1)
        this.add.image(530, 600, 'botonmouse2').setScale(1)
        this.add.image(300, 600, 'botonesp').setScale(1)
        this.add.image(240, 600, 'botonx').setScale(1)
        this.add.image(380, 432, 'box').setScale(1)
        this.add.image(380, 432, 'box2').setScale(1)
        this.add.image(400, 432, 'versus').setScale(1)
        this.add.image(400, 110, 'sello').setScale(1)
        this.add.image(200, 120, 'idn').setScale(1)
        this.add.image(653, 120, 'idn2').setScale(1)
    }
    
}
