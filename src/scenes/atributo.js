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
        this.load.image('confirmar', 'assets/texturas/botones/enter.png')
        this.load.image('botonmouseL', 'assets/texturas/botones/mouseinzquierdo.png')
        this.load.image('box_nombre', 'assets/texturas/boxname_personaje.png')
        this.load.image('box_nombre2', 'assets/texturas/boxname_personaje.png')
        this.load.image('vsinterfaz', 'assets/texturas/vs.png')
        this.load.image('sello2', 'assets/logoescenario.png')
        this.load.image('iden', 'assets/id1.png')
        this.load.image('iden2', 'assets/id2.png')
        this.load.image('Selec', 'assets/yexturas/botones/seleccionar.png')
    }

    
    init(data)
    {
        if(data.fingame){
            this.fondoingame=data.fondoingame
            
        }
        
    }


    create()
    {
        let contexto =this
        this.add.image(400, 300, this.fondoingame)
        this.add.image(400, 600, 'confirmar').setScale(1)
        this.add.image(500, 600, 'botonmouseL').setScale(1)
        this.add.image(380, 432, 'box_nombre').setScale(1)
        this.add.image(380, 432, 'box_nombre2').setScale(1)
        this.add.image(400, 432, 'vsinterfaz').setScale(1)
        this.add.image(400, 110, 'sello2').setScale(1)
        this.add.image(200, 120, 'iden').setScale(1)
        this.add.image(653, 120, 'iden2').setScale(1)
        this.add.image(200, 600, 'selec').setScale(1)

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
            this.scene.start("mapa",{fondo:"fondoingame"})   
        }
    }
    
} 
       
