'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');


build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.module.rules.push({
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                esModule: true
            }
        });
        return generatedConfiguration;
    }
});

build.copyStaticAssets.setConfig({
    includeExtensions: ['vue']
});

build.initialize(gulp);
