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
        resultsDiv.innerHTML = '<p class="text-center text-gray-600 py-4">No spells found matching your criteria.</p>';
        return;
    }

    spells.forEach((spell, index) => {
        let spellCard = document.createElement('div');
        spellCard.className = 'p-6 border rounded-lg bg-white shadow-md mb-6 spell-card';

        // Format components with icons if available
        let componentsHTML = '';
        if (spell.Components) {
            const comps = spell.Components.split(',').map(c => c.trim());
            componentsHTML = comps.map(c => {
                const icon = {
                    'V': '🗣️',
                    'S': '👐',
                    'M': '💎'
                }[c] || c;
                return `<span class="component-pill bg-gray-100 px-2 py-1 rounded mr-2">${icon} ${c}</span>`;
            }).join('');
        }

        spellCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">${spell['Spell Name']}</h2>
                    <div class="flex items-center mt-1">
                        <span class="level-badge px-3 py-1 rounded-full 
                            ${spell.Level === 0 ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'} 
                            text-sm font-semibold">
                            ${spell.Level === 0 ? 'Cantrip' : `Level ${spell.Level}`}
                        </span>
                        <span class="school-badge ml-2 px-3 py-1 bg-${getSchoolColor(spell.School)}-100 
                            text-${getSchoolColor(spell.School)}-800 rounded-full text-sm font-semibold">
                            ${spell.School}
                        </span>
                    </div>
                </div>
                <div class="text-sm text-gray-500">${index + 1}/${spells.length}</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div class="spell-stat">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Casting Time</h3>
                    <p class="text-lg">${spell['Casting Time'] || '—'}</p>
                </div>
                <div class="spell-stat">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Range</h3>
                    <p class="text-lg">${spell.Range || '—'}</p>
                </div>
                <div class="spell-stat">
                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Duration</h3>
                    <p class="text-lg">${spell.Duration || '—'}</p>
                </div>
            </div>

            <div class="mb-4">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Components</h3>
                <div class="flex flex-wrap gap-2">${componentsHTML}</div>
                ${spell['Material Components'] ? 
                    `<p class="text-sm text-gray-600 mt-2"><em>${spell['Material Components']}</em></p>` : ''}
            </div>

            <div class="mb-4">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Available To</h3>
                <p class="text-lg">${spell.Class}</p>
            </div>

            ${spell.Description ? `
            <div class="spell-description mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</h3>
                <p class="whitespace-pre-line">${spell.Description}</p>
            </div>
            ` : ''}
        `;

        resultsDiv.appendChild(spellCard);
    });
}

// Helper function for school colors
function getSchoolColor(school) {
    const schoolColors = {
        'Abjuration': 'blue',
        'Conjuration': 'teal',
        'Divination': 'indigo',
        'Enchantment': 'pink',
        'Evocation': 'red',
        'Illusion': 'purple',
        'Necromancy': 'green',
        'Transmutation': 'yellow'
    };
    return schoolColors[school] || 'gray';
}
