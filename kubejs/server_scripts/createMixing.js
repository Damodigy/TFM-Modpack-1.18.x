
onEvent('recipes', event => {
    // Рецепты миксера Create

    event.custom({
        type: 'create:mixing',
        ingredients: [{
            item: 'tfc:rock/cobble/andesite',
            count: 1,
        }, {
            item: 'minecraft:iron_nugget',
            count: 1,
        }],
        results: [{
            fluid: 'tfc_metallum:metal/andesite_alloy',
            amount: 600
        }],
        processingTime: 100,
        heatRequirement: "superheated",
    });


    event.custom({
        type: 'create:mixing',
        ingredients: [{
            item: 'tfc:rock/cobble/andesite',
            count: 1,
        }, {
            item: 'create:zinc_nugget',
            count: 1,
        }],
        results: [{
            fluid: 'tfc_metallum:metal/andesite_alloy',
            amount: 600
        }],
        processingTime: 100,
        heatRequirement: "superheated",
    });

    event.custom({
        type: 'create:mixing',
        ingredients: [{
            item: 'tfc:rock/cobble/andesite',
            count: 1,
        }, {
            fluid: 'tfc:metal/wrought_iron',
            amount: 10,
        }],
        results: [{
            fluid: 'tfc_metallum:metal/andesite_alloy',
            amount: 600
        }],
        processingTime: 100,
        heatRequirement: "superheated",
    });

    event.custom({
        type: 'create:mixing',
        ingredients: [{
            item: 'tfc:rock/cobble/andesite',
            count: 1,
        }, {
            fluid: 'tfc:metal/zinc',
            amount: 10,
        }],
        results: [{
            fluid: 'tfc_metallum:metal/andesite_alloy',
            amount: 600
        }],
        processingTime: 100,
        heatRequirement: "superheated",
    });
});