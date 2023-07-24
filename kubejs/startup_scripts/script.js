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
})