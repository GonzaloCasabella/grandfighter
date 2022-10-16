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


export default class selecpersonajeScene extends Phaser.Scene
{
    ingame = "ingame1"
    jugadores_listos=0

	constructor()
	{
		super('selec personajes')
	}

	preload()
    {
        this.load.image('insignea', 'assets/logo.png')
        this.load.image('insignea', 'assets/logoescenario')
        this.load.image('idn1', 'assets/id1,png')
        this.load.image('idn2', 'assets/id2.png')
        this.load.image('versus', 'assets/texturas/vs.png')
        this.load.image('box_player1', 'assets//texturas/boxname_personaje.png')
        this.load.image('box_player2', 'assets/texturas/boxbane_personaje.png')
        this.load.image('cuadroselec', 'assets/yexturas/interfazc.png')
        this.load.image('mouseL', 'assets/yexturas/botones/mouseizquierdo.png')
        this.load.image('mouseR', 'assets/yexturas/botones/mousederecho.png')
        this.load.image('Enter', 'assets/yexturas/botones/enter.png')
        this.load.image('aleatorio', 'assets/yexturas/botones/esp.png')
        this.load.image('x', 'assets/yexturas/botones/seleccionar.png')
        
        
    }
    init(data)
    {
        if(data.fondo){
            this.ingame=data.fondo
            
        }
        
    }
    
    create()
    {
        let contexto =this
        this.add.image(400, 300, 'ingame1.png')
        this.add.image(400, 130, 'insignea').setScale(1)
        this.add.image(100, 140, 'idn1').setScale(1)
        this.add.image(640, 140, 'idn2').setScale(1)
        this.add.image(400, 320, 'versus').setScale(1)
        this.add.image(370, 320, 'box_player1').setScale(1)
        this.add.image(450, 320, 'box_player2').setScale(1)
        this.add.image(400, 340, 'cuadroselec').setScale(1)
            let boton3 = this.add.image(635, 600, 'mouseL').setScale(1)
                let boton4 = this.add.image(650, 600, 'mouseR').setScale(1)
                    let boton7 = this.add.image(400, 600, 'enter').setScale(1)
                        let boton5 = this.add.image(370, 600, 'aleatorio').setScale(1)
                            let boton6 = this.add.image(200, 600, 'x').setScale(1)
        this.add.text
        (130,140, "jugador3000", {
            fontSize:"30px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (190,600, "Seleccionar" , {
          fontSize: "20px",
          fontStyle: "bold",
          color: "",

        })
        this.add.text
        (625,600, "Seleccionar" , {
          fontSize: "20px",
          fontStyle: "bold",
          color: "",

        })
        this.add.text
        (370,600, "Azar" , {
          fontSize: "20px",
          fontStyle: "bold",
          color: "",

        })
        this.add.text
        (340,600, "Azar" , {
          fontSize: "20px",
          fontStyle: "bold",
          color: "",

        })
        this.add.text
        (650,140, "jugador5000", {
            fontSize:"40px",
            fontStyle: "bold",
            color: "#ffff00",
            
        })
        this.add.text
        (390,600, "Confirmar" , {
          fontSize: "20px",
          fontStyle: "bold",
          color: "",

        })
    }
        
    update()
    {
        if (this.jugadores_listos > 1) {
            this.scene.start("atributos",{fondo:"ingame1"})   
        }
      
}    