'use strict';

var prefix = [
	{
		"name": "# to maximum Mana",
		"tiers": [
			{
				"tier": "T13",
				"ilevel": "iLv1",
				"mod": "15 to 19",
				"name": "Beryl"
			},
			{
				"tier": "T12",
				"ilevel": "iLv11",
				"mod": "20 to 24",
				"name": "Cobalt"
			},
			{
				"tier": "T11",
				"ilevel": "iLv17",
				"mod": "25 to 29",
				"name": "Azure"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "27 to 32",
				"name": "Catarina 2"
			},
			{
				"tier": "T10",
				"ilevel": "iLv23",
				"mod": "30 to 34",
				"name": "Sapphire"
			},
			{
				"tier": "T9",
				"ilevel": "iLv29",
				"mod": "35 to 39",
				"name": "Cerulean"
			},
			{
				"tier": "T8",
				"ilevel": "iLv35",
				"mod": "40 to 44",
				"name": "Aqua"
			},
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "35 to 44",
				"name": "Catarina 7"
			},
			{
				"tier": "T7",
				"ilevel": "iLv42",
				"mod": "45 to 49",
				"name": "Opalescent"
			},
			{
				"tier": "T6",
				"ilevel": "iLv51",
				"mod": "50 to 54",
				"name": "Gentian"
			},
			{
				"tier": "T5",
				"ilevel": "iLv60",
				"mod": "55 to 59",
				"name": "Chalybeous"
			},
			{
				"tier": "T4",
				"ilevel": "iLv69",
				"mod": "60 to 64",
				"name": "Mazarine"
			},
			{
				"tier": "T3",
				"ilevel": "iLv75",
				"mod": "65 to 68",
				"name": "Blue"
			},
			{
				"tier": "T2",
				"ilevel": "iLv81",
				"mod": "69 to 73",
				"name": "Zaffre"
			}
		]
	},
	{
		"name": "#% increased Physical Damage, # to Accuracy Rating",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "15 to 19 / 3 to 7",
				"name": "Squire's"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "20 to 24 / 8 to 30",
				"name": "Journeyman's"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "25 to 34 / 31 to 50",
				"name": "Reaver's"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "35 to 44 / 51 to 64",
				"name": "Mercenary's"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "45 to 54 / 65 to 82",
				"name": "Champion's"
			},
			{
				"tier": "T3",
				"ilevel": "iLv60",
				"mod": "55 to 64 / 83 to 99",
				"name": "Conqueror's"
			},
			{
				"tier": "T2",
				"ilevel": "iLv73",
				"mod": "65 to 74 / 100 to 134",
				"name": "Emperor's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv83",
				"mod": "75 to 79 / 135 to 169",
				"name": "Dictator's"
			}
		]
	},
	{
		"name": "#% increased Physical Damage",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "40 to 49",
				"name": "Heavy"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "50 to 64",
				"name": "Serrated"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "40 to 59",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "65 to 84",
				"name": "Wicked"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "60 to 79",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "85 to 109",
				"name": "Vicious"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "110 to 134",
				"name": "Bloodthirsty"
			},
			{
				"tier": "T3",
				"ilevel": "iLv60",
				"mod": "135 to 154",
				"name": "Cruel"
			},
			{
				"tier": "T2",
				"ilevel": "iLv73",
				"mod": "155 to 169",
				"name": "Tyrannical"
			},
			{
				"tier": "T1",
				"ilevel": "iLv83",
				"mod": "170 to 179",
				"name": "Merciless"
			}
		]
	},
	{
		"name": "Adds # to Physical Damage, Adds # to Physical Damage",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv2",
				"mod": "1 / 2 to 3",
				"name": "Glinting"
			},
			{
				"tier": "T8",
				"ilevel": "iLv13",
				"mod": "4 to 5 / 8 to 9",
				"name": "Burnished"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "7 to 9 / 14 to 17",
				"name": "Vagan 2"
			},
			{
				"tier": "T7",
				"ilevel": "iLv21",
				"mod": "6 to 8 / 13 to 15",
				"name": "Polished"
			},
			{
				"tier": "T6",
				"ilevel": "iLv29",
				"mod": "7 to 11 / 16 to 19",
				"name": "Honed"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "11 to 14 / 18 to 22",
				"name": "Vagan 4"
			},
			{
				"tier": "T5",
				"ilevel": "iLv36",
				"mod": "9 to 13 / 20 to 24",
				"name": "Gleaming"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "13 to 17 / 26 to 30",
				"name": "Annealed"
			},
			{
				"tier": "T3",
				"ilevel": "iLv54",
				"mod": "14 to 19 / 29 to 35",
				"name": "Razor-sharp"
			},
			{
				"tier": "T2",
				"ilevel": "iLv65",
				"mod": "17 to 24 / 36 to 41",
				"name": "Tempered"
			},
			{
				"tier": "T1",
				"ilevel": "iLv77",
				"mod": "20 to 27 / 41 to 49",
				"name": "Flaring"
			}
		]
	},
	{
		"name": "Adds # to Fire Damage, Adds # to Fire Damage",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv1",
				"mod": "1 to 2 / 3 to 4",
				"name": "Heated"
			},
			{
				"tier": "T8",
				"ilevel": "iLv11",
				"mod": "8 to 10 / 15 to 18",
				"name": "Smouldering"
			},
			{
				"tier": "T7",
				"ilevel": "iLv18",
				"mod": "12 to 16 / 24 to 28",
				"name": "Smoking"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "10 to 13 / 20 to 23",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "17 to 22 / 33 to 39",
				"name": "Burning"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "15 to 19 / 29 to 34",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv33",
				"mod": "21 to 28 / 42 to 49",
				"name": "Flaming"
			},
			{
				"tier": "T4",
				"ilevel": "iLv42",
				"mod": "26 to 35 / 53 to 61",
				"name": "Scorching"
			},
			{
				"tier": "T3",
				"ilevel": "iLv51",
				"mod": "32 to 42 / 63 to 74",
				"name": "Incinerating"
			},
			{
				"tier": "T2",
				"ilevel": "iLv62",
				"mod": "38 to 51 / 77 to 89",
				"name": "Blasting"
			},
			{
				"tier": "T1",
				"ilevel": "iLv74",
				"mod": "45 to 61 / 91 to 106",
				"name": "Cremating"
			}
		]
	},
	{
		"name": "Adds # to Cold Damage, Adds # to Cold Damage",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv2",
				"mod": "1 to 2 / 3",
				"name": "Frosted"
			},
			{
				"tier": "T8",
				"ilevel": "iLv12",
				"mod": "6 to 8 / 13 to 15",
				"name": "Chilled"
			},
			{
				"tier": "T7",
				"ilevel": "iLv19",
				"mod": "10 to 13 / 19 to 23",
				"name": "Icy"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "8 to 11 / 16 to 19",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv27",
				"mod": "14 to 18 / 27 to 32",
				"name": "Frigid"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "12 to 16 / 23 to 28",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv34",
				"mod": "17 to 23 / 34 to 40",
				"name": "Freezing"
			},
			{
				"tier": "T4",
				"ilevel": "iLv43",
				"mod": "22 to 29 / 43 to 50",
				"name": "Frozen"
			},
			{
				"tier": "T3",
				"ilevel": "iLv52",
				"mod": "26 to 35 / 52 to 60",
				"name": "Glaciated"
			},
			{
				"tier": "T2",
				"ilevel": "iLv63",
				"mod": "31 to 42 / 63 to 73",
				"name": "Polar"
			},
			{
				"tier": "T1",
				"ilevel": "iLv75",
				"mod": "37 to 50 / 74 to 87",
				"name": "Entombing"
			}
		]
	},
	{
		"name": "Adds # to Lightning Damage, Adds # to Lightning Damage",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv3",
				"mod": "1 / 6",
				"name": "Humming"
			},
			{
				"tier": "T8",
				"ilevel": "iLv13",
				"mod": "1 to 2 / 27 to 28",
				"name": "Buzzing"
			},
			{
				"tier": "T7",
				"ilevel": "iLv19",
				"mod": "1 to 3 / 41 to 43",
				"name": "Snapping"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "1 to 3 / 34 to 36",
				"name": "Vagan 3"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "1 to 4 / 50 to 52",
				"name": "Vagan 5"
			},
			{
				"tier": "T6",
				"ilevel": "iLv31",
				"mod": "2 to 5 / 58 to 61",
				"name": "Crackling"
			},
			{
				"tier": "T5",
				"ilevel": "iLv34",
				"mod": "2 to 6 / 72 to 76",
				"name": "Sparking"
			},
			{
				"tier": "T4",
				"ilevel": "iLv42",
				"mod": "2 to 7 / 91 to 96",
				"name": "Arcing"
			},
			{
				"tier": "T3",
				"ilevel": "iLv51",
				"mod": "3 to 9 / 110 to 116",
				"name": "Shocking"
			},
			{
				"tier": "T2",
				"ilevel": "iLv63",
				"mod": "4 to 11 / 133 to 140",
				"name": "Discharging"
			},
			{
				"tier": "T1",
				"ilevel": "iLv74",
				"mod": "4 to 13 / 158 to 166",
				"name": "Electrocuting"
			}
		]
	},
	{
		"name": "#% increased Spell Damage",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv2",
				"mod": "10 to 19",
				"name": "Apprentice's"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "20 to 29",
				"name": "Adept's"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "25 to 34",
				"name": "Catarina 4"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "30 to 39",
				"name": "Scholar's"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "35 to 44",
				"name": "Catarina 6"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "40 to 49",
				"name": "Professor's"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "50 to 59",
				"name": "Occultist's"
			},
			{
				"tier": "T3",
				"ilevel": "iLv58",
				"mod": "60 to 69",
				"name": "Incanter's"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "70 to 74",
				"name": "Glyphic"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "75 to 79",
				"name": "Runic"
			}
		]
	},
	{
		"name": "#% increased Spell Damage, # to maximum Mana",
		"tiers": [
			{
				"tier": "T7",
				"ilevel": "iLv2",
				"mod": "5 to 9 / 8 to 10",
				"name": "Caster's"
			},
			{
				"tier": "T6",
				"ilevel": "iLv11",
				"mod": "10 to 14 / 11 to 13",
				"name": "Conjuror's"
			},
			{
				"tier": "T5",
				"ilevel": "iLv23",
				"mod": "15 to 19 / 14 to 16",
				"name": "Wizard's"
			},
			{
				"tier": "T4",
				"ilevel": "iLv35",
				"mod": "20 to 24 / 17 to 19",
				"name": "Warlock's"
			},
			{
				"tier": "T3",
				"ilevel": "iLv46",
				"mod": "25 to 29 / 20 to 22",
				"name": "Mage's"
			},
			{
				"tier": "T2",
				"ilevel": "iLv58",
				"mod": "30 to 34 / 23 to 25",
				"name": "Archmage's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv80",
				"mod": "35 to 39 / 26 to 28",
				"name": "Lich's"
			}
		]
	},
	{
		"name": "#% increased Fire Damage",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv2",
				"mod": "10 to 19",
				"name": "Searing"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "20 to 29",
				"name": "Sizzling"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "30 to 39",
				"name": "Blistering"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "40 to 49",
				"name": "Cauterising"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "50 to 59",
				"name": "Volcanic"
			},
			{
				"tier": "T3",
				"ilevel": "iLv58",
				"mod": "60 to 69",
				"name": "Magmatic"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "70 to 74",
				"name": "Pyroclastic"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "75 to 79",
				"name": "Xoph's"
			}
		]
	},
	{
		"name": "#% increased Cold Damage",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv2",
				"mod": "10 to 19",
				"name": "Bitter"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "20 to 29",
				"name": "Biting"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "30 to 39",
				"name": "Alpine"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "40 to 49",
				"name": "Snowy"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "50 to 59",
				"name": "Hailing"
			},
			{
				"tier": "T3",
				"ilevel": "iLv58",
				"mod": "60 to 69",
				"name": "Crystalline"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "70 to 74",
				"name": "Cryomancer's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "75 to 79",
				"name": "Tul's"
			}
		]
	},
	{
		"name": "#% increased Lightning Damage",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv2",
				"mod": "10 to 19",
				"name": "Charged"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "20 to 29",
				"name": "Hissing"
			},
			{
				"tier": "T6",
				"ilevel": "iLv23",
				"mod": "30 to 39",
				"name": "Bolting"
			},
			{
				"tier": "T5",
				"ilevel": "iLv35",
				"mod": "40 to 49",
				"name": "Coursing"
			},
			{
				"tier": "T4",
				"ilevel": "iLv46",
				"mod": "50 to 59",
				"name": "Striking"
			},
			{
				"tier": "T3",
				"ilevel": "iLv58",
				"mod": "60 to 69",
				"name": "Smiting"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "70 to 74",
				"name": "Ionising"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "75 to 79",
				"name": "Esh's"
			}
		]
	},
	{
		"name": "#% increased Elemental Damage with Attack Skills",
		"tiers": [
			{
				"tier": "T5",
				"ilevel": "iLv4",
				"mod": "5 to 10",
				"name": "Catalysing"
			},
			{
				"tier": "T4",
				"ilevel": "iLv15",
				"mod": "11 to 20",
				"name": "Infusing"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "8 to 22",
				"name": "Vagan 4"
			},
			{
				"tier": "T3",
				"ilevel": "iLv30",
				"mod": "21 to 30",
				"name": "Empowering"
			},
			{
				"tier": "T2",
				"ilevel": "iLv60",
				"mod": "31 to 37",
				"name": "Unleashed"
			},
			{
				"tier": "T1",
				"ilevel": "iLv81",
				"mod": "38 to 42",
				"name": "Overpowering"
			}
		]
	},
	{
		"name": "# to Level of Socketed Gems",
		"tiers": [
			{
				"tier": "T1",
				"ilevel": "iLv50",
				"mod": "1",
				"name": "Paragon's"
			}
		]
	},
	{
		"name": "# to Level of Socketed Fire Gems",
		"tiers": [
			{
				"tier": "T2",
				"ilevel": "iLv2",
				"mod": "1",
				"name": "Flame Spinner's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv55",
				"mod": "2",
				"name": "Lava Caller's"
			}
		]
	},
	{
		"name": "# to Level of Socketed Cold Gems",
		"tiers": [
			{
				"tier": "T2",
				"ilevel": "iLv2",
				"mod": "1",
				"name": "Frost Weaver's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv55",
				"mod": "2",
				"name": "Winterbringer's"
			}
		]
	},
	{
		"name": "# to Level of Socketed Lightning Gems",
		"tiers": [
			{
				"tier": "T2",
				"ilevel": "iLv2",
				"mod": "1",
				"name": "Thunder Lord's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv55",
				"mod": "2",
				"name": "Tempest King's"
			}
		]
	},
	{
		"name": "# to Level of Socketed Melee Gems",
		"tiers": [
			{
				"tier": "T2",
				"ilevel": "iLv8",
				"mod": "1",
				"name": "Combatant's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv63",
				"mod": "2",
				"name": "Weaponmaster's"
			}
		]
	},
	{
		"name": "#% of Physical Attack Damage Leeched as Life",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "0.2 to 0.4",
				"name": "Vagan 4"
			},
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "0.6 to 0.8",
				"name": "Vagan 6"
			},
			{
				"tier": "T3",
				"ilevel": "iLv50",
				"mod": "0.2 to 0.4",
				"name": "Remora's"
			},
			{
				"tier": "T2",
				"ilevel": "iLv60",
				"mod": "0.6 to 0.8",
				"name": "Lamprey's"
			},
			{
				"tier": "T1",
				"ilevel": "iLv70",
				"mod": "1 to 1.2",
				"name": "Vampire's"
			}
		]
	},
	{
		"name": "#% of Physical Attack Damage Leeched as Mana",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "0.2 to 0.4",
				"name": "Vagan 5"
			},
			{
				"tier": "T1",
				"ilevel": "iLv50",
				"mod": "0.2 to 0.4",
				"name": "Thirsty"
			}
		]
	},
	{
		"name": "Adds # to Fire Damage to Spells, Adds # to Fire Damage to Spells",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv1",
				"mod": "1 to 2 / 3 to 4",
				"name": "Heated"
			},
			{
				"tier": "T8",
				"ilevel": "iLv11",
				"mod": "6 to 8 / 12 to 14",
				"name": "Smouldering"
			},
			{
				"tier": "T7",
				"ilevel": "iLv18",
				"mod": "10 to 13 / 19 to 22",
				"name": "Smoking"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "8 to 11 / 16 to 18",
				"name": "Catarina 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "13 to 18 / 27 to 31",
				"name": "Burning"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "12 to 16 / 23 to 27",
				"name": "Catarina 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv33",
				"mod": "17 to 22 / 33 to 39",
				"name": "Flaming"
			},
			{
				"tier": "T4",
				"ilevel": "iLv42",
				"mod": "21 to 28 / 42 to 49",
				"name": "Scorching"
			},
			{
				"tier": "T3",
				"ilevel": "iLv51",
				"mod": "25 to 34 / 51 to 59",
				"name": "Incinerating"
			},
			{
				"tier": "T2",
				"ilevel": "iLv62",
				"mod": "31 to 41 / 61 to 71",
				"name": "Blasting"
			},
			{
				"tier": "T1",
				"ilevel": "iLv74",
				"mod": "36 to 49 / 73 to 85",
				"name": "Cremating"
			}
		]
	},
	{
		"name": "Adds # to Cold Damage to Spells, Adds # to Cold Damage to Spells",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv1",
				"mod": "1 / 2 to 3",
				"name": "Frosted"
			},
			{
				"tier": "T8",
				"ilevel": "iLv11",
				"mod": "5 to 7 / 10 to 12",
				"name": "Chilled"
			},
			{
				"tier": "T7",
				"ilevel": "iLv18",
				"mod": "8 to 10 / 16 to 18",
				"name": "Icy"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "7 to 9 / 13 to 15",
				"name": "Catarina 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "11 to 15 / 22 to 25",
				"name": "Frigid"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "10 to 13 / 19 to 22",
				"name": "Catarina 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv33",
				"mod": "14 to 18 / 27 to 32",
				"name": "Freezing"
			},
			{
				"tier": "T4",
				"ilevel": "iLv42",
				"mod": "17 to 23 / 34 to 40",
				"name": "Frozen"
			},
			{
				"tier": "T3",
				"ilevel": "iLv51",
				"mod": "21 to 28 / 41 to 48",
				"name": "Glaciated"
			},
			{
				"tier": "T2",
				"ilevel": "iLv62",
				"mod": "25 to 33 / 50 to 58",
				"name": "Polar"
			},
			{
				"tier": "T1",
				"ilevel": "iLv74",
				"mod": "30 to 40 / 60 to 69",
				"name": "Entombing"
			}
		]
	},
	{
		"name": "Adds # to Lightning Damage to Spells, Adds # to Lightning Damage to Spells",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv1",
				"mod": "1 / 4 to 5",
				"name": "Humming"
			},
			{
				"tier": "T8",
				"ilevel": "iLv11",
				"mod": "1 to 2 / 21 to 22",
				"name": "Buzzing"
			},
			{
				"tier": "T7",
				"ilevel": "iLv18",
				"mod": "1 to 3 / 33 to 35",
				"name": "Snapping"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "1 to 3 / 27 to 29",
				"name": "Catarina 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "1 to 4 / 46 to 49",
				"name": "Crackling"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "1 to 4 / 39 to 42",
				"name": "Catarina 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv33",
				"mod": "2 to 5 / 58 to 61",
				"name": "Sparking"
			},
			{
				"tier": "T4",
				"ilevel": "iLv42",
				"mod": "2 to 6 / 73 to 77",
				"name": "Arcing"
			},
			{
				"tier": "T3",
				"ilevel": "iLv51",
				"mod": "2 to 7 / 88 to 93",
				"name": "Shocking"
			},
			{
				"tier": "T2",
				"ilevel": "iLv62",
				"mod": "3 to 9 / 106 to 112",
				"name": "Discharging"
			},
			{
				"tier": "T1",
				"ilevel": "iLv74",
				"mod": "3 to 10 / 126 to 133",
				"name": "Electrocuting"
			}
		]
	},
	{
		"name": "Adds # to Chaos Damage, Adds # to Chaos Damage",
		"tiers": [
			{
				"tier": "T1",
				"ilevel": "iLv83",
				"mod": "47 to 72 / 98 to 123",
				"name": "Malicious"
			}
		]
	},
	{
		"name": "#% of Fire Damage Leeched as Life",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "0.2",
				"name": "Catarina 5"
			}
		]
	},
	{
		"name": "#% of Cold Damage Leeched as Life",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "0.2",
				"name": "Catarina 5"
			}
		]
	},
	{
		"name": "#% of Lightning Damage Leeched as Life",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "0.2",
				"name": "Catarina 5"
			}
		]
	},
	{
		"name": "#% increased Curse Duration",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv40",
				"mod": "30 to 50",
				"name": "Catarina 7"
			}
		]
	},
	{
		"name": "#% chance to Shock",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "6 to 10",
				"name": "Catarina 7"
			}
		]
	},
	{
		"name": "#% chance to Ignite",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "6 to 10",
				"name": "Catarina 7"
			}
		]
	},
	{
		"name": "#% chance to Freeze",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "6 to 10",
				"name": "Catarina 7"
			}
		]
	},
	{
		"name": "#% additional Block Chance while Dual Wielding",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv40",
				"mod": "2 to 5",
				"name": "Vagan 6"
			}
		]
	},
	{
		"name": "Socketed Gems are Supported by Level # Blood Magic",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv40",
				"mod": "1",
				"name": "Vagan 7"
			}
		]
	},
	{
		"name": "#% reduced Enemy Block Chance",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "10 to 15",
				"name": "Leo 2"
			}
		]
	},
	{
		"name": "#% increased Damage over Time",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "15 to 30",
				"name": "Leo 3"
			}
		]
	}
];

