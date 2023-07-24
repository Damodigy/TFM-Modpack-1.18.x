// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide('immersiveengineering:blastbrick')
	event.hide('immersiveengineering:cokebrick')
	event.hide('immersiveengineering:alloybrick')
	event.hide('immersiveengineering:blastbrick_reinforced')
	// event.hide('minecraft:cobblestone')
})

