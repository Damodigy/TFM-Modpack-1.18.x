onEvent('recipes', event => {
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
		type: 'create:compacting',
		ingredients: [{
			fluid: 'tfc_metallum:metal/andesite_alloy',
			amount: 1000,
		}],
		results: [{
			item: 'create:andesite_alloy',
			count: 1,
		}],
		processingTime: 100,
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

});