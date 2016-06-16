/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material'
};
/** User packages configuration. */
var packages = {
    'demo-app': {
        format: 'cjs',
        defaultExtension: 'js'
    },
    'components': {
        format: 'cjs',
        defaultExtension: 'js'
    },
    'core': {
        format: 'cjs',
        defaultExtension: 'js'
    },
};
// put the names of any of your Material components here
var materialPkgs = [
    'core',
    'button',
    'card',
    'icon',
    'tabs',
    'list',
    'grid-list',
    'progress-bar',
    'progress-circle',
    'sidenav',
    'slide-toggle',
    'radio',
    'toolbar',
    'checkbox',
    'input'
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.  PAY ATTENTION SET THIS although i don't  understand
    'app'
];
var _cliSystemConfig = {};
barrels.forEach(function (barrelName) {
    _cliSystemConfig[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: _cliSystemConfig
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//-----------Some ERROR related this file
//-----ERROR 1
//----zone.js:323 Error: ReferenceError: _cliSystemConfig is not defined(…)  
//----typescript didn't compile .ts to .js
//----tsconfig.json inside target:es6  not es5  but if es5 editor can't find promise 
//# sourceMappingURL=system-config.js.map