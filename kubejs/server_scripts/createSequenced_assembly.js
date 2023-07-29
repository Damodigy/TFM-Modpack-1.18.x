onEvent('recipes', event => {

    // Рецепты последовательный Create
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
});

