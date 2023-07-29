onEvent('block.right_click', event => {
    let flag_pickaxe = false;
    if (event.block.id == "tfc:rock/cobble/andesite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/andesite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:andesite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/basalt" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/basalt") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:basalt_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/chalk" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/chalk") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:chalk_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/chert" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/chert") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:chert_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/claystone" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/claystone") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:claystone_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/conglomerate" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/conglomerate") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:conglomerate_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/dacite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/dacite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:dacite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/diorite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/diorite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:diorite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/dolomite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/dolomite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:dolomite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/gabbro" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/gabbro") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:gabbro_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/gneiss" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/gneiss") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:gneiss_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/granite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/granite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:granite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/limestone" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/limestone") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:limestone_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/marble" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/marble") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:marble_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/phyllite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/phyllite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:phyllite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/quartzite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/quartzite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:quartzite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/rhyolite" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/rhyolite") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:rhyolite_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/schist" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/schist") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:schist_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/shale" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/shale") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:shale_path');
    } else {
        flag_pickaxe = false;
    }
    if (event.block.id == "tfc:rock/cobble/slate" && event.item.tags[2] == "forge:pickaxes") {
        flag_pickaxe = true;
    }
    if ((event.block.id == "tfc:rock/cobble/slate") && (flag_pickaxe = true) && (event.item.tags[4] == "forge:hammers")) {
        event.player.swing;
        event.block.set('kubejs:slate_path');
    } else {
        flag_pickaxe = false;
    }

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
