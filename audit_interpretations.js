const fs = require('fs');

function countWords(str) {
    if (!str) return 0;
    return str.split(/\s+/).filter(w => w.length > 0).length;
}

function auditFile(filePath, varName) {
    const content = fs.readFileSync(filePath, 'utf8');
    // This is a rough way to extract the data. For a perfect audit, we'd need to parse the JS.
    // Given the structure, we can try to look for patterns like "deep: \"...\""

    const results = [];
    const sections = ['deep', 'love', 'career', 'spiritual', 'timing', 'events', 'warnings'];

    // Simple regex to find card blocks
    // This works if the card name is the key: "The Fool": { ... }
    const cardRegex = /"([^"]+)":\s*{[\s\S]*?en:\s*{([\s\S]*?)}/g;
    let match;

    while ((match = cardRegex.exec(content)) !== null) {
        const cardName = match[1];
        const enContent = match[2];

        sections.forEach(section => {
            const sectionRegex = new RegExp(`${section}:\\s*"([^"]*)"`);
            const sectionMatch = sectionRegex.exec(enContent);
            if (sectionMatch) {
                const text = sectionMatch[1];
                const count = countWords(text);
                if (count < 35) {
                    results.push({ card: cardName, section, count, text });
                }
            }
        });
    }
    return results;
}

console.log("--- Tarot Audit ---");
const tarotResults = auditFile('tarot_interpretations_deep.js', 'tarotDeepInterpretations');
tarotResults.forEach(r => console.log(`${r.card} - ${r.section}: ${r.count} words`));

console.log("\n--- Lenormand Audit ---");
const lenormandResults = auditFile('lenormand_interpretations.js', 'lenormandDeepInterpretations');
lenormandResults.forEach(r => console.log(`${r.card} - ${r.section}: ${r.count} words`));
