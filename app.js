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
        spellCard.className = 'p-4 border rounded bg-gray-50';

        spellCard.innerHTML = `
            <h2 class="font-bold mb-2">Spell ${index + 1}: ${spell['Spell Name']}</h2>
            <p><strong>Level:</strong> ${spell.Level}</p>
            <p><strong>School:</strong> ${spell.School}</p>
            <p><strong>Classes:</strong> ${spell.Class}</p>
        `;

        resultsDiv.appendChild(spellCard);
    });
}
