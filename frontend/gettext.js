/**
 * Extracts translatable string from TypeScript files.
 */

const {
  GettextExtractor,
  JsExtractors,
  HtmlExtractors
} = require('gettext-extractor');

const extractor = new GettextExtractor();
const parser = extractor.createJsParser([
    JsExtractors.callExpression('_', {
        arguments: { text: 0 }
    })
]);

parser.parseFilesGlob('./src/**/*.ts');

console.log(extractor.getPotString({
    'Project-Id-Version' : 'sinapsi',
    'POT-Creation-Date' : (new Date()).toISOString()
}));