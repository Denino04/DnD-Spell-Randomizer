
        // Update spell count display when slider changes
        document.getElementById('numberOfSpells').addEventListener('input', function() {
            document.getElementById('spellCountDisplay').textContent = this.value;
        });
        
        // Update lower level chance display
        document.getElementById('lowerLevelChance').addEventListener('input', function() {
            document.getElementById('lowerLevelChanceDisplay').textContent = this.value + '%';
        });
    
        // Function to get selected schools
        function getSelectedSchools() {
            const checkboxes = document.querySelectorAll('input[name="school"]:checked');
            return Array.from(checkboxes).map(cb => cb.value.toLowerCase());
        }
        
        // Weighted random selection function
        function weightedRandom(items, weights) {
            let totalWeight = weights.reduce((a, b) => a + b, 0);
            let random = Math.random() * totalWeight;
            let weightSum = 0;
            
            for (let i = 0; i < items.length; i++) {
                weightSum += weights[i];
                if (random <= weightSum) return items[i];
            }
            
            return items[items.length - 1]; // fallback
        }
    
        // Main function to generate spells
        function fetchSpells() {
            const characterClass = document.getElementById('characterClass').value;
            const maxSpellLevel = parseInt(document.getElementById('maxSpellLevel').value);
            const numberOfSpells = parseInt(document.getElementById('numberOfSpells').value);
            const lowerLevelChance = parseInt(document.getElementById('lowerLevelChance').value) / 100;
            const schools = getSelectedSchools();
    
            if (!characterClass) {
                alert("Please select a character class");
                return;
            }
    
            // Filter spells by class and max level
            let availableSpells = spells
                .map(spell => {
                    // Parse spell level (handle cantrips as level 0)
                    let levelStr = String(spell.Level).trim().toLowerCase();
                    let parsedLevel = levelStr === 'cantrip' ? 0 : parseInt(levelStr) || 0;
                    return { ...spell, ParsedLevel: parsedLevel };
                })
                .filter(spell => 
                    spell.ParsedLevel <= maxSpellLevel && 
                    spell.Class.toLowerCase().includes(characterClass.toLowerCase())
                );
    
            // Filter by selected schools if any are selected
            if (schools.length > 0) {
                availableSpells = availableSpells.filter(spell => 
                    schools.includes(spell.School.toLowerCase())
                );
            }
    
            if (availableSpells.length === 0) {
                displayResults([]);
                return;
            }
    
            // Group spells by level
            const spellsByLevel = {};
            availableSpells.forEach(spell => {
                const level = spell.ParsedLevel;
                if (!spellsByLevel[level]) {
                    spellsByLevel[level] = [];
                }
                spellsByLevel[level].push(spell);
            });
    
            // Calculate weights for each level
            const levels = Object.keys(spellsByLevel).map(Number).sort((a, b) => a - b);
            const weights = levels.map(level => {
                // Higher levels get more weight, lower levels get less
                const levelDiff = maxSpellLevel - level;
                return Math.pow(lowerLevelChance, levelDiff);
            });
    
            // Select random spells with weighted probability
            let selectedSpells = [];
            for (let i = 0; i < Math.min(numberOfSpells, availableSpells.length); i++) {
                // First select a level based on weights
                const selectedLevel = weightedRandom(levels, weights);
                const spellsAtLevel = spellsByLevel[selectedLevel];
                
                // Then select a random spell from that level
                const randomIndex = Math.floor(Math.random() * spellsAtLevel.length);
                selectedSpells.push(spellsAtLevel[randomIndex]);
                
                // Remove selected spell to avoid duplicates
                spellsAtLevel.splice(randomIndex, 1);
                
                // If we've exhausted spells at this level, remove it from consideration
                if (spellsAtLevel.length === 0) {
                    const levelIndex = levels.indexOf(selectedLevel);
                    levels.splice(levelIndex, 1);
                    weights.splice(levelIndex, 1);
                    
                    // If no more levels left, break
                    if (levels.length === 0) break;
                }
            }
    
            displayResults(selectedSpells);
        }
    
        function displayResults(spells) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
    
            if (spells.length === 0) {
                resultsDiv.innerHTML = `
                    <div class="col-span-1 md:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        No spells found matching your criteria. Try adjusting your filters.
                    </div>
                `;
                return;
            }
    
            spells.forEach((spell, index) => {
                const schoolClass = `school-${spell.School.toLowerCase().replace(' ', '-')}`;
                
                const spellCard = document.createElement('div');
                spellCard.className = `spell-card ${schoolClass} p-6 rounded-xl shadow-md`;
                spellCard.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold">${spell['Spell Name']}</h3>
                        <span class="bg-gray-800 text-white px-2 py-1 rounded text-sm">${spell.ParsedLevel === 0 ? 'Cantrip' : spell.ParsedLevel + 'st'} Level</span>
                    </div>
                    <p class="mb-2"><strong>School:</strong> ${spell.School}</p>
                    <p class="mb-2"><strong>Casting Time:</strong> ${spell['Casting Time']}</p>
                    <p class="mb-2"><strong>Range:</strong> ${spell.Range}</p>
                    <p class="mb-2"><strong>Duration:</strong> ${spell.Duration}</p>
                    <p class="mb-2"><strong>Components:</strong> ${spell.Components}</p>
                    <p class="mb-2"><strong>Classes:</strong> ${spell.Class}</p>
                    ${spell.Description ? `<p class="mt-3">${spell.Description}</p>` : ''}
                `;
                
                resultsDiv.appendChild(spellCard);
            });
        }
