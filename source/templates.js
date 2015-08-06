var templates = require('./../build/compiledTemplates.js');

module.exports = {
    get: function (templateName) {
        return templates[templateName];
    }
}