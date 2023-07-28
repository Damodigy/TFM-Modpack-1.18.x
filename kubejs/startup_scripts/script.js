// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry.armor_tiers', event => {
	event.add('straw', tier => {
	  tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
	  tier.slotProtections = [0,0,0,1]
	  tier.enchantmentValue = 9
	  tier.equipSound = 'minecraft:item.armor.equip_leather'
	  tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
	  tier.knockbackResistance = 0.0
	})
  })

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('uncompleted_pig_iron').displayName('Uncompleted Pig Iron').name('uc_pig_iron').maxStackSize(16)
	//  "size": "small",
	//  "weight": "light"
})

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('Straw_cap').type('helmet').displayName('Соломенная шляпа').name('straw_cap').tier('straw')

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('andesite_path').material('stone').hardness(1.0).displayName('Andesite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('basalt_path').material('stone').hardness(1.0).displayName('Basalt Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('chalk_path').material('stone').hardness(1.0).displayName('Chalk Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('chert_path').material('stone').hardness(1.0).displayName('Chert Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('claystone_path').material('stone').hardness(1.0).displayName('Claystone Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('conglomerate_path').material('stone').hardness(1.0).displayName('Conglomerate Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('dacite_path').material('stone').hardness(1.0).displayName('Dacite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('diorite_path').material('stone').hardness(1.0).displayName('Diorite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('dolomite_path').material('stone').hardness(1.0).displayName('Dolomite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('gabbro_path').material('stone').hardness(1.0).displayName('Gabbro Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('gneiss_path').material('stone').hardness(1.0).displayName('Gneiss Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('conglomerate_path').material('stone').hardness(1.0).displayName('Conglomerate Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('granite_path').material('stone').hardness(1.0).displayName('Granite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('limestone_path').material('stone').hardness(1.0).displayName('Limestone Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('marble_path').material('stone').hardness(1.0).displayName('Marble Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('phyllite_path').material('stone').hardness(1.0).displayName('Phyllite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('quartzite_path').material('stone').hardness(1.0).displayName('Quartzite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('rhyolite_path').material('stone').hardness(1.0).displayName('Rhyolite Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('schist_path').material('stone').hardness(1.0).displayName('Schist Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('shale_path').material('stone').hardness(1.0).displayName('Shale Path').type("falling");
})

onEvent('block.registry', event => {
	event.create('slate_path').material('stone').hardness(1.0).displayName('Slate Path').type("falling");
})



onEvent('block.modification', event => {
	event.modify('tfc:grass_path/loam', block => {
		block.speedFactor = 1.25
	})
	event.modify('tfc:grass_path/silt', block => {
		block.speedFactor = 1.25
	})
	event.modify('tfc:grass_path/silty_loam', block => {
		block.speedFactor = 1.25
	})
	event.modify('tfc:grass_path/sandy_loam', block => {
		block.speedFactor = 1.25
	})
	event.modify('kubejs:andesite_path', block => {
		block.speedFactor = 1.4
	})
})
