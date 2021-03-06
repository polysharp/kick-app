/* eslint-disable */
const path = require('path');

const mockData = require('./mockData.json');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  mockData.products.forEach((product) => {
    createPage({
      path: `/shells/${product.slug}`,
      component: path.resolve(`./src/templates/product/Product.jsx`),
      context: { product },
    });
  });
};

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*';
    createPage(page);
  }
};
