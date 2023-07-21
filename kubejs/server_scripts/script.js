// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Рецепты дробилки Create
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/kaolinite'
		}],
		results:[{
			item: 'tfc:powder/kaolinite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/graphite'
		}],
		results:[{
			item: 'tfc:powder/graphite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/sulfur'
		}],
		results:[{
			item: 'tfc:powder/sulfur',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/cinnabar'
		}],
		results:[{
			item: 'minecraft:redstone',
			count: 8,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/cryolite'
		}],
		results:[{
			item: 'minecraft:redstone',
			count: 8,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/saltpeter'
		}],
		results:[{
			item: 'tfc:powder/saltpeter',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/sylvite'
		}],
		results:[{
			item: 'tfc:powder/sylvite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/borax'
		}],
		results:[{
			item: 'tfc:powder/flux',
			count: 6,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/halite'
		}],
		results:[{
			item: 'tfc:powder/salt',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/amethyst'
		}],
		results:[{
			item: 'tfc:powder/amethyst',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/diamond'
		}],
		results:[{
			item: 'tfc:powder/diamond',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/emerald'
		}],
		results:[{
			item: 'tfc:powder/emerald',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/lapis_lazuli'
		}],
		results:[{
			item: 'tfc:powder/lapis_lazuli',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/opal'
		}],
		results:[{
			item: 'tfc:powder/opal',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/pyrite'
		}],
		results:[{
			item: 'tfc:powder/pyrite',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/ruby'
		}],
		results:[{
			item: 'tfc:powder/ruby',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/sapphire'
		}],
		results:[{
			item: 'tfc:powder/sapphire',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/topaz'
		}],
		results:[{
			item: 'tfc:powder/topaz',
			count: 4,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/poor_hematite'
		}],
		results:[{
			item: 'tfc:powder/hematite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/normal_hematite'
		}],
		results:[{
			item: 'tfc:powder/hematite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/rich_hematite'
		}],
		results:[{
			item: 'tfc:powder/hematite',
			count: 7,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/poor_malachite'
		}],
		results:[{
			item: 'tfc:powder/malachite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/normal_malachite'
		}],
		results:[{
			item: 'tfc:powder/malachite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/rich_malachite'
		}],
		results:[{
			item: 'tfc:powder/malachite',
			count: 7,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/poor_limonite'
		}],
		results:[{
			item: 'tfc:powder/limonite',
			count: 3,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/normal_limonite'
		}],
		results:[{
			item: 'tfc:powder/limonite',
			count: 5,
		}]
	});
	event.custom({
		type: 'create:crushing',
		ingredients:[{
			item: 'tfc:ore/rich_limonite'
		}],
		results:[{
			item: 'tfc:powder/limonite',
			count: 7,
		}]
	});
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})