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


export default class cargaScene extends Phaser.Scene
{
    fondocarga = "fondocarga1"

	constructor()
	{
		super('carga')
	}

    preload(){
        this.load.image('cargdatos', 'assets/cargdatos.png')
        this.load.image('loading', 'assets/loadingg.png')
        this.load.image('botonescena', 'assets/texturas/botones/cambioescena.png')
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
        this.add.image(670, 550, 'cargdatos').setScale(1)
        this.add.image(500, 300, 'loading').setScale(1)
        const boton = this.add.image(400, 550, 'botonescena')
        
        this.tweens.add({
            targets: boton, 
            scale: 1.2,
            ease: "Linear",
            duration: 500,
            repeat: -1,
            yoyo: true
        })
        boton.setInteractive().on("pointerup", () => {
            this.scene.start("selec personajes")
        },this)
        
    }
        
    
    
}
