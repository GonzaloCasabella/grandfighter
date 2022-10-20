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
    fondoingame = "infiernogame"

	constructor()
	{
		super('mapa')
	}

    preload(){
        
        this.load.image('botonjugar', 'assets/texturas/botones/enter.png')
        this.load.image('boxname', 'assets/texturas/boxname_personaje.png')
        this.load.image('boxname2', 'assets/texturas/boxname_personaje.png')
        this.load.image('vs', 'assets/texturas/vs.png')
        this.load.image('sellopelea', 'assets/logoescenario.png')
        this.load.image('user', 'assets/id1.png')
        this.load.image('user2', 'assets/id2.png')
    }

    init(data)
    {
        if(data.fingame){
            this.fondomapa=data.infiernogame
            
        }
        
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300, this.fondomapa)
        this.add.image(380, 432, 'boxname').setScale(1)
        this.add.image(380, 432, 'boxname2').setScale(1)
        this.add.image(400, 432, 'vs').setScale(1)
        this.add.image(400, 110, 'sellopelea').setScale(1)
        this.add.image(200, 120, 'user').setScale(1)
        this.add.image(653, 120, 'user2').setScale(1)
        this.add.image(400,600, 'botonjugar' ).setScale(1)

        this.add.text
        (400,440, "Habilidades", {
        fontzise: "50px"
        fontStyle: "bold"
        color: "#ffff00"
    
    })
    this.add.text
    (190,600, "Seleccionar", {
    fontzise: "50px"
    fontStyle: "bold"
    color: "#FDFCE8"

})
this.add.text
        (625,600, "Seleccionar", {
        fontzise: "20px"
        fontStyle: "bold"
        color: "#FDFCE8"
    
    })
    this.add.text
        (390,440, "Confirmar", {
        fontzise: "20px"
        fontStyle: "bold"
        color: "#FDFCE8" 
    
    })

    update()
    {
        if (this.jugadores_listos > 1) {
            this.scene.start("mapa",{fondo:"fondocarga1"})   
        }
    }
    
} 
       
