settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Create Kube Js Script load succesful');

onEvent('recipes', event => {

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
        output: 'create:andesite_alloy',
        mod: 'create',
    });
    
    event.remove({
        output: 'railways:track_acacia',
    });

    // Рецепты Create

    event.shaped('create:andesite_alloy', [
        'DA ',
        'AD ',
        '   '
    ], {
        D: 'create:zinc_nugget',
        A: 'tfc:rock/raw/andesite'
    });
    event.shaped('create:andesite_alloy', [
        'DA ',
        'AD ',
        '   '
    ], {
        D: 'minecraft:iron_nugget',
        A: 'tfc:rock/raw/andesite'
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
});
