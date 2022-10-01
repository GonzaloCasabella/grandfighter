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
        
    }
  
}
