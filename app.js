// Main spell fetching function
function fetchSpells() {
    // Get user inputs
    const inputs = {
        characterClass: document.getElementById('characterClass').value.trim().toLowerCase(),
        classLevel: parseInt(document.getElementById('classLevel').value),
        numberOfSpells: parseInt(document.getElementById('numberOfSpells').value),
        schools: document.getElementById('schools').value.split(',').map(s => s.trim().toLowerCase())
    };

    // Process available spells
    const availableSpells = processSpells(spells, inputs);

    // Select spells based on user preferences
    const selectedSpells = selectSpells(availableSpells, inputs);

    // Display results
    displayResults(selectedSpells);
}

// Process and filter spells based on user inputs
function processSpells(spells, inputs) {
    return spells.map(spell => {
        const parsedLevel = spell.Level === 'Cantrip' ? 0 : parseInt(spell.Level) || 0;
        return { ...spell, parsedLevel };
    }).filter(spell => 
        spell.parsedLevel <= inputs.classLevel && 
        spell.Class.toLowerCase().includes(inputs.characterClass)
    );
}

// Select spells using weighted randomization
function selectSpells(availableSpells, inputs) {
    const selectedSpells = [];
    
    for (let i = 0; i < inputs.numberOfSpells; i++) {
        const school = inputs.schools[i % inputs.schools.length];
        const schoolSpells = availableSpells.filter(s => 
            s.School.toLowerCase() === school
        );

        if (schoolSpells.length === 0) {
            console.warn(`No spells found for school: ${school}`);
            continue;
        }

        const weightedSpell = selectWeightedSpell(schoolSpells);
        selectedSpells.push(weightedSpell);
    }

    return selectedSpells;
}

// Weighted random selection helper
function selectWeightedSpell(spells) {
    const weights = spells.map(s => Math.pow(s.parsedLevel + 1, 2));
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * totalWeight;

    for (let i = 0; i < weights.length; i++) {
        if (randomValue < weights[i]) {
            return spells[i];
        }
        randomValue -= weights[i];
    }

    return spells[0]; // Fallback
}

// Display results in clean format
function displayResults(spells) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = spells.length ? '' : '<p>No spells found matching your criteria.</p>';

    spells.forEach((spell, index) => {
        resultsDiv.appendChild(createSpellCard(spell, index, spells.length));
    });
}

// Create individual spell card
function createSpellCard(spell, index, total) {
    const card = document.createElement('div');
    card.className = 'spell-card';
    
    card.innerHTML = `
        <h2>${spell['Spell Name']}</h2>
        <div class="spell-meta">
            <span>Level: ${spell.Level === 0 ? 'Cantrip' : spell.Level}</span>
            <span>School: ${spell.School}</span>
            <span>${index + 1}/${total}</span>
        </div>
        
        <ul class="spell-details">
            <li><strong>Casting Time:</strong> ${spell['Casting Time'] || '-'}</li>
            <li><strong>Range:</strong> ${spell.Range || '-'}</li>
            <li><strong>Duration:</strong> ${spell.Duration || '-'}</li>
            <li><strong>Components:</strong> ${formatComponents(spell.Components)}</li>
            <li><strong>Classes:</strong> ${spell.Class}</li>
        </ul>
        
        ${spell.Description ? `
        <div class="spell-description">
            <h3>Description</h3>
            <p>${spell.Description}</p>
        </div>
        ` : ''}
    `;
    
    return card;
}

// Format spell components with icons
function formatComponents(components) {
    if (!components) return '-';
    
    const icons = {
        'V': '🗣️',
        'S': '👐',
        'M': '💎'
    };
    
    return components.split(',').map(c => {
        const component = c.trim();
        return `${icons[component] || ''} ${component}`;
    }).join(', ');
}
