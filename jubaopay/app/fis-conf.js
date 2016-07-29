/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.set('project.files', [
    '/fis-conf.js', '/map.json', '/index.html',
    '/components/**', '/server/*', '/view/**',
    '/bower_components/angular/angular.js',
    '/bower_components/angular-animate/angular-animate.js',
    '/bower_components/angular-bootstrap/{ui-bootstrap-tpls.js,ui-bootstrap-csp.css}',
    '/bower_components/angular-ui-router/release/angular-ui-router.js',
    '/bower_components/bootstrap/dist/**/{bootstrap.min.css,glyphicons-halflings-regular.*}',
    '/bower_components/html5-boilerplate/dist/**/{modernizr-2.8.3.min.js,normalize.css,main.css}']);

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
fis.match('/**/({glyphicons-halflings-regular.*,iconfont.{eot, svg, ttf, woff}})', {
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
fis.match('/bower_components/{angular/angular,angular-animate/angular-animate,angular-bootstrap/ui-bootstrap-tpls,angular-ui-router/release/angular-ui-router,bootstrap/dist/**/bootstrap.min,html5-boilerplate/dist/**/modernizr-2.8.3.min.}/.js', {
    packTo: '${project.static}/yhtml5.js',
});
fis.match('/components/js/tj.js', {
    packTo: '${project.static}/yhtml5.js',
});
fis.match('/bower_components/html5-boilerplate/dist/**/modernizr-2.8.3.min.js', {
    packOrder: -99
});
fis.match('/bower_components/angular/angular.js', {
    packOrder: -89
});
fis.match('/bower_components/angular-ui-router/release/angular-ui-router.js', {
    packOrder: -87
});
fis.match('/bower_components/angular-bootstrap/ui-bootstrap-tpls.js', {
    packOrder: -85
});
fis.match('/bower_components/angular-animate/angular-animate.js', {
    packOrder: -83
});
fis.match('/components/js/tj.js', {
    packOrder: -79
});
/*** public css ***/
fis.match('/bower_components/{bootstrap/dist/**/bootstrap.min,angular-bootstrap/ui-bootstrap-csp,html5-boilerplate/dist/**/{normalize,main}}.css', {
    packTo: '${project.static}/yhtml5.css'
});
fis.match('/bower_components/html5-boilerplate/dist/**/normalize.css', {
    packOrder: -99
});
fis.match('/bower_components/bootstrap/dist/**/bootstrap.min.css', {
    packOrder: -89
});
fis.match('/bower_components/angular-bootstrap/ui-bootstrap-csp.css', {
    packOrder: -87
});
/*** custom resourse ***/
fis.match('{/server/author.js, /components/**/*.js}', {
    packTo: '${project.static}/index.js'
});
fis.match('{/server/author.css,/components/**/*.css}', {
    packTo: '${project.static}/index.css'
});

/************************* Pro规范 *****************************/

fis.media('pro')
    .match('/{static/**,{components,bower_components,view}/**/*.{png,gif,jpg,jpeg,eot,ttf,woff,woff2,svg}}', {
        useHash: true,
        domain: '.'
        // domain: 'https://static.jubaobar.cn/project/jubaopay/V0.3-071202'
    })
    //css 自动补充兼容性 https://github.com/ai/browserslist#queries
    .match('/components/**/*.css', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
    .match('/{components/**/*.css', {
        optimizer: fis.plugin('htmlminify', {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        })
    })

// .match('/{{components,view}/**/*.{html,css},index.html}', {
//     optimizer: fis.plugin('htmlminify', {
//         removeComments: true,
//         collapseWhitespace: true,
//         minifyJS: true,
//         minifyCSS: true
//     })
// })
// .match('/{components,view}/**/init.js', {
//     optimizer: fis.plugin('htmlminify', {
//         removeComments: true,
//         collapseWhitespace: true,
//         minifyJS: true
//     })
// })

// 自动雪碧图
// .match('::package', {
//     packager: fis.plugin('map'),
//     spriter: fis.plugin('csssprites', {
//         layout: 'matrix',
//         margin: '15'
//     })
// })
// .match('*.css', {
//     optimizer: fis.plugin('clean-css', {
//         'keepBreaks': false,
//         useSprite: true
//     })
// })
// .match('*.js', {
//     optimizer: fis.plugin('uglify-js', {
//         mangle: {
//             expect: ['require', 'define', 'some string']
//         }
//     })
// })