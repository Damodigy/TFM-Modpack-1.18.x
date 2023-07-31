settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Create Kube Js Script load succesful');

onEvent('recipes', event => {
    event.replaceInput('create:andesite_alloy', 'tfc:metal/ingot/wrought_iron');
    // Удаление рецептов Create
    event.remove({
        output: 'create:mechanical_arm',
        mod: 'create',
    });

    event.remove({
        output: 'create:rotation_speed_controller',
        mod: 'create',
    });

    event.remove({
        id:"create:crafting/kinetics/shaft"
    });

    event.remove({
        output:"create:andesite_scaffolding",
    });

    event.remove({
        output:"create:andesite_ladder",
    });

    event.remove({
        output:"create:andesite_bars",
    });

    event.remove({
        output: 'create:andesite_alloy',
        mod: 'create',
    });

    event.remove({
        output: 'railways:track_acacia',
    });

    // Рецепты Create

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

    event.custom({
        type: "tfc:anvil",
        input: {
            "tag": "forge:ingots/wrought_iron"
        },
        result: {
            item: "create:shaft",
            count: 4
        },
        tier: 2,
        rules: [
            "bend_last",
            "bend_last",
            "draw_second_last",
        ]
    });
});
