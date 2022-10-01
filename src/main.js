import Phaser from 'phaser'
import atributosScene from './scenes/atributos'
import cargaScene from './scenes/carga'

import HelloWorldScene from './scenes/mainmenu'
import registroScene from './scenes/registro'
import selecpersonajeScene from './scenes/selec personajes'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 800,
			height: 600,
		},
		max: {
			width: 1600,
			height: 1200,
		},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false,
		}
	},
	scene: [HelloWorldScene,registroScene,cargaScene,selecpersonajeScene,atributosScene]
}

export default new Phaser.Game(config)
