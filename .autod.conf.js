'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    'egg',
    'egg-scripts',
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'egg-mock',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
  ],
  exclude: [
    './test/fixtures',
    './dist',
  ],
};

