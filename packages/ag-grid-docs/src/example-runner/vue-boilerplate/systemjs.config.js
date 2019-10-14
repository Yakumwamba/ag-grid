(function (global) {
    // simplified version of Object.assign for es3
    function assign() {
        var result = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var arg = arguments[i];
            for (var prop in arg) {
                result[prop] = arg[prop];
            }
        }
        return result;
    }

    System.config({
        transpiler: 'plugin-babel',
        defaultExtension: 'js',
        paths: {
            'npm:': 'https://unpkg.com/'
        },
        map: assign(
            {
                // babel transpiler
                'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
                'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',

                // css plugin
                'css': 'npm:systemjs-plugin-css/css.js',

                // vuejs
                'vue': 'npm:vue/dist/vue.min.js',

                // vue property decorator
                'vue-class-component': 'npm:vue-class-component@6.3.2/dist/vue-class-component.min.js',
                'vue-property-decorator': 'npm:vue-property-decorator@7.2.0/lib/vue-property-decorator.umd.js',

                app: appLocation + 'app'
            },
            systemJsMap
        ), // systemJsMap comes from index.html

        packages: {
            'vue': {
                defaultExtension: 'js'
            },
            'vue-class-component': {
                defaultExtension: 'js'
            },
            'vue-property-decorator': {
                defaultExtension: 'js'
            },
            app: {
                defaultExtension: 'js'
            },
            'ag-grid-vue': {
                main: './main.js',
                defaultExtension: 'js'
            },
            'ag-grid-enterprise': {
                main: './main.js',
                defaultExtension: 'js'
            },
            /* START OF MODULES - DO NOT DELETE */
           '@ag-community/client-side-row-model': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-community/csv-export': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-community/infinite-row-model': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/clipboard': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/column-tool-panel': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/excel-export': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/filter-tool-panel': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/master-detail': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/menu': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/range-selection': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/rich-select': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/row-grouping': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/server-side-row-model': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/set-filter': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/side-bar': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/status-bar': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
           '@ag-enterprise/viewport-row-model': { 
                main: './dist/cjs/main.js',
                defaultExtension: 'js'
            },
            /* END OF MODULES - DO NOT DELETE */
        },
        meta: {
            '*.js': {
                babelOptions: {
                    stage1: true,
                    stage2: true,
                    es2015: true
                }
            },
            '*.css': {loader: 'css'}
        }
    });
})(this);
