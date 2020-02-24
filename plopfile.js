module.exports = function (plop) {

    plop.setGenerator('component', {
        description: 'template for components',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this component:'
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.component.jsx',
            templateFile: 'plop_Templates/component.hbs'
        },{
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.styles.scss',
            templateFile: 'plop_Templates/style.hbs'
        },
        {
            type: 'add',
            path: 'src/components/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop_Templates/test.hbs'
        }
     ]
    });

    plop.setGenerator('module', {
        description: 'template for modules',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Module name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this module:'
        }],
        actions: [{
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.jsx',
            templateFile: 'plop_Templates/module.hbs'
        },{
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.style.scss',
            templateFile: 'plop_Templates/style_module.hbs'
        },
        {
            type: 'add',
            path: 'src/modules/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop_Templates/test_module.hbs'
        },
        {
            type: 'add',
            path: 'src/modules/{{properCase name}}/index.js',
            templateFile: 'plop_Templates/index.hbs'
        } ]
    });

    plop.setGenerator('page', {
        description: 'template for pages',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Page name:'
        }, {
            type: 'input',
            name: 'description',
            message: 'Describe this page:'
        }, {
            type: 'input',
            name: 'module1',
            message: 'Module(1) name to be add in the page:'
        }, {
            type: 'input',
            name: 'module2',
            message: 'Module(2) name to be add in the page:'
        }],
        actions: [{
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.component.jsx',
            templateFile: 'plop_Templates/page.hbs'
        },{
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.styles.scss',
            templateFile: 'plop_Templates/style.hbs'
        },
        {
            type: 'add',
            path: 'src/pages/{{properCase name}}/{{properCase  name}}.test.js',
            templateFile: 'plop_Templates/test.hbs'
        },
        {
            type: 'add',
            path: 'src/pages/{{properCase name}}/index.js',
            templateFile: 'plop_Templates/index.hbs'
        } ]
    });

};