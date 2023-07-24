// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('block.right_click', event => {

	//  event.player.tell(event.block.id)  Дебаг Инструмент

	if (event.block.id == 'tfc:clay_grass/silty_loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/silty_loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay_grass/silt' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/silt')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay_grass/loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay_grass/sandy_loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/sandy_loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}

	// Без травы

	if (event.block.id == 'tfc:clay/silty_loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/silty_loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay/silt' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/silt')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay/loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}
	if (event.block.id == 'tfc:clay/sandy_loam' && event.item.tags[0] == "tfc:shovels") {
		event.block.set('tfc:grass_path/sandy_loam')
		let count = Math.floor(Math.random() * 3 + 1)
		event.block.popItem(count + 'x clay_ball')
	}

})




onEvent('recipes', event => {
	// Удаление рецептов для Эр
	event.remove({
		output: 'immersiveengineering:treated_wood_horizontal',
		mod: 'immersiveengineering',
	});
	event.remove({
		output: 'create:mechanical_arm',
		mod: 'create',
	});
	event.remove({
		output: 'create:rotation_speed_controller',
		mod: 'create',
	});

	event.shaped('create:mechanical_arm', [
		'BBD',
		'B  ',
		'AS '
	], {
		D: 'create:brass_hand',
		B: 'create:brass_sheet',
		S: 'create:brass_casing',
		A: 'create:precision_mechanism'
	});
	event.shaped('create:rotation_speed_controller', [
		'BAB',
		'DSD',
		'BBB'
	], {
		D: 'createaddition:capacitor',
		B: 'create:brass_sheet',
		S: 'create:brass_casing',
		A: 'create:precision_mechanism'
	});

	event.remove({
		output: '#minecraft:beds',
		mod: 'minecraft',
	});

	event.remove({
		output: 'railways:track_acacia',
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

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "tfc:metal/ingot/wrought_iron"
		},
		transitionalItem: {
			item: "kubejs:uncompleted_pig_iron"
		},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					},
					[
						{
							item: "minecraft:charcoal"
						}
					]
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					},
					[
						{
							item: "tfc:powder/flux"
						}
					]
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				],
				results: [
					{
						item: "kubejs:uncompleted_pig_iron"
					}
				]
			}
		],
		results: [
			{
				item: "kubejs:uncompleted_pig_iron"
			}
		],
		loops: 1
	});

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "tfc:wood/planks/acacia_slab"
		},
		transitionalItem: {
			item: "railways:track_incomplete_acacia"
		},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "railways:track_incomplete_acacia"
					},
					[
						{
							tag: "railways:internal/nuggets/iron_nuggets"
						},
						{
							tag: "railways:internal/nuggets/zinc_nuggets"
						}
					]
				],
				results: [
					{
						item: "railways:track_incomplete_acacia"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "railways:track_incomplete_acacia"
					},
					[
						{
							tag: "railways:internal/nuggets/iron_nuggets"
						},
						{
							tag: "railways:internal/nuggets/zinc_nuggets"
						}
					]
				],
				results: [
					{
						item: "railways:track_incomplete_acacia"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "railways:track_incomplete_acacia"
					}
				],
				results: [
					{
						item: "railways:track_incomplete_acacia"
					}
				]
			}
		],
		results: [
			{
				item: "railways:track_acacia"
			}
		],
		loops: 1
	});
	// Рецепты молота Create

	event.custom({
		type: 'create:compacting',
		ingredients: [{
			item: 'kubejs:uncompleted_pig_iron',
			count: 1,
		}],
		results: [{
			item: 'tfc:metal/ingot/pig_iron',
			count: 1,
		}],
		processingTime: 100,
		heatRequirement: "superheated",
	});

	event.custom({
		type: 'create:pressing',
		ingredient: [{
			item: '#forge:ingots/wrought_iron',
		}],
		results: [{
			item: 'immersiveengineering:plate_iron',
		}]
	});

	event.custom({
		type: 'create:compacting',
		ingredients: [{
			item: 'tfc:wool_cloth',
			count: 1,
		}],
		results: [{
			item: 'minecraft:white_wool',
			count: 2,
		}],
		processingTime: 100,
	});


	event.custom({
		type: 'create:pressing',
		ingredients: [{
			item: 'tfc:metal/ingot/pig_iron'
		}],
		results: [{
			item: 'tfc:metal/ingot/high_carbon_steel'
		}],
		processingTime: 1,
	});


	event.custom({
		type: 'create:pressing',
		ingredients: [{
			item: 'tfc:metal/ingot/high_carbon_steel'
		}],
		results: [{
			item: 'tfc:metal/ingot/steel'
		}],
		processingTime: 1,
	});

	event.custom({
		type: 'create:compacting',
		ingredients: [{
			item: 'tfc:metal/ingot/weak_blue_steel'
		}, {
			item: 'tfc:metal/ingot/black_steel'
		}, {
			item: 'tfc:powder/flux'
		}],
		results: [{
			item: 'tfc:metal/ingot/high_carbon_blue_steel'
		}],
		processingTime: 1,
		heatRequirement: "superheated",
	});


	event.custom({
		type: 'create:pressing',
		ingredients: [{
			item: 'tfc:metal/ingot/high_carbon_blue_steel'
		}],
		results: [{
			item: 'tfc:metal/ingot/blue_steel'
		}],
		processingTime: 1,
	});

	event.custom({
		type: 'create:compacting',
		ingredients: [{
			item: 'tfc:metal/ingot/weak_red_steel'
		}, {
			item: 'tfc:metal/ingot/black_steel'
		}, {
			item: 'tfc:powder/flux'
		}],
		results: [{
			item: 'tfc:metal/ingot/high_carbon_red_steel'
		}],
		processingTime: 1,
		heatRequirement: "superheated",
	});


	event.custom({
		type: 'create:pressing',
		ingredients: [{
			item: 'tfc:metal/ingot/high_carbon_red_steel'
		}],
		results: [{
			item: 'tfc:metal/ingot/red_steel'
		}],
		processingTime: 1,
	});

	// Рецепты дробилки Create
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/kaolinite'
		}],
		results: [{
			item: 'tfc:powder/kaolinite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/graphite'
		}],
		results: [{
			item: 'tfc:powder/graphite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/sulfur'
		}],
		results: [{
			item: 'tfc:powder/sulfur',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/cinnabar'
		}],
		results: [{
			item: 'minecraft:redstone',
			count: 8,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/cryolite'
		}],
		results: [{
			item: 'minecraft:redstone',
			count: 8,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/saltpeter'
		}],
		results: [{
			item: 'tfc:powder/saltpeter',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/sylvite'
		}],
		results: [{
			item: 'tfc:powder/sylvite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/borax'
		}],
		results: [{
			item: 'tfc:powder/flux',
			count: 6,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/halite'
		}],
		results: [{
			item: 'tfc:powder/salt',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/amethyst'
		}],
		results: [{
			item: 'tfc:powder/amethyst',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/diamond'
		}],
		results: [{
			item: 'tfc:powder/diamond',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/emerald'
		}],
		results: [{
			item: 'tfc:powder/emerald',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/lapis_lazuli'
		}],
		results: [{
			item: 'tfc:powder/lapis_lazuli',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/opal'
		}],
		results: [{
			item: 'tfc:powder/opal',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/pyrite'
		}],
		results: [{
			item: 'tfc:powder/pyrite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/ruby'
		}],
		results: [{
			item: 'tfc:powder/ruby',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/sapphire'
		}],
		results: [{
			item: 'tfc:powder/sapphire',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/topaz'
		}],
		results: [{
			item: 'tfc:powder/topaz',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/small_hematite'
		}],
		results: [{
			item: 'tfc:powder/hematite',
			count: 2,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/poor_hematite'
		}],
		results: [{
			item: 'tfc:powder/hematite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/normal_hematite'
		}],
		results: [{
			item: 'tfc:powder/hematite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/rich_hematite'
		}],
		results: [{
			item: 'tfc:powder/hematite',
			count: 7,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/small_malachite'
		}],
		results: [{
			item: 'tfc:powder/malachite',
			count: 2,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/poor_malachite'
		}],
		results: [{
			item: 'tfc:powder/malachite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/normal_malachite'
		}],
		results: [{
			item: 'tfc:powder/malachite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/rich_malachite'
		}],
		results: [{
			item: 'tfc:powder/malachite',
			count: 7,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/small_limonite'
		}],
		results: [{
			item: 'tfc:powder/limonite',
			count: 2,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/poor_limonite'
		}],
		results: [{
			item: 'tfc:powder/limonite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/normal_limonite'
		}],
		results: [{
			item: 'tfc:powder/limonite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:ore/rich_limonite'
		}],
		results: [{
			item: 'tfc:powder/limonite',
			count: 7,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc_ie_addon:mineral/quartz_block'
		}],
		results: [{
			item: 'tfc_ie_addon:mineral/quartz_shard',
			count: 4,
		},
		{
			item: 'tfc:powder/sulfur',
			count: 1,
			chance: 0.2,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:rock/raw/limestone'
		}],
		results: [{
			item: 'tfc:ore/gypsum',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/olive'
		}],
		results: [{
			item: 'tfc:olive_paste',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/barley_grain'
		}],
		results: [{
			item: 'tfc:food/barley_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/rye_grain'
		}],
		results: [{
			item: 'tfc:food/rye_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/nixtamal'
		}],
		results: [{
			item: 'tfc:food/masa_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/rice_grain'
		}],
		results: [{
			item: 'tfc:food/rice_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/oat_grain'
		}],
		results: [{
			item: 'tfc:food/oat_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:food/maize_grain'
		}],
		results: [{
			item: 'tfc:food/maize_flour',
			count: 1,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'minecraft:charcoal'
		}],
		results: [{
			item: 'tfc:powder/charcoal',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients: [{
			item: 'tfc:fluxstone'
		}],
		results: [{
			item: 'tfc:powder/flux',
			count: 2,
		}]
	});


	event.custom({
		type: 'create:deploying',
		ingredients: [{
			item: 'tfc:food/barley_grain'
		}],
		results: [{
			item: 'tfc:food/barley_flour',
			count: 1,
		}]
	});
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