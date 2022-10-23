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


export default class mapaScene extends Phaser.Scene
{

	constructor()
	{
		super('mapa')
	}

    preload(){
        
        
        this.load.image('fondomapa', 'assets/mapa/infiernogame.png')
        this.load.image('botonjugar', 'assets/texturas/botones/enter.png')
        this.load.image('boxname', 'assets/texturas/boxname_personaje.png')
        this.load.image('boxname2', 'assets/texturas/boxname_personaje.png')
        this.load.image('vs', 'assets/texturas/vs.png')
        this.load.image('sellopelea', 'assets/logo.png')
        this.load.image('user', 'assets/id1.png')
        this.load.image('user2', 'assets/id2.png')
        this.load.image('selec timer', 'assets/texturas/botones/boton_timer.png')
        this.load.image('map siguiente', 'assets/texturas/botones/derecha.png')
        this.load.image('map anterior', 'assets/texturas/botones/izquierda.png')
        this.load.image('box_timer', 'assets/texturas/boxtimer.png')

    }


    create()
    {
        let contexto =this
        this.add.image(400, 300,'fondomapa')
        this.add.image(300, 150, 'boxname').setScale(0.6)
        this.add.image(500, 150, 'boxname2').setScale(0.6)
        this.add.image(400, 145, 'vs').setScale(0.3)
        this.add.image(400, 35, 'sellopelea').setScale(0.3)
        this.add.image(66, 38, 'user').setScale(1)
        this.add.image(500, 38, 'user2').setScale(1)
            let buttonplay = this.add.image(450,560, 'botonjugar' ).setScale(1)
                    let buttonmap = this.add.image(500,210, 'map siguiente' ).setScale(1)
                        let buttonmap2 = this.add.image(300,210, 'map anterior' ).setScale(1)
                        let buttontime = this.add.image(650,210, 'selec timer' ).setScale(1)
                        


        this.add.text
        (371,200, "MAPA", {
        fontSize: "25px",
        fontStyle: "bold",
        color: "F8F52E"
    
    })
    this.add.text
        (555,203, "TIEMPO", {
        fontSize: "25px",
        fontStyle: "bold",
        color: "#F8F52E"
    
    })
    this.add.text
    (190,600, "Seleccionar", {
    fontSize: "50px",
    fontStyle: "bold",
    color: "#F8F52E"

})
this.add.text
        (625,600, "Seleccionar", {
        fontSize: "20px",
        fontStyle: "bold",
        color: "#FDFCE8"
    
    })
    this.add.text
        (390,440, "Confirmar", {
        fontSize: "20px",
        fontStyle: "bold",
        color: "#FDFCE8" 
        
    
    })}
   
   
 
    
} 
       
