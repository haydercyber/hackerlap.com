/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  introduction: [{type: 'autogenerated', dirName: 'introduction'}],
  fundamentals: [{type: 'autogenerated', dirName: 'fundamentals'}],
  security: [{type: 'autogenerated', dirName: 'security'}],
  networking: [{type: 'autogenerated', dirName: 'networking'}],
  autoscaling: [{type: 'autogenerated', dirName: 'autoscaling'}],
  observability: [{ type: 'autogenerated', dirName: 'observability' }],
  automation: [{ type: 'autogenerated', dirName: 'automation' }],
};

module.exports = sidebars;