var suffix = [
	{
		"name": "# to Strength",
		"tiers": [
			{
				"tier": "T10",
				"ilevel": "iLv1",
				"mod": "8 to 12",
				"name": "of the Brute"
			},
			{
				"tier": "T9",
				"ilevel": "iLv11",
				"mod": "13 to 17",
				"name": "of the Wrestler"
			},
			{
				"tier": "master",
				"ilevel": "iLv15",
				"mod": "20 to 25",
				"name": "Vagan 2"
			},
			{
				"tier": "T8",
				"ilevel": "iLv22",
				"mod": "18 to 22",
				"name": "of the Bear"
			},
			{
				"tier": "master",
				"ilevel": "iLv25",
				"mod": "26 to 30",
				"name": "Vagan 4"
			},
			{
				"tier": "T7",
				"ilevel": "iLv33",
				"mod": "23 to 27",
				"name": "of the Lion"
			},
			{
				"tier": "T6",
				"ilevel": "iLv44",
				"mod": "28 to 32",
				"name": "of the Gorilla"
			},
			{
				"tier": "T5",
				"ilevel": "iLv55",
				"mod": "33 to 37",
				"name": "of the Goliath"
			},
			{
				"tier": "T4",
				"ilevel": "iLv66",
				"mod": "38 to 42",
				"name": "of the Leviathan"
			},
			{
				"tier": "T3",
				"ilevel": "iLv74",
				"mod": "43 to 50",
				"name": "of the Titan"
			},
			{
				"tier": "T2",
				"ilevel": "iLv82",
				"mod": "51 to 55",
				"name": "of the Gods"
			}
		]
	},
	{
		"name": "# to Intelligence",
		"tiers": [
			{
				"tier": "T10",
				"ilevel": "iLv1",
				"mod": "8 to 12",
				"name": "of the Pupil"
			},
			{
				"tier": "T9",
				"ilevel": "iLv11",
				"mod": "13 to 17",
				"name": "of the Student"
			},
			{
				"tier": "master",
				"ilevel": "iLv15",
				"mod": "20 to 25",
				"name": "Catarina 2"
			},
			{
				"tier": "T8",
				"ilevel": "iLv22",
				"mod": "18 to 22",
				"name": "of the Prodigy"
			},
			{
				"tier": "master",
				"ilevel": "iLv25",
				"mod": "26 to 30",
				"name": "Catarina 3"
			},
			{
				"tier": "T7",
				"ilevel": "iLv33",
				"mod": "23 to 27",
				"name": "of the Augur"
			},
			{
				"tier": "T6",
				"ilevel": "iLv44",
				"mod": "28 to 32",
				"name": "of the Philosopher"
			},
			{
				"tier": "T5",
				"ilevel": "iLv55",
				"mod": "33 to 37",
				"name": "of the Sage"
			},
			{
				"tier": "T4",
				"ilevel": "iLv66",
				"mod": "38 to 42",
				"name": "of the Savant"
			},
			{
				"tier": "T3",
				"ilevel": "iLv74",
				"mod": "43 to 50",
				"name": "of the Virtuoso"
			},
			{
				"tier": "T2",
				"ilevel": "iLv82",
				"mod": "51 to 55",
				"name": "of the Genius"
			}
		]
	},
	{
		"name": "#% increased Cast Speed",
		"tiers": [
			{
				"tier": "T7",
				"ilevel": "iLv2",
				"mod": "5 to 7",
				"name": "of Talent"
			},
			{
				"tier": "T6",
				"ilevel": "iLv15",
				"mod": "8 to 10",
				"name": "of Nimbleness"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "9 to 11",
				"name": "Catarina 3"
			},
			{
				"tier": "T5",
				"ilevel": "iLv30",
				"mod": "11 to 13",
				"name": "of Expertise"
			},
			{
				"tier": "T4",
				"ilevel": "iLv40",
				"mod": "14 to 16",
				"name": "of Legerdemain"
			},
			{
				"tier": "T3",
				"ilevel": "iLv55",
				"mod": "17 to 19",
				"name": "of Prestidigitation"
			},
			{
				"tier": "T2",
				"ilevel": "iLv72",
				"mod": "20 to 22",
				"name": "of Sortilege"
			},
			{
				"tier": "T1",
				"ilevel": "iLv83",
				"mod": "23 to 25",
				"name": "of Finesse"
			}
		]
	},
	{
		"name": "#% increased Attack Speed",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "5 to 7",
				"name": "of Skill"
			},
			{
				"tier": "T7",
				"ilevel": "iLv11",
				"mod": "8 to 10",
				"name": "of Ease"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "8 to 11",
				"name": "Vagan 4"
			},
			{
				"tier": "T6",
				"ilevel": "iLv22",
				"mod": "11 to 13",
				"name": "of Mastery"
			},
			{
				"tier": "T5",
				"ilevel": "iLv30",
				"mod": "14 to 16",
				"name": "of Renown"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "12 to 15",
				"name": "Vagan 6"
			},
			{
				"tier": "T4",
				"ilevel": "iLv37",
				"mod": "17 to 19",
				"name": "of Acclaim"
			},
			{
				"tier": "T3",
				"ilevel": "iLv45",
				"mod": "20 to 22",
				"name": "of Fame"
			},
			{
				"tier": "T2",
				"ilevel": "iLv60",
				"mod": "23 to 25",
				"name": "of Infamy"
			},
			{
				"tier": "T1",
				"ilevel": "iLv77",
				"mod": "26 to 27",
				"name": "of Celebration"
			}
		]
	},
	{
		"name": "#% increased Mana Regeneration Rate",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv2",
				"mod": "10 to 19",
				"name": "of Excitement"
			},
			{
				"tier": "T5",
				"ilevel": "iLv18",
				"mod": "20 to 29",
				"name": "of Joy"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "25 to 34",
				"name": "Catarina 2"
			},
			{
				"tier": "T4",
				"ilevel": "iLv29",
				"mod": "30 to 39",
				"name": "of Elation"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "35 to 44",
				"name": "Catarina 4"
			},
			{
				"tier": "T3",
				"ilevel": "iLv42",
				"mod": "40 to 49",
				"name": "of Bliss"
			},
			{
				"tier": "T2",
				"ilevel": "iLv55",
				"mod": "50 to 59",
				"name": "of Euphoria"
			},
			{
				"tier": "T1",
				"ilevel": "iLv79",
				"mod": "60 to 69",
				"name": "of Nirvana"
			}
		]
	},
	{
		"name": "#% reduced Enemy Stun Threshold",
		"tiers": [
			{
				"tier": "T5",
				"ilevel": "iLv5",
				"mod": "5 to 7",
				"name": "of the Pugilist"
			},
			{
				"tier": "T4",
				"ilevel": "iLv20",
				"mod": "8 to 9",
				"name": "of the Brawler"
			},
			{
				"tier": "T3",
				"ilevel": "iLv30",
				"mod": "10 to 11",
				"name": "of the Boxer"
			},
			{
				"tier": "T2",
				"ilevel": "iLv44",
				"mod": "12 to 13",
				"name": "of the Combatant"
			},
			{
				"tier": "T1",
				"ilevel": "iLv58",
				"mod": "14 to 15",
				"name": "of the Gladiator"
			}
		]
	},
	{
		"name": "#% to Fire Resistance",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "6 to 11",
				"name": "of the Whelpling"
			},
			{
				"tier": "T7",
				"ilevel": "iLv12",
				"mod": "12 to 17",
				"name": "of the Salamander"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "16 to 20",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv24",
				"mod": "18 to 23",
				"name": "of the Drake"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "21 to 25",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv36",
				"mod": "24 to 29",
				"name": "of the Kiln"
			},
			{
				"tier": "T4",
				"ilevel": "iLv48",
				"mod": "30 to 35",
				"name": "of the Furnace"
			},
			{
				"tier": "T3",
				"ilevel": "iLv60",
				"mod": "36 to 41",
				"name": "of the Volcano"
			},
			{
				"tier": "T2",
				"ilevel": "iLv72",
				"mod": "42 to 45",
				"name": "of the Magma"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "46 to 48",
				"name": "of Tzteosh"
			}
		]
	},
	{
		"name": "#% to Cold Resistance",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "6 to 11",
				"name": "of the Inuit"
			},
			{
				"tier": "T7",
				"ilevel": "iLv14",
				"mod": "12 to 17",
				"name": "of the Seal"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "16 to 20",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "18 to 23",
				"name": "of the Penguin"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "21 to 25",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv38",
				"mod": "24 to 29",
				"name": "of the Yeti"
			},
			{
				"tier": "T4",
				"ilevel": "iLv50",
				"mod": "30 to 35",
				"name": "of the Walrus"
			},
			{
				"tier": "T3",
				"ilevel": "iLv60",
				"mod": "36 to 41",
				"name": "of the Polar Bear"
			},
			{
				"tier": "T2",
				"ilevel": "iLv72",
				"mod": "42 to 45",
				"name": "of the Ice"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "46 to 48",
				"name": "of Haast"
			}
		]
	},
	{
		"name": "#% to Lightning Resistance",
		"tiers": [
			{
				"tier": "T8",
				"ilevel": "iLv1",
				"mod": "6 to 11",
				"name": "of the Cloud"
			},
			{
				"tier": "T7",
				"ilevel": "iLv13",
				"mod": "12 to 17",
				"name": "of the Squall"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "16 to 20",
				"name": "Vagan 3"
			},
			{
				"tier": "T6",
				"ilevel": "iLv25",
				"mod": "18 to 23",
				"name": "of the Storm"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "21 to 25",
				"name": "Vagan 5"
			},
			{
				"tier": "T5",
				"ilevel": "iLv37",
				"mod": "24 to 29",
				"name": "of the Thunderhead"
			},
			{
				"tier": "T4",
				"ilevel": "iLv49",
				"mod": "30 to 35",
				"name": "of the Tempest"
			},
			{
				"tier": "T3",
				"ilevel": "iLv60",
				"mod": "36 to 41",
				"name": "of the Maelstrom"
			},
			{
				"tier": "T2",
				"ilevel": "iLv72",
				"mod": "42 to 45",
				"name": "of the Lightning"
			},
			{
				"tier": "T1",
				"ilevel": "iLv84",
				"mod": "46 to 48",
				"name": "of Ephij"
			}
		]
	},
	{
		"name": "#% to Chaos Resistance",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv16",
				"mod": "5 to 10",
				"name": "of the Lost"
			},
			{
				"tier": "T5",
				"ilevel": "iLv30",
				"mod": "11 to 15",
				"name": "of Banishment"
			},
			{
				"tier": "T4",
				"ilevel": "iLv44",
				"mod": "16 to 20",
				"name": "of Eviction"
			},
			{
				"tier": "T3",
				"ilevel": "iLv56",
				"mod": "21 to 25",
				"name": "of Expulsion"
			},
			{
				"tier": "T2",
				"ilevel": "iLv65",
				"mod": "26 to 30",
				"name": "of Exile"
			},
			{
				"tier": "T1",
				"ilevel": "iLv81",
				"mod": "31 to 35",
				"name": "of Bameth"
			}
		]
	},
	{
		"name": "#% increased Stun Duration on Enemies",
		"tiers": [
			{
				"tier": "T5",
				"ilevel": "iLv5",
				"mod": "11 to 15",
				"name": "of Impact"
			},
			{
				"tier": "T4",
				"ilevel": "iLv18",
				"mod": "16 to 20",
				"name": "of Dazing"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "23 to 28",
				"name": "Vagan 6"
			},
			{
				"tier": "T3",
				"ilevel": "iLv30",
				"mod": "21 to 25",
				"name": "of Stunning"
			},
			{
				"tier": "T2",
				"ilevel": "iLv44",
				"mod": "26 to 30",
				"name": "of Slamming"
			},
			{
				"tier": "T1",
				"ilevel": "iLv58",
				"mod": "31 to 35",
				"name": "of Staggering"
			}
		]
	},
	{
		"name": "#% increased Critical Strike Chance for Spells",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv11",
				"mod": "10 to 19",
				"name": "of Menace"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "30 to 49",
				"name": "Catarina 4"
			},
			{
				"tier": "T5",
				"ilevel": "iLv21",
				"mod": "20 to 39",
				"name": "of Havoc"
			},
			{
				"tier": "T4",
				"ilevel": "iLv28",
				"mod": "40 to 59",
				"name": "of Disaster"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "50 to 69",
				"name": "Catarina 7"
			},
			{
				"tier": "T3",
				"ilevel": "iLv41",
				"mod": "60 to 79",
				"name": "of Calamity"
			},
			{
				"tier": "T2",
				"ilevel": "iLv59",
				"mod": "80 to 99",
				"name": "of Ruin"
			},
			{
				"tier": "T1",
				"ilevel": "iLv76",
				"mod": "100 to 109",
				"name": "of Unmaking"
			}
		]
	},
	{
		"name": "# Life gained for each Enemy hit by Attacks",
		"tiers": [
			{
				"tier": "T4",
				"ilevel": "iLv8",
				"mod": "2",
				"name": "of Rejuvenation"
			},
			{
				"tier": "T3",
				"ilevel": "iLv20",
				"mod": "3",
				"name": "of Restoration"
			},
			{
				"tier": "T2",
				"ilevel": "iLv30",
				"mod": "4",
				"name": "of Regrowth"
			},
			{
				"tier": "T1",
				"ilevel": "iLv40",
				"mod": "5",
				"name": "of Nourishment"
			}
		]
	},
	{
		"name": "#% increased Fire Damage",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv8",
				"mod": "3 to 7",
				"name": "of Embers"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "10 to 14",
				"name": "Catarina 3"
			},
			{
				"tier": "T5",
				"ilevel": "iLv22",
				"mod": "8 to 12",
				"name": "of Coals"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "15 to 19",
				"name": "Catarina 5"
			},
			{
				"tier": "T4",
				"ilevel": "iLv36",
				"mod": "13 to 17",
				"name": "of Cinders"
			},
			{
				"tier": "T3",
				"ilevel": "iLv50",
				"mod": "18 to 22",
				"name": "of Flames"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "23 to 26",
				"name": "of Immolation"
			},
			{
				"tier": "T1",
				"ilevel": "iLv76",
				"mod": "27 to 30",
				"name": "of Ashes"
			}
		]
	},
	{
		"name": "#% increased Cold Damage",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv12",
				"mod": "3 to 7",
				"name": "of Snow"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "10 to 14",
				"name": "Catarina 3"
			},
			{
				"tier": "T5",
				"ilevel": "iLv24",
				"mod": "8 to 12",
				"name": "of Sleet"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "15 to 19",
				"name": "Catarina 5"
			},
			{
				"tier": "T4",
				"ilevel": "iLv36",
				"mod": "13 to 17",
				"name": "of Ice"
			},
			{
				"tier": "T3",
				"ilevel": "iLv50",
				"mod": "18 to 22",
				"name": "of Rime"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "23 to 26",
				"name": "of Floe"
			},
			{
				"tier": "T1",
				"ilevel": "iLv76",
				"mod": "27 to 30",
				"name": "of Glaciation"
			}
		]
	},
	{
		"name": "#% increased Lightning Damage",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv10",
				"mod": "3 to 7",
				"name": "of Sparks"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "10 to 14",
				"name": "Catarina 3"
			},
			{
				"tier": "T5",
				"ilevel": "iLv23",
				"mod": "8 to 12",
				"name": "of Static"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "15 to 19",
				"name": "Catarina 5"
			},
			{
				"tier": "T4",
				"ilevel": "iLv36",
				"mod": "13 to 17",
				"name": "of Electricity"
			},
			{
				"tier": "T3",
				"ilevel": "iLv50",
				"mod": "18 to 22",
				"name": "of Voltage"
			},
			{
				"tier": "T2",
				"ilevel": "iLv64",
				"mod": "23 to 26",
				"name": "of Discharge"
			},
			{
				"tier": "T1",
				"ilevel": "iLv76",
				"mod": "27 to 30",
				"name": "of Arcing"
			}
		]
	},
	{
		"name": "# Life gained on Kill",
		"tiers": [
			{
				"tier": "T3",
				"ilevel": "iLv1",
				"mod": "3 to 6",
				"name": "of Success"
			},
			{
				"tier": "T2",
				"ilevel": "iLv23",
				"mod": "7 to 10",
				"name": "of Victory"
			},
			{
				"tier": "T1",
				"ilevel": "iLv40",
				"mod": "11 to 14",
				"name": "of Triumph"
			}
		]
	},
	{
		"name": "# Mana gained on Kill",
		"tiers": [
			{
				"tier": "T3",
				"ilevel": "iLv1",
				"mod": "1",
				"name": "of Absorption"
			},
			{
				"tier": "T2",
				"ilevel": "iLv24",
				"mod": "2 to 3",
				"name": "of Osmosis"
			},
			{
				"tier": "T1",
				"ilevel": "iLv40",
				"mod": "4 to 6",
				"name": "of Consumption"
			}
		]
	},
	{
		"name": "#% increased Critical Strike Chance",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv1",
				"mod": "10 to 14",
				"name": "of Needling"
			},
			{
				"tier": "T5",
				"ilevel": "iLv20",
				"mod": "15 to 19",
				"name": "of Stinging"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "17 to 21",
				"name": "Vagan 3"
			},
			{
				"tier": "T4",
				"ilevel": "iLv30",
				"mod": "20 to 24",
				"name": "of Piercing"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "22 to 27",
				"name": "Vagan 4"
			},
			{
				"tier": "T3",
				"ilevel": "iLv44",
				"mod": "25 to 29",
				"name": "of Puncturing"
			},
			{
				"tier": "T2",
				"ilevel": "iLv59",
				"mod": "30 to 34",
				"name": "of Penetrating"
			},
			{
				"tier": "T1",
				"ilevel": "iLv73",
				"mod": "35 to 38",
				"name": "of Incision"
			}
		]
	},
	{
		"name": "#% to Global Critical Strike Multiplier",
		"tiers": [
			{
				"tier": "T6",
				"ilevel": "iLv8",
				"mod": "10 to 14",
				"name": "of Ire"
			},
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "17 to 21",
				"name": "Vagan 3"
			},
			{
				"tier": "T5",
				"ilevel": "iLv21",
				"mod": "15 to 19",
				"name": "of Anger"
			},
			{
				"tier": "T4",
				"ilevel": "iLv30",
				"mod": "20 to 24",
				"name": "of Rage"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "22 to 27",
				"name": "Vagan 5"
			},
			{
				"tier": "T3",
				"ilevel": "iLv44",
				"mod": "25 to 29",
				"name": "of Fury"
			},
			{
				"tier": "T2",
				"ilevel": "iLv59",
				"mod": "30 to 34",
				"name": "of Ferocity"
			},
			{
				"tier": "T1",
				"ilevel": "iLv73",
				"mod": "35 to 38",
				"name": "of Destruction"
			}
		]
	},
	{
		"name": "# to Accuracy Rating",
		"tiers": [
			{
				"tier": "T9",
				"ilevel": "iLv1",
				"mod": "5 to 15",
				"name": "of Calm"
			},
			{
				"tier": "T8",
				"ilevel": "iLv12",
				"mod": "16 to 60",
				"name": "of Steadiness"
			},
			{
				"tier": "T7",
				"ilevel": "iLv20",
				"mod": "61 to 100",
				"name": "of Accuracy"
			},
			{
				"tier": "T6",
				"ilevel": "iLv26",
				"mod": "101 to 130",
				"name": "of Precision"
			},
			{
				"tier": "T5",
				"ilevel": "iLv33",
				"mod": "131 to 165",
				"name": "of the Sniper"
			},
			{
				"tier": "T4",
				"ilevel": "iLv41",
				"mod": "166 to 200",
				"name": "of the Marksman"
			},
			{
				"tier": "T3",
				"ilevel": "iLv50",
				"mod": "201 to 250",
				"name": "of the Deadeye"
			},
			{
				"tier": "T2",
				"ilevel": "iLv63",
				"mod": "251 to 320",
				"name": "of the Ranger"
			}
		]
	},
	{
		"name": "#% reduced Attribute Requirements",
		"tiers": [
			{
				"tier": "T2",
				"ilevel": "iLv36",
				"mod": "18",
				"name": "of the Worthy"
			},
			{
				"tier": "T1",
				"ilevel": "iLv60",
				"mod": "32",
				"name": "of the Apt"
			}
		]
	},
	{
		"name": "#% increased Light Radius, # to Accuracy Rating",
		"tiers": [
			{
				"tier": "T3",
				"ilevel": "iLv8",
				"mod": "5 / 10 to 20",
				"name": "of Shining"
			},
			{
				"tier": "T2",
				"ilevel": "iLv15",
				"mod": "10 / 21 to 40",
				"name": "of Light"
			},
			{
				"tier": "T1",
				"ilevel": "iLv30",
				"mod": "15 / 5 to 10",
				"name": "of Radiance"
			}
		]
	},
	{
		"name": "#% chance to Ignite",
		"tiers": [
			{
				"tier": "T1",
				"ilevel": "iLv15",
				"mod": "6 to 8",
				"name": "of Ignition"
			}
		]
	},
	{
		"name": "#% chance to Freeze",
		"tiers": [
			{
				"tier": "T1",
				"ilevel": "iLv15",
				"mod": "6 to 8",
				"name": "of Freezing"
			}
		]
	},
	{
		"name": "#% chance to Shock",
		"tiers": [
			{
				"tier": "T1",
				"ilevel": "iLv15",
				"mod": "6 to 8",
				"name": "of Shocking"
			}
		]
	},
	{
		"name": "#% increased Burning Damage",
		"tiers": [
			{
				"tier": "T3",
				"ilevel": "iLv20",
				"mod": "16 to 20",
				"name": "of Burning"
			},
			{
				"tier": "T2",
				"ilevel": "iLv40",
				"mod": "21 to 25",
				"name": "of Combusting"
			},
			{
				"tier": "T1",
				"ilevel": "iLv60",
				"mod": "26 to 30",
				"name": "of Conflagrating"
			}
		]
	},
	{
		"name": "# to Accuracy Rating",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "91 to 120",
				"name": "Vagan 2"
			},
			{
				"tier": "master",
				"ilevel": "iLv30",
				"mod": "121 to 150",
				"name": "Vagan 5"
			}
		]
	},
	{
		"name": "# Life gained for each Enemy hit by your Attacks",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "2 to 3",
				"name": "Vagan 5"
			}
		]
	},
	{
		"name": "#% reduced Enemy Stun Threshold with this Weapon",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv20",
				"mod": "11 to 12",
				"name": "Vagan 6"
			}
		]
	},
	{
		"name": "# to Weapon range",
		"tiers": [
			{
				"tier": "master",
				"ilevel": "iLv35",
				"mod": "1 to 2",
				"name": "Vagan 7"
			}
		]
	}
];

var generateMod = function(type) {
	var pool = (type === 'prefix') ? prefix : suffix;
	var mod = pool[Math.floor(Math.random() * pool.length)];
	var tier = mod.tiers[Math.floor(Math.random() * mod.tiers.length)];
	while(tier.tier === 'master'){
		var mod = pool[Math.floor(Math.random() * pool.length)];
		var tier = mod.tiers[Math.floor(Math.random() * mod.tiers.length)];
	}
	return {
		name: mod.name,
		mod: tier
	};
}