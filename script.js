const replacements = {
    "[brand]": "<span>Zhongbang Fine Spinning</span>",
    "[experience]": "<span>más de 10 años de experiencia</span>",
    "[Intelligent R&D:]": "<span>Intelligent R&D</span>"
};

function applyReplacements(text) {
    for (const key in replacements) {
        text = text.replaceAll(key, replacements[key]);
    }
    return text;
}