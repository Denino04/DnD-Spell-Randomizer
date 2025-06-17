const spells = [
    {
        "Spell Name":"Acid Splash",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Fire Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Guidance",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Magic Stone",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Ray of Frost",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Resistance",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Shocking Grasp",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Spare the Dying",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Thorn Whip",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Alarm",
        "School":"Abjuration",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"8 Hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Arcane Weapon (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Catapult",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Disguise Self",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Expeditious Retreat",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Faerie Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"False Life",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Feather Fall",
        "School":"Transmutation",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Grease",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Identify",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Jump",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Longstrider",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Purify Food and Drink",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Sanctuary",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Snare",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Tasha's Caustic Brew",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Aid",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Air Bubble",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"24 hours",
        "Components":"S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Alter Self",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Arcane Lock",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Blur",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Continual Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Darkvision",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Enlarge\/Reduce",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Heat Metal",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Kinetic Jaunt",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Levitate",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Magic Mouth",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Magic Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Protection from Poison",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Pyrotechnics",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Rope Trick",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"See Invisibility",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Skywrite",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Sight",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Spider Climb",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Vortex Warp",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Web",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Ashardalon's Stride",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V,S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Blink",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Catnap",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"10 minutes",
        "Components":"S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Create Food and Water",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Elemental Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Flame Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Flame Stride (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Fly",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Glyph of Warding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Haste",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"House of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Revivify",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Tiny Servant",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Water Breathing",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Water Walk",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Arcane Eye",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Elemental Bane",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Fabricate",
        "School":"Transmutation",
        "Casting Time":"10 Minutes",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Freedom of Movement",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Leomund's Secret Chest",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Mordenkainen's Faithful Hound",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Mordenkainen's Private Sanctum",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"120 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Otiluke's Resilient Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Stone Shape",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Summon Construct",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Animate Objects",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Bigby's Hand",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Create Spelljamming Helm",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V,S,M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Creation",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Greater Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Skill Empowerment",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Transmute Rock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Wall of Stone",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Artificer"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Vicious Mockery",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Bard"
    },
    {
        "Spell Name":"Animal Friendship",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Bane",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Color Spray",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Command",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Comprehend Languages",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Disguise Self",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dissonant Whispers",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Distort Value",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Earth Tremor",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Faerie Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Feather Fall",
        "School":"Transmutation",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Guiding Hand (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"5 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Healing Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Heroism",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Identify",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Illusory Script",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Longstrider",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Puppet (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Sense Emotion (UA)",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Silent Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Silvery Barbs",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Sleep",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Speak with Animals",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Sudden Awakening (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Tasha's Hideous Laughter",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Thunderwave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cube)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Unearthly Chorus (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Unseen Servant",
        "School":"Conjuration",
        "Casting Time":"1 Action R",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Bard"
    },
    {
        "Spell Name":"Aid",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Animal Messenger",
        "School":"Enchantment",
        "Casting Time":"1 Action R",
        "Range":"30 Feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Blindness\/Deafness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Borrowed Knowledge",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Calm Emotions",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Cloud of Daggers",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Crown of Madness",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Detect Thoughts",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Enlarge\/Reduce",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Enthrall",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Gift of Gab",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Heat Metal",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Kinetic Jaunt",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Knock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Locate Animals or Plants",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Magic Mouth",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mirror Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Nathair's Mischief",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Nathair's Mischief (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Phantasmal Force",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Pyrotechnics",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"See Invisibility",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Shatter",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Silence",
        "School":"Illusion",
        "Casting Time":"1 Action R",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Skywrite",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Sight",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Spray Of Cards",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Spray of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"15-foot cone",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, M",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Warding Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Zone of Truth",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Bard"
    },
    {
        "Spell Name":"Antagonize",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Antagonize (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Bestow Curse",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Catnap",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"10 minutes",
        "Components":"S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Clairvoyance",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"1 mile",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Enemies Abound",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Fast Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Fear",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Feign Death",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Glyph of Warding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"House of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Hypnotic Pattern",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Leomund's Tiny Hut",
        "School":"Evocation",
        "Casting Time":"1 Minute R",
        "Range":"Self (10-foot radius hemisphere)",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Major Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mass Healing Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Motivational Speech",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Nondetection",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Plant Growth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Sending",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Unlimited",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Slow",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Speak with Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Speak with Plants",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Stinking Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Tongues",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":3,
        "Class":"Bard"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Compulsion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Confusion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dimension Door",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Ego Whip (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Freedom of Movement",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Greater Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Hallucinatory Terrain",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Phantasmal Killer",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Bard"
    },
    {
        "Spell Name":"Animate Objects",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Awaken",
        "School":"Transmutation",
        "Casting Time":"8 Hours",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dominate Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dream",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Special",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Geas",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"30 days",
        "Components":"V",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Greater Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Hold Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Legend Lore",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mass Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mislead",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Modify Memory",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Planar Binding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Raise Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Rary's Telepathic Bond",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Scrying",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Seeming",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Skill Empowerment",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Synaptic Static",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Teleportation Circle",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 round",
        "Components":"V, M",
        "Level":5,
        "Class":"Bard"
    },
    {
        "Spell Name":"Eyebite",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Find the Path",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Guards and Wards",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Heroes' Feast",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mass Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Otto's Irresistible Dance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Programmed Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"True Seeing",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dream of the Blue Veil",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"20 feet",
        "Duration":"6 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Etherealness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Up to 8 hours",
        "Components":"V, S",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Forcecage",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mirage Arcane",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"Sight",
        "Duration":"10 days",
        "Components":"V, S",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mordenkainen's Magnificent Mansion",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mordenkainen's Sword",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Prismatic Spray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Project Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"500 Miles",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Regenerate",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Resurrection",
        "School":"Necromancy",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Symbol",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Teleport",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Bard"
    },
    {
        "Spell Name":"Antipathy\/Sympathy",
        "School":"Enchantment",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"10 Days",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Dominate Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Feeblemind",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Glibness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mind Blank",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Power Word: Stun",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":8,
        "Class":"Bard"
    },
    {
        "Spell Name":"Foresight",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Mass Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Power Word: Heal",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Power Word: Kill",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Prismatic Wall",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Psychic Scream",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"True Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Bard"
    },
    {
        "Spell Name":"Decompose (HB)",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Guidance",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Hand of Radiance (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"5 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Resistance",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Sacred Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Spare the Dying",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Thaumaturgy",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Up to 1 minute",
        "Components":"V",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Toll the Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Virtue (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Word of Radiance",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"5 feet",
        "Duration":"Instantaneous",
        "Components":"V, M",
        "Level":0,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Bane",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Bless",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Ceremony",
        "School":"Evocation",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Command",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Create or Destroy Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Detect Evil and Good",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Detect Poison and Disease",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Guiding Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Guiding Hand (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"5 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Healing Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Inflict Wounds",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Purify Food and Drink",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Sanctuary",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Shield of Faith",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Aid",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Augury",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Blindness\/Deafness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Borrowed Knowledge",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Calm Emotions",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Continual Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Find Traps",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Gentle Repose",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Prayer of Healing",
        "School":"Evocation",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Protection from Poison",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Silence",
        "School":"Illusion",
        "Casting Time":"1 Action R",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Spiritual Weapon",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Warding Bond",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Zone of Truth",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Animate Dead",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Aura of Vitality",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Beacon of Hope",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Bestow Curse",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Clairvoyance",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"1 mile",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Create Food and Water",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Daylight",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Fast Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Feign Death",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Glyph of Warding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Incite Greed",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Life Transference",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Magic Circle",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Mass Healing Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Meld into Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Motivational Speech",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Remove Curse",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Revivify",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Sending",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Unlimited",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Speak with Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Spirit Guardians",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Spirit Shroud",
        "School":"Necromancy",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Tongues",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Water Walk",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Aura of Life",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Aura of Purity",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Control Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Death Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Divination",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Freedom of Movement",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Guardian of Faith",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Stone Shape",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Commune",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Contagion",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"7 days",
        "Components":"V, S",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Dawn",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Dispel Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Flame Strike",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Geas",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"30 days",
        "Components":"V",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Greater Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Hallow",
        "School":"Evocation",
        "Casting Time":"24 Hours",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Holy Weapon",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Insect Plague",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Legend Lore",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Mass Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Planar Binding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Raise Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Scrying",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Summon Celestial",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Blade Barrier",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Create Undead",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Find the Path",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Forbiddance",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"Touch",
        "Duration":"1 day",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Harm",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Heal",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Heroes' Feast",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Otherworldly Form (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Planar Ally",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Sunbeam",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"True Seeing",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Word of Recall",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"5 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":6,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Conjure Celestial",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Divine Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Etherealness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Up to 8 hours",
        "Components":"V, S",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Fire Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Plane Shift",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Regenerate",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Resurrection",
        "School":"Necromancy",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Symbol",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Temple of the Gods",
        "School":"Conjuration",
        "Casting Time":"1 Hour",
        "Range":"120 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Antimagic Field",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius sphere)",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Control Weather",
        "School":"Transmutation",
        "Casting Time":"10 Minutes",
        "Range":"Self (5 mile radius)",
        "Duration":"Concentration, Up to 8 hours",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Earthquake",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Holy Aura",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Sunburst",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Astral Projection",
        "School":"Evocation",
        "Casting Time":"1 Hour",
        "Range":"10 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Mass Heal",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":9,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Power Word: Heal",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":9,
        "Class":"Cleric"
    },
    {
        "Spell Name":"True Resurrection",
        "School":"Necromancy",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Cleric"
    },
    {
        "Spell Name":"Control Flames",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Druidcraft",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Guidance",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Gust",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Magic Stone",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Mold Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Primal Savagery",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Produce Flame",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Resistance",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Shape Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Shillelagh",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Thorn Whip",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Druid"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Animal Friendship",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Beast Bond",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Create or Destroy Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Detect Poison and Disease",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Earth Tremor",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Entangle",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Faerie Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Fog Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Goodberry",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Guiding Hand (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"5 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Healing Word",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Ice Knife",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Jump",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Longstrider",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Purify Food and Drink",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Snare",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Speak with Animals",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Thunderwave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cube)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wild Cunning (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Druid"
    },
    {
        "Spell Name":"Air Bubble",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"24 hours",
        "Components":"S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Animal Messenger",
        "School":"Enchantment",
        "Casting Time":"1 Action R",
        "Range":"30 Feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Augury",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Barkskin",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Beast Sense",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Continual Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Darkvision",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Dust Devil",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Earthbind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Enlarge\/Reduce",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Find Traps",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Flaming Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Gust of Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Healing Spirit",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Heat Metal",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Locate Animals or Plants",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Moonbeam",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Pass Without Trace",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Protection from Poison",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Skywrite",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Sight",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Spike Growth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Summon Beast",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Warding Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wither and Bloom",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Druid"
    },
    {
        "Spell Name":"Aura of Vitality",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Call Lightning",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Conjure Animals",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Daylight",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Elemental Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Erupting Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Feign Death",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Flame Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Freedom of the Waves (HB)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Meld into Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Plant Growth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Revivify",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Sleet Storm",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Speak with Plants",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Summon Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Tidal Wave",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wall of Water",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Water Breathing",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Water Walk",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wind Wall",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Druid"
    },
    {
        "Spell Name":"Blight",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Confusion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Conjure Minor Elementals",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Conjure Woodland Beings",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Control Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Divination",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Dominate Beast",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Elemental Bane",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Fire Shield",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Freedom of Movement",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Giant Insect",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Grasping Vine",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Guardian of Nature",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Hallucinatory Terrain",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Ice Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Stone Shape",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Summon Elemental",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wall of Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Watery Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Druid"
    },
    {
        "Spell Name":"Antilife Shell",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Awaken",
        "School":"Transmutation",
        "Casting Time":"8 Hours",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Commune with Nature",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Cone of Cold",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Conjure Elemental",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Contagion",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"7 days",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Control Winds",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Freedom of the Winds (HB)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Geas",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"30 days",
        "Components":"V",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Greater Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Insect Plague",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Maelstrom",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Mass Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Planar Binding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Reincarnate",
        "School":"Transmutation",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Scrying",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Summon Draconic Spirit",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Summon Draconic Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Transmute Rock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Tree Stride",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wall of Stone",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wrath Of Nature",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Druid"
    },
    {
        "Spell Name":"Bones of the Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Conjure Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Druid Grove",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Find the Path",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Flesh to Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Heal",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Heroes' Feast",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Investiture of Flame",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Investiture of Ice",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Investiture of Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Investiture of Wind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Move Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 2 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Primordial Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Sunbeam",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Transport via Plants",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wall of Thorns",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Wind Walk",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Druid"
    },
    {
        "Spell Name":"Draconic Transformation",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Draconic Transformation (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Fire Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Mirage Arcane",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"Sight",
        "Duration":"10 days",
        "Components":"V, S",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Plane Shift",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Regenerate",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Reverse Gravity",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Symbol",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Whirlwind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, M",
        "Level":7,
        "Class":"Druid"
    },
    {
        "Spell Name":"Animal Shapes",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 24 hours",
        "Components":"V, S",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Antipathy\/Sympathy",
        "School":"Enchantment",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"10 Days",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Control Weather",
        "School":"Transmutation",
        "Casting Time":"10 Minutes",
        "Range":"Self (5 mile radius)",
        "Duration":"Concentration, Up to 8 hours",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Earthquake",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Feeblemind",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Incendiary Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Sunburst",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Tsunami",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Sight",
        "Duration":"Concentration, up to 6 rounds",
        "Components":"V, S",
        "Level":8,
        "Class":"Druid"
    },
    {
        "Spell Name":"Foresight",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Druid"
    },
    {
        "Spell Name":"Shapechange",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Druid"
    },
    {
        "Spell Name":"Storm of Vengeance",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Sight",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Druid"
    },
    {
        "Spell Name":"True Resurrection",
        "School":"Necromancy",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Druid"
    },
    {
        "Spell Name":"Acid Splash",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Chill Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Control Flames",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Encode Thoughts",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"8 hours",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Fire Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Gust",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mind Sliver",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mold Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"On\/Off (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Ray of Frost",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Sapping Sting",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Shape Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Shocking Grasp",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Toll the Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Acid Stream (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Alarm",
        "School":"Abjuration",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"8 Hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Burning Hands",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Chromatic Orb",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Earth Tremor",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Frost Fingers",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Jim's Magic Missile",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mage Armor",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Magic Missile",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Shield",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Snare",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Tasha's Caustic Brew",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Thunderwave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cube)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Witch Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Aganazzar's Scorcher",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Arcane Lock",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Continual Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Digital Phantom (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Gust of Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Icingdeath's Frost (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Melf's Acid Arrow",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mental Barrier (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Rime's Binding Ice",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Scorching Ray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Shatter",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Snilloc's Snowball Swarm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Thought Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Warding Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":2,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Counterspell",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Fireball",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Glyph of Warding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Leomund's Tiny Hut",
        "School":"Evocation",
        "Casting Time":"1 Minute R",
        "Range":"Self (10-foot radius hemisphere)",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Lightning Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (100-foot line)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Magic Circle",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Melf's Minute Meteors",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (120 feet)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Nondetection",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Protection from Ballistics (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Psionic Blast (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Pulse Wave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Remove Curse",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Sending",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Unlimited",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Wall of Sand",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Wall of Water",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Fire Shield",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Gate Seal",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Gravity Sinkhole",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Ice Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Mordenkainen's Private Sanctum",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"120 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Otiluke's Resilient Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Sickening Radiance",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 Feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Storm Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Vitriolic Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Wall of Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Widogast's Web of Fire (HB)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Eldritch Knight"
    },
    {
        "Spell Name":"Bless",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Ceremony",
        "School":"Evocation",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Command",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Compelled Duel",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Detect Evil and Good",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Detect Poison and Disease",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Divine Favor",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Heroism",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Purify Food and Drink",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Searing Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Shield of Faith",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Thunderous Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Wrathful Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Aid",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Branding Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Find Steed",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Find Vehicle (UA)",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Gentle Repose",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Magic Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Prayer of Healing",
        "School":"Evocation",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Protection from Poison",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Warding Bond",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Zone of Truth",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Aura of Vitality",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Blinding Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Create Food and Water",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Crusader's Mantle",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Daylight",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Elemental Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Magic Circle",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Remove Curse",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Revivify",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Spirit Shroud",
        "School":"Necromancy",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Aura of Life",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Aura of Purity",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Death Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Find Greater Steed",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Staggering Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Banishing Smite",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Circle of Power",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Destructive Wave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Dispel Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Geas",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"30 days",
        "Components":"V",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Holy Weapon",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Raise Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Summon Celestial",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Paladin"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Alarm",
        "School":"Abjuration",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"8 Hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Animal Friendship",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Beast Bond",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Cure Wounds",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Detect Poison and Disease",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Ensnaring Strike",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Entangle",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Fog Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Goodberry",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Hail of Thorns",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Hunter's Mark",
        "School":"Divination",
        "Casting Time":"1 Bonus Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Jump",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Longstrider",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Searing Smite",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Snare",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Speak with Animals",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Sudden Awakening (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Wild Cunning (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Zephyr Strike",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":1,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Aid",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Air Bubble",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"24 hours",
        "Components":"S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Animal Messenger",
        "School":"Enchantment",
        "Casting Time":"1 Action R",
        "Range":"30 Feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Barkskin",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Beast Sense",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Cordon of Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"5 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Darkvision",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Find Traps",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Gust of Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Healing Spirit",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Lesser Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Locate Animals or Plants",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Magic Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Pass Without Trace",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Protection from Poison",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Silence",
        "School":"Illusion",
        "Casting Time":"1 Action R",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Spike Growth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Summon Beast",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Ashardalon's Stride",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V,S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Conjure Animals",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Conjure Barrage",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Daylight",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Elemental Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Flame Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Flame Stride (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Freedom of the Waves (HB)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Lightning Arrow",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Meld into Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Nondetection",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Plant Growth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Revivify",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Speak with Plants",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot radius)",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Summon Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Water Breathing",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Water Walk",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Wind Wall",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Conjure Woodland Beings",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Dominate Beast",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Freedom of Movement",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Grasping Vine",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Guardian of Nature",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Summon Elemental",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Commune with Nature",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Conjure Volley",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Freedom of the Winds (HB)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Greater Restoration",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Steel Wind Strike",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Swift Quiver",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Tree Stride",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Wrath Of Nature",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Ranger"
    },
    {
        "Spell Name":"Acid Splash",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Chill Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Control Flames",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Encode Thoughts",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"8 hours",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Fire Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Gust",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mind Sliver",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mold Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"On\/Off (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Ray of Frost",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Sapping Sting",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Shape Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Shocking Grasp",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Toll the Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Color Spray",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Disguise Self",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Distort Value",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Id Insinuation (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Illusory Script",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"S, M",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Puppet (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Silent Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Silvery Barbs",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Sleep",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Sudden Awakening (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Tasha's Hideous Laughter",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Blur",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Crown of Madness",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Gift of Gab",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Jim's Glowing Coin",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Magic Mouth",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mind Thrust (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Mirror Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Nathair's Mischief",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Nathair's Mischief (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Nystul's Magic Aura",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Phantasmal Force",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Shadow Blade",
        "School":"Illusion",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, M",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Tasha's Mind Whip",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Antagonize",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Antagonize (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Catnap",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"10 minutes",
        "Components":"S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Enemies Abound",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Fast Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Fear",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Haywire (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Hypnotic Pattern",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Incite Greed",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Invisibility To Cameras (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Major Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Phantom Steed",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Confusion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Ego Whip (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Greater Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Hallucinatory Terrain",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Phantasmal Killer",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Synchronicity (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Arcane Trickster"
    },
    {
        "Spell Name":"Acid Splash",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Chill Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Control Flames",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fire Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Gust",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mind Sliver",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mold Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"On\/Off (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ray of Frost",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shape Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shocking Grasp",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Acid Stream (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Burning Hands",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Catapult",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Chaos Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Chromatic Orb",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Color Spray",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Comprehend Languages",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Disguise Self",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Distort Value",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Earth Tremor",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Expeditious Retreat",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"False Life",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Feather Fall",
        "School":"Transmutation",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fog Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Grease",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ice Knife",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Id Insinuation (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Infallible Relay (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Jump",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mage Armor",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Magic Missile",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ray of Sickness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Remote Access (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shield",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Silent Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Silvery Barbs",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sleep",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sudden Awakening (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Tasha's Caustic Brew",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Thunderwave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cube)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Witch Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Aganazzar's Scorcher",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Air Bubble",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"24 hours",
        "Components":"S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Alter Self",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Arcane Hacking (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blindness\/Deafness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blur",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Cloud of Daggers",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Crown of Madness",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Darkvision",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Detect Thoughts",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Digital Phantom (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dragon's Breath",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dust Devil",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Earthbind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Enlarge\/Reduce",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Find Vehicle (UA)",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Flaming Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Gust of Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Icingdeath's Frost (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Kinetic Jaunt",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Knock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Levitate",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Magic Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Maximillian's Earthen Grasp",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mental Barrier (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mind Spike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mind Thrust (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mirror Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Misty Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Nathair's Mischief",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Nathair's Mischief (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Phantasmal Force",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Pyrotechnics",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Rime's Binding Ice",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Scorching Ray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"See Invisibility",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shadow Blade",
        "School":"Illusion",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shatter",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Snilloc's Snowball Swarm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Spider Climb",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Spray Of Cards",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Spray of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"15-foot cone",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Tasha's Mind Whip",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Thought Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Vortex Warp",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Warding Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Warp Sense",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Web",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wither and Bloom",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Antagonize",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Antagonize (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ashardalon's Stride",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V,S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blink",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Catnap",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"10 minutes",
        "Components":"S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Clairvoyance",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"1 mile",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Lesser Demon (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Counterspell",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Daylight",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Enemies Abound",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Erupting Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fear",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fireball",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Flame Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Flame Stride (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fly",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Freedom of the Waves (HB)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Gaseous Form",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Haste",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Haywire (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"House of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Hypnotic Pattern",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Incite Greed",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Invisibility To Cameras (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Lightning Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (100-foot line)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Major Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Melf's Minute Meteors",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (120 feet)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Protection from Ballistics (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Psionic Blast (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sleet Storm",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Slow",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Stinking Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Summon Warrior Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Thunder Step",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Tidal Wave",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Tongues",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Vampiric Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wall of Water",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Water Breathing",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Water Walk",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blight",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Confusion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Barlgura (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Knowbot (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Shadow Demon (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dimension Door",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dominate Beast",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ego Whip (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fire Shield",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Gate Seal",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Greater Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Ice Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sickening Radiance",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 Feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Spirit Of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Spirit of Death (UA)",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Storm Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Synchronicity (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"System Backdoor (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Vitriolic Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wall of Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Watery Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Animate Objects",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Bigby's Hand",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Cloudkill",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Commune with City (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Cone of Cold",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Vrock (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Control Winds",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Creation",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dominate Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Enervation",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Far Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Freedom of the Winds (HB)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Hold Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Immolation",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Insect Plague",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Seeming",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Shutdown (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Skill Empowerment",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Summon Draconic Spirit",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Summon Draconic Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Synaptic Static",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Telekinesis",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Teleportation Circle",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 round",
        "Components":"V, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wall of Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wall of Stone",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Arcane Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Chain Lightning",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Circle of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Disintegrate",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Eyebite",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fizban's Platinum Shield",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fizban's Platinum Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Flesh to Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Globe of Invulnerability",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Investiture of Flame",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Investiture of Ice",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Investiture of Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Investiture of Wind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mass Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mental Prison",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Move Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 2 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Otherworldly Form (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Otiluke's Freezing Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Psychic Crush (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Scatter",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sunbeam",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Tasha's Otherworldly Guise",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"True Seeing",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Conjure Hezrou (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Crown of Stars",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Delayed Blast Fireball",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Draconic Transformation",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Draconic Transformation (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dream of the Blue Veil",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"20 feet",
        "Duration":"6 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Etherealness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Up to 8 hours",
        "Components":"V, S",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Finger of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Fire Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Plane Shift",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Power Word: Pain",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Prismatic Spray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Reverse Gravity",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Teleport",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Abi-Dalzim's Horrid Wilting",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Demiplane",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"S",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Dominate Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Earthquake",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Incendiary Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Power Word: Stun",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Sunburst",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blade of Disaster",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Mass Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Meteor Swarm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"1 mile",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Power Word: Kill",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Psychic Scream",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Time Stop",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Wish",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Sorcerer"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Chill Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Eldritch Blast",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Magic Stone",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mind Sliver",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"On\/Off (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Toll the Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Armor of Agathys",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Arms of Hadar",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Cause Fear",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Comprehend Languages",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Distort Value",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Expeditious Retreat",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Healing Elixir (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hellish Rebuke",
        "School":"Evocation",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hex",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Id Insinuation (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Illusory Script",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Infallible Relay (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Puppet (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Remote Access (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Sense Emotion (UA)",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Unseen Servant",
        "School":"Conjuration",
        "Casting Time":"1 Action R",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Witch Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Arcane Hacking (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Borrowed Knowledge",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Cloud of Daggers",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Crown of Madness",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Digital Phantom (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Earthbind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Enthrall",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Find Vehicle (UA)",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Flock of Familiars",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mental Barrier (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mind Spike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mind Thrust (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mirror Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Misty Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Ray of Enfeeblement",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Shadow Blade",
        "School":"Illusion",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Shatter",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spider Climb",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spray Of Cards",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spray of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"15-foot cone",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Thought Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Warp Sense",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Antagonize",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Antagonize (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Counterspell",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Enemies Abound",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Fear",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Fly",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Gaseous Form",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Haywire (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hunger Of Hadar",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hypnotic Pattern",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Incite Greed",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Invisibility To Cameras (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Magic Circle",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Major Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Protection from Ballistics (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Psionic Blast (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Remove Curse",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spirit Shroud",
        "School":"Necromancy",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Lesser Demons",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Shadowspawn",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Undead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Warrior Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Thunder Step",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Tongues",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Vampiric Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Blight",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Conjure Knowbot (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Dimension Door",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Ego Whip (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Elemental Bane",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Galder's Speedy Courier",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Gate Seal",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hallucinatory Terrain",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Shadow Of Moil",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Sickening Radiance",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 Feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spirit Of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Spirit of Death (UA)",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Aberration",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Greater Demon",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Synchronicity (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"System Backdoor (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Commune with City (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Contact Other Plane",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Danse Macabre",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Dream",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Special",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Enervation",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Far Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Hold Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Infernal Calling",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mislead",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Negative Energy Flood",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Planar Binding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Scrying",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Shutdown (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Synaptic Static",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Teleportation Circle",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 round",
        "Components":"V, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Wall of Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Arcane Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Circle of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Conjure Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Create Undead",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Eyebite",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Flesh to Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Investiture of Flame",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Investiture of Ice",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Investiture of Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Investiture of Wind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mass Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Mental Prison",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Otherworldly Form (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Psychic Crush (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Scatter",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Soul Cage",
        "School":"Necromancy",
        "Casting Time":"Special",
        "Range":"60 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Summon Fiend",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Tasha's Otherworldly Guise",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"True Seeing",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Crown of Stars",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Dream of the Blue Veil",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"20 feet",
        "Duration":"6 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Etherealness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Up to 8 hours",
        "Components":"V, S",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Finger of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Forcecage",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Plane Shift",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Power Word: Pain",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Demiplane",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"S",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Dominate Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Feeblemind",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Glibness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Maddening Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Power Word: Stun",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":8,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Astral Projection",
        "School":"Evocation",
        "Casting Time":"1 Hour",
        "Range":"10 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Blade of Disaster",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Foresight",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Imprisonment",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Power Word: Kill",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Psychic Scream",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"True Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Weird",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Warlock"
    },
    {
        "Spell Name":"Acid Splash",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blade Ward",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Booming Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"1 round",
        "Components":"S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Chill Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Control Flames",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Create Bonfire",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dancing Lights",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration up to 1 minute",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Encode Thoughts",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"8 hours",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fire Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Frostbite",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Green-Flame Blade",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gust",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Infestation",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Lightning Lure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mage Hand",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mending",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Message",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mind Sliver",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Minor Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mold Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"On\/Off (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Poison Spray",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Prestidigitation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Up to 1 hour",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ray of Frost",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sapping Sting",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shape Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous or 1 hour",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shocking Grasp",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sword Burst",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Thunderclap",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (5-foot radius)",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Toll the Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"True Strike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration up to 1 round",
        "Components":"S",
        "Level":0,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Absorb Elements",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Acid Stream (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Alarm",
        "School":"Abjuration",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"8 Hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Burning Hands",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Catapult",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Cause Fear",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Charm Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Chromatic Orb",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Color Spray",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Comprehend Languages",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Detect Magic",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Disguise Self",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Distort Value",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Earth Tremor",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Expeditious Retreat",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"False Life",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Feather Fall",
        "School":"Transmutation",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Find Familiar",
        "School":"Conjuration",
        "Casting Time":"1 Hour R",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fog Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Frost Fingers",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gift of Alacrity",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Grease",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Guiding Hand (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"5 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Healing Elixir (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ice Knife",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Id Insinuation (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Identify",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Illusory Script",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Infallible Relay (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Jim's Magic Missile",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Jump",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Longstrider",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mage Armor",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magic Missile",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magnify Gravity",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Protection from Evil and Good",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Puppet (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ray of Sickness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Remote Access (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sense Emotion (UA)",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shield",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Silent Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Silvery Barbs",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sleep",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Snare",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sudden Awakening (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tasha's Caustic Brew",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tasha's Hideous Laughter",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tenser's Floating Disk",
        "School":"Conjuration",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Thunderwave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cube)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Unseen Servant",
        "School":"Conjuration",
        "Casting Time":"1 Action R",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Witch Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":1,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Aganazzar's Scorcher",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Air Bubble",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"24 hours",
        "Components":"S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Alter Self",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Arcane Hacking (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Arcane Lock",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Augury",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blindness\/Deafness",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 Feet",
        "Duration":"1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blur",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Borrowed Knowledge",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Cloud of Daggers",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Continual Flame",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Crown of Madness",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Darkvision",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Detect Thoughts",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Digital Phantom (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dragon's Breath",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dust Devil",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Earthbind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Enhance Ability",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Enlarge\/Reduce",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Find Vehicle (UA)",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Flaming Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Flock of Familiars",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fortune's Favor",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gentle Repose",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"10 days",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gift of Gab",
        "School":"Enchantment",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gust of Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Hold Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Icingdeath's Frost (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Immovable Object",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Jim's Glowing Coin",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Kinetic Jaunt",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Knock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Levitate",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Locate Object",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magic Mouth",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magic Weapon",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Maximillian's Earthen Grasp",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Melf's Acid Arrow",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mental Barrier (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"Self",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mind Spike",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mind Thrust (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mirror Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Misty Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Nathair's Mischief",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Nathair's Mischief (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Nystul's Magic Aura",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Phantasmal Force",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Pyrotechnics",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ray of Enfeeblement",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Rime's Binding Ice",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Rope Trick",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Scorching Ray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"See Invisibility",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shadow Blade",
        "School":"Illusion",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shatter",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Skywrite",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"Sight",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Snilloc's Snowball Swarm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spider Climb",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spray Of Cards",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self (15-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spray of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"15-foot cone",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 8 hours",
        "Components":"V, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tasha's Mind Whip",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"1 round",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Thought Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Vortex Warp",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Warding Wind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Warp Sense",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Web",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wither and Bloom",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wristpocket",
        "School":"Conjuration",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":2,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Animate Dead",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Antagonize",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Antagonize (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ashardalon's Stride",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V,S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Bestow Curse",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blink",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Catnap",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"10 minutes",
        "Components":"S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Clairvoyance",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"1 mile",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Lesser Demon (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Counterspell",
        "School":"Abjuration",
        "Casting Time":"1 Reaction",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dispel Magic",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Enemies Abound",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Erupting Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fast Friends",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fear",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Feign Death",
        "School":"Necromancy",
        "Casting Time":"1 Action R",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fireball",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Flame Arrows",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Flame Stride (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fly",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Galder's Tower",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gaseous Form",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Glyph of Warding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Haste",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Haywire (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"House of Cards (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Hypnotic Pattern",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Incite Greed",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Intellect Fortress",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Invisibility To Cameras (UA)",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Leomund's Tiny Hut",
        "School":"Evocation",
        "Casting Time":"1 Minute R",
        "Range":"Self (10-foot radius hemisphere)",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Life Transference",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Lightning Bolt",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (100-foot line)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magic Circle",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Major Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Melf's Minute Meteors",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (120 feet)",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Nondetection",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Phantom Steed",
        "School":"Illusion",
        "Casting Time":"1 Minute R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Protection from Ballistics (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Protection from Energy",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Psionic Blast (UA)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Pulse Wave",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (30-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Remove Curse",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sending",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Unlimited",
        "Duration":"1 round",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sleet Storm",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Slow",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Speak with Dead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spirit Shroud",
        "School":"Necromancy",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Stinking Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Fey",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Lesser Demons",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Shadowspawn",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Undead",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Warrior Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Thunder Step",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tidal Wave",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tiny Servant",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tongues",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Vampiric Touch",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Sand",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Water",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Water Breathing",
        "School":"Transmutation",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":3,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Arcane Eye",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Banishment",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blight",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Charm Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Confusion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Barlgura (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Knowbot (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Minor Elementals",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Shadow Demon (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Control Water",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dimension Door",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Divination",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ego Whip (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Elemental Bane",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Evard's Black Tentacles",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fabricate",
        "School":"Transmutation",
        "Casting Time":"10 Minutes",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fire Shield",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Galder's Speedy Courier",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"10 minutes",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gate Seal",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gravity Sinkhole",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Greater Invisibility",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Hallucinatory Terrain",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ice Storm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Leomund's Secret Chest",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Locate Creature",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mordenkainen's Faithful Hound",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mordenkainen's Private Sanctum",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"120 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Otiluke's Resilient Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Phantasmal Killer",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Raulothim's Psychic Lance (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sickening Radiance",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 Feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spirit Of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Spirit of Death (UA)",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Stone Shape",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Stoneskin",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Storm Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Aberration",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Construct",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Elemental",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Greater Demon",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Synchronicity (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"System Backdoor (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Vitriolic Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Fire",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Watery Sphere",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Widogast's Vault of Amber (HB)",
        "School":"Transmutation",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Widogast's Web of Fire (HB)",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":4,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Animate Objects",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Bigby's Hand",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Cloudkill",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Commune with City (UA)",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Cone of Cold",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Elemental",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Vrock (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Contact Other Plane",
        "School":"Divination",
        "Casting Time":"1 Minute R",
        "Range":"Self",
        "Duration":"1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Control Winds",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Create Spelljamming Helm",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V,S,M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Creation",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Danse Macabre",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dawn",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dominate Person",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dream",
        "School":"Illusion",
        "Casting Time":"1 Minute",
        "Range":"Special",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Enervation",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Far Step",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Geas",
        "School":"Enchantment",
        "Casting Time":"1 Minute",
        "Range":"60 feet",
        "Duration":"30 days",
        "Components":"V",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Hold Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Immolation",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Infernal Calling",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Legend Lore",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mislead",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Modify Memory",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Negative Energy Flood",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Passwall",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Planar Binding",
        "School":"Abjuration",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Rary's Telepathic Bond",
        "School":"Divination",
        "Casting Time":"1 Action R",
        "Range":"30 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Scrying",
        "School":"Divination",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Seeming",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"8 hours",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shutdown (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Skill Empowerment",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Steel Wind Strike",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Draconic Spirit",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Draconic Spirit (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Synaptic Static",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Telekinesis",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Teleportation Circle",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"1 round",
        "Components":"V, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Temporal Shunt",
        "School":"Transmutation",
        "Casting Time":"1 Reaction",
        "Range":"120 feet",
        "Duration":"1 round",
        "Components":"V, S",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Transmute Rock",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Force",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Light",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Stone",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":5,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Arcane Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"500 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Chain Lightning",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Circle of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Contingency",
        "School":"Evocation",
        "Casting Time":"10 Minutes",
        "Range":"Self",
        "Duration":"10 days",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Create Homunculus",
        "School":"Transmutation",
        "Casting Time":"1 Hour",
        "Range":"120 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Create Undead",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Disintegrate",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Drawmij's Instant Summons",
        "School":"Conjuration",
        "Casting Time":"1 Minute R",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Eyebite",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fizban's Platinum Shield",
        "School":"Abjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60ft",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Fizban's Platinum Shield (UA)",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Flesh to Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Globe of Invulnerability",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gravity Fissure",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (100-foot line)",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Guards and Wards",
        "School":"Abjuration",
        "Casting Time":"10 Minutes",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Investiture of Flame",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Investiture of Ice",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Investiture of Stone",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Investiture of Wind",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Magic Jar",
        "School":"Necromancy",
        "Casting Time":"1 Minute",
        "Range":"Self",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mass Suggestion",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"24 hours",
        "Components":"V, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mental Prison",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Move Earth",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 2 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Otherworldly Form (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Otiluke's Freezing Sphere",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Otto's Irresistible Dance",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Programmed Illusion",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Psychic Crush (UA)",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 minute",
        "Components":"V, S",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Scatter",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Soul Cage",
        "School":"Necromancy",
        "Casting Time":"Special",
        "Range":"60 feet",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Summon Fiend",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sunbeam",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot line)",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tasha's Otherworldly Guise",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tenser's Transformation",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"True Seeing",
        "School":"Divination",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wall of Ice",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Widogast's Transmogrification (HB)",
        "School":"Transmutation",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":6,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Conjure Hezrou (UA)",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Create Magen",
        "School":"Transmutation",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Crown of Stars",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"1 hour",
        "Components":"V, S",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Delayed Blast Fireball",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Draconic Transformation",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Draconic Transformation (UA)",
        "School":"Transmutation",
        "Casting Time":"1 Bonus Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dream of the Blue Veil",
        "School":"Conjuration",
        "Casting Time":"10 Minutes",
        "Range":"20 feet",
        "Duration":"6 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Etherealness",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Up to 8 hours",
        "Components":"V, S",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Finger of Death",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Forcecage",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mirage Arcane",
        "School":"Illusion",
        "Casting Time":"10 Minutes",
        "Range":"Sight",
        "Duration":"10 days",
        "Components":"V, S",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mordenkainen's Magnificent Mansion",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"300 feet",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mordenkainen's Sword",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Plane Shift",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Power Word: Pain",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Prismatic Spray",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Self (60-foot cone)",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Project Image",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"500 Miles",
        "Duration":"Concentration, up to 1 day",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Reverse Gravity",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"100 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sequester",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Simulacrum",
        "School":"Illusion",
        "Casting Time":"12 Hours",
        "Range":"Touch",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Symbol",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"Until dispelled or triggered",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Teleport",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"10 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Tether Essence",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Whirlwind",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"300 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, M",
        "Level":7,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Abi-Dalzim's Horrid Wilting",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Antimagic Field",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self (10-foot radius sphere)",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Antipathy\/Sympathy",
        "School":"Enchantment",
        "Casting Time":"1 Hour",
        "Range":"60 feet",
        "Duration":"10 Days",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Clone",
        "School":"Necromancy",
        "Casting Time":"1 Hour",
        "Range":"Touch",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Control Weather",
        "School":"Transmutation",
        "Casting Time":"10 Minutes",
        "Range":"Self (5 mile radius)",
        "Duration":"Concentration, Up to 8 hours",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dark Star",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 Feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Demiplane",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"1 hour",
        "Components":"S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Dominate Monster",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Feeblemind",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Illusory Dragon",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Incendiary Cloud",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Maddening Darkness",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Maze",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mighty Fortress",
        "School":"Conjuration",
        "Casting Time":"1 Minute",
        "Range":"1 mile",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mind Blank",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Touch",
        "Duration":"24 hours",
        "Components":"V, S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Power Word: Stun",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Reality Break",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Sunburst",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"150 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Telepathy",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"Unlimited",
        "Duration":"24 hours",
        "Components":"V, S, M",
        "Level":8,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Astral Projection",
        "School":"Evocation",
        "Casting Time":"1 Hour",
        "Range":"10 feet",
        "Duration":"Special",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Blade of Disaster",
        "School":"Conjuration",
        "Casting Time":"1 Bonus Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Foresight",
        "School":"Divination",
        "Casting Time":"1 Minute",
        "Range":"Touch",
        "Duration":"8 hours",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Gate",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Imprisonment",
        "School":"Abjuration",
        "Casting Time":"1 Minute",
        "Range":"30 feet",
        "Duration":"Until dispelled",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Invulnerability",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 10 minutes",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Mass Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Meteor Swarm",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"1 mile",
        "Duration":"Instantaneous",
        "Components":"V, S",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Power Word: Kill",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Prismatic Wall",
        "School":"Abjuration",
        "Casting Time":"1 Action",
        "Range":"60 feet",
        "Duration":"10 minutes",
        "Components":"V, S",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Psychic Scream",
        "School":"Enchantment",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"S",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Ravenous Void",
        "School":"Evocation",
        "Casting Time":"1 Action",
        "Range":"1,000 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Shapechange",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Time Ravage",
        "School":"Necromancy",
        "Casting Time":"1 Action",
        "Range":"90 feet",
        "Duration":"Instantaneous",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Time Stop",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"True Polymorph",
        "School":"Transmutation",
        "Casting Time":"1 Action",
        "Range":"30 feet",
        "Duration":"Concentration, up to 1 hour",
        "Components":"V, S, M",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Weird",
        "School":"Illusion",
        "Casting Time":"1 Action",
        "Range":"120 feet",
        "Duration":"Concentration, up to 1 minute",
        "Components":"V, S",
        "Level":9,
        "Class":"Wizard"
    },
    {
        "Spell Name":"Wish",
        "School":"Conjuration",
        "Casting Time":"1 Action",
        "Range":"Self",
        "Duration":"Instantaneous",
        "Components":"V",
        "Level":9,
        "Class":"Wizard"
    }
]