import Phaser from 'phaser'
import atributoScene from './scenes/atributo'
import cargaScene from './scenes/carga'
import gameScene from './scenes/game'

import HelloWorldScene from './scenes/mainmenu'
import mapaScene from './scenes/mapa'
import precargagameScene from './scenes/precargagame'
import registroScene from './scenes/registro'
import selecpersonajeScene from './scenes/selec personajes'
import selecidiomaScene from './scenes/selecidioma'
import creditosScene from './scenes/creditos'


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
	scene: [HelloWorldScene,registroScene, selecidiomaScene,cargaScene,selecpersonajeScene,creditosScene,atributoScene,mapaScene,precargagameScene,gameScene]
}

export default new Phaser.Game(config)

