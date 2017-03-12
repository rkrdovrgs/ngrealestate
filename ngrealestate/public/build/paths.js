var appRoot = 'src/';
var contentRoot = 'content/';
var outputRoot = 'dist/';
var buildOutputRoot = '.gulp_build/';
var testRoot = 'tests/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    tests: testRoot + '**/*.ts',
    testData: testRoot + '**/*.spec.data.json',
    json: appRoot + '**/*.json',
    html: appRoot + '**/*.html',
    css: contentRoot + '**/*.css',
    fonts: contentRoot + 'fonts/*.*',
    kendo: contentRoot + 'kendo/**/*.*',
    images: contentRoot + 'images/*.*',
    less: contentRoot + '**/*.less',
    output: outputRoot,
    content: contentRoot,
    typings: 'typings/',
    buildOutput: buildOutputRoot,
    dtsSrc: [
        'typings/manual/**/*.d.ts',
        'typings/browser/**/*.d.ts',
        'typings/modules/**/*.d.ts',
        'typings/globals/**/*.d.ts'
    ]
}