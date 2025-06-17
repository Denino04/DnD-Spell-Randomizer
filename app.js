function fetchSpells() {
    const characterClass = document.getElementById('characterClass').value.trim().toLowerCase();
    const classLevel = parseInt(document.getElementById('classLevel').value);
    const numberOfSpells = parseInt(document.getElementById('numberOfSpells').value);
    const schools = document.getElementById('schools').value.split(',').map(s => s.trim().toLowerCase());

    let availableSpells = spells
        .map(spell => {
            let levelStr = String(spell.Level).trim().toLowerCase();
            let parsedLevel = levelStr === 'cantrip' ? 0 : parseInt(levelStr) || 0;
            return { ...spell, ParsedLevel: parsedLevel };
        })
        .filter(spell => spell.ParsedLevel <= classLevel && spell.Class.toLowerCase().includes(characterClass));

    let selectedSpells = [];

    for (let i = 0; i < numberOfSpells; i++) {
        let school = schools[i % schools.length];
        let schoolSpells = availableSpells.filter(s => s.School.toLowerCase() === school);

        if (schoolSpells.length === 0) {
            console.log(`No spells found for school: ${school}`);
            continue;
        }

        let weights = schoolSpells.map(s => Math.pow(s.ParsedLevel + 1, 2));
        let totalWeight = weights.reduce((a, b) => a + b, 0);
        let randomValue = Math.random() * totalWeight;

        let chosenIndex = 0;
        for (let w = 0; w < weights.length; w++) {
            if (randomValue < weights[w]) {
                chosenIndex = w;
                break;
            }
            randomValue -= weights[w];
        }

        selectedSpells.push(schoolSpells[chosenIndex]);
    }

    displayResults(selectedSpells);
}

function displayResults(spells) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (spells.length === 0) {
        resultsDiv.innerHTML = '<p class="text-center text-gray-600">No spells found.</p>';
        return;
    }

    spells.forEach((spell, index) => {
        let spellCard = document.createElement('div');
        spellCard.className = 'p-4 border rounded bg-gray-50 mb-4';

        spellCard.innerHTML = `
            <h2 class="font-bold text-xl mb-2">${spell['Spell Name']}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <p class="font-semibold">Level</p>
                    <p>${spell.Level === 0 ? 'Cantrip' : `Level ${spell.Level}`}</p>
                </div>
                <div>
                    <p class="font-semibold">School</p>
                    <p>${spell.School}</p>
                </div>
                <div>
                    <p class="font-semibold">Classes</p>
                    <p>${spell.Class}</p>
                </div>
                <div>
                    <p class="font-semibold">Casting Time</p>
                    <p>${spell['Casting Time'] || 'N/A'}</p>
                </div>
                <div>
                    <p class="font-semibold">Range</p>
                    <p>${spell.Range || 'N/A'}</p>
                </div>
                <div>
                    <p class="font-semibold">Duration</p>
                    <p>${spell.Duration || 'N/A'}</p>
                </div>
                <div>
                    <p class="font-semibold">Components</p>
                    <p>${spell.Components || 'N/A'}</p>
                </div>
            </div>
            ${spell.Description ? `<div class="mt-3"><p class="font-semibold">Description</p><p>${spell.Description}</p></div>` : ''}
        `;

        resultsDiv.appendChild(spellCard);
    });
}
