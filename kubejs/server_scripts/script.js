const MaterialJS = java("dev.latvian.mods.kubejs.block.MaterialJS")
const Material = java('net.minecraft.world.level.material.Material')
const SoundType = java('net.minecraft.world.level.block.SoundType')
// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

amethystMaterial = new MaterialJS('stone_path', Material.STONE, SoundType.STONE)
/*
onEvent('entity.attack', event => {
	  event.player.tell(event.entity.id) 
}); */

onEvent('block.right_click', event => {

	// 	Дебаг тул	    event.player.tell(event.block.id);
	// 	Дебаг тул		event.player.tell(event.item.tags[4]);	

})



onEvent('recipes', event => {

	// Удаление рецептов для Эр

	event.remove({
		output: 'minecraft:cauldron',
		mod: 'minecraft',
	});

	event.remove({
		output: 'minecraft:crossbow',
		mod: 'minecraft',
	});

	event.remove({
		output: 'minecraft:tripwire_hook',
		mod: 'minecraft',
	});

	event.remove({
		output: 'immersiveengineering:treated_wood_horizontal',
		mod: 'immersiveengineering',
	});

	event.remove({
		output: '#minecraft:beds',
		mod: 'minecraft',
	});


	// Рецепты последовательный Create

	/*event.custom({
		type: "tfc:rock_knapping",
		outside_slot_required: false,
		pattern: [
			"     ",
			"X   X",
			" XXX ",
			"     ",
			"     "
		],
		result: {
			item: "tfc:ceramic/bowl"
		},
		ingredient: {
			tag: "tfc:igneous_intrusive_rock"
		},
	}); 	Тест TFC интерграции
	*/

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
		// Add the stage
		event.player.stages.add('starting_items');
		// Give some items to player
		event.player.give('16x tfc:food/red_apple');
		event.player.tell(Text.red("Добро пожаловать в TerraFirmaMexa!"));
	}
})