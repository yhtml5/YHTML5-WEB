/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.set('project.files', [
    '/fis-conf.js', '/map.json', '/index.htm',
    '/components/**', '/server/*', '/view/**',
    '/bower_components/angular/angular.min.js',
    // '/bower_components/angular-animate/angular-animate.min.js',
    '/bower_components/angular-bootstrap/{ui-bootstrap-tpls.min.js,ui-bootstrap-csp.css}',
    '/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    '/bower_components/bootstrap/dist/css/bootstrap.min.css',
    // '/bower_components/html5shiv/dist/html5shiv.min.js'
    // '/bower_components/html5-boilerplate/dist/**/{modernizr-2.8.3.min.js,normalize.css,main.css}'
]);

/************************* 目录规范 *****************************/
fis.match('/bower_components/(**)', {
    release: '/vendor/$1'
});
fis.match('/components/**', {
    release: '/vendor/$0'
});
fis.match('/{components,bower_components,view}/**/(*.{png,gif,jpg,jpeg,svg})', {
    release: '${project.static}/img/$1'
});
fis.match('/**/(*.design.*)', {
    release: '/vendor/design/$1'
});
fis.match('/**/(iconfont.{eot, svg, ttf, woff})', {
    release: '${project.static}/iconfont/$1',
    url: '/iconfont/$1',
    domain: '.'
});
fis.match('/{map.json,fis-conf.*}', {
    release: '/config/$0'
});
/************************* 打包规范 *****************************/
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true
    })
});
/*** public js ***/
fis.match('/bower_components/{angular,angular-animate,angular-bootstrap,angular-ui-router/release,html5shiv/dist}/*.min.js', {
    packTo: '${project.static}/yhtml5.js',
});
// fis.match('/bower_components/html5-boilerplate/dist/**/*.min.js', {
//     packOrder: -99
// });
fis.match('/bower_components/html5shiv/dist/html5shiv.min.js', {
    packOrder: -99
});
fis.match('/bower_components/angular/angular.min.js', {
    packOrder: -89
});
fis.match('/bower_components/angular-ui-router/release/angular-ui-router.min.js', {
    packOrder: -87
});
fis.match('/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', {
    packOrder: -85
});
fis.match('/bower_components/angular-animate/angular-animate.min.js', {
    packOrder: -83
});
/*** public css ***/
fis.match('/bower_components/{bootstrap/dist/**/bootstrap.min,html5-boilerplate/dist/**/{normalize,main}}.css', {
    packTo: '${project.static}/yhtml5.css'
});
fis.match('/components/iconfont/*.css', {
    packTo: '${project.static}/yhtml5.css'
});
fis.match('/bower_components/html5-boilerplate/dist/**/normalize.css', {
    packOrder: -99
});
fis.match('/bower_components/html5-boilerplate/dist/**/main.css', {
    packOrder: -97
});
fis.match('/bower_components/bootstrap/dist/**/bootstrap.min.css', {
    packOrder: -89
});
fis.match('/bower_components/angular-bootstrap/ui-bootstrap-csp.css', {
    packOrder: -87
});
fis.match('/components/iconfont/*.css', {
    packOrder: -77
});

/*** custom resourse ***/
fis.match('{/server/**.js, /components/**/*.js}', {
    packTo: '${project.static}/index.js'
});
fis.match('{/server/author.css,/components/**/*.css}', {
    packTo: '${project.static}/index.css'
});

/************************* Pro规范 *****************************/

fis.media('pro')
    .match('/{static/**,{components,bower_components,view}/**/*.{png,gif,jpg,jpeg,eot,ttf,woff,woff2,svg}}', {
        useHash: true,
        domain: '//static.jubaobar.cn/project/jubaopay/V0.5'
    })
    .match('/**/(iconfont.{eot, svg, ttf, woff})', {
        url: '${project.static}/iconfont/$1',
    })
    .match('/components/**/*.css', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
    .match('{/components/**/*.css,*.html,/index.htm}', {
        optimizer: fis.plugin('htmlminify', {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        })
    })
