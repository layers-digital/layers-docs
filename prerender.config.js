
module.exports = {
  filterUrl(url) {
    return true;
  },

  hydrateOptions() {
    const hydrate = {
    timeout: 15000
    }
    return hydrate;
  }
};
  