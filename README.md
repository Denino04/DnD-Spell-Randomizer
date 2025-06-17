# DnD-Spell-Randomizer

![D&D Logo](https://img.icons8.com/color/96/000000/dungeons-and-dragons.png)

A web application that helps Dungeons & Dragons players randomly select spells for their characters based on class, level, and preferred magic schools.

Live Demo: https://denino04.github.io/DnD-Spell-Randomizer/

## Features

- **Class-based Spell Selection**: Filter spells by character class (Wizard, Sorcerer, Cleric, etc.)
- **Level-appropriate Spells**: Only shows spells your character can cast at their current level
- **School Weighting**: Prioritize spells from specific magic schools (Evocation, Abjuration, etc.)
- **Weighted Randomization**: Higher-level spells appear less frequently than lower-level ones
- **Detailed Spell Cards**: Displays comprehensive spell information including:
  - Casting time
  - Range
  - Duration
  - Components

## How It Works

1. Select your character class
2. Enter your character level
3. Choose how many spells you want
4. Select preferred magic schools (comma separated)
5. Click "Generate Spells" to get your randomized spell list

## Installation

To run locally:

```bash
git clone https://github.com/yourusername/dnd-spell-randomizer.git
cd dnd-spell-randomizer
```

Open `index.html` in your browser or use a local server:

```bash
# Using Python (any version)
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Data Structure

Spells are stored in `spells.js` as an array of objects with this format:

```javascript
{
    "Spell Name": "Acid Splash",
    "School": "Conjuration",
    "Casting Time": "1 Action",
    "Range": "60 Feet",
    "Duration": "Instantaneous",
    "Components": "V, S",
    "Level": 0,
    "Class": "Artificer, Sorcerer, Wizard",
    "Description": "You hurl a bubble of acid..."
}
```

## Contributing

Contributions are welcome! Here's how you can help:

1. Add more spells to `spells.js`
2. Improve the randomization algorithm
3. Enhance the UI/UX
4. Add new features like:
   - Spell saving functionality
   - Multi-class support
   - Spell comparison tools

Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Dungeons & Dragons and all related content is property of Wizards of the Coast
- Inspired by the need for quick spell selection during character creation
- Built with vanilla JavaScript, HTML, and CSS

---

**Happy adventuring!** May your rolls be critical and your spells be mighty.
