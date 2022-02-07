const END_POINT = 'https://api.mercadolibre.com/sites/MLB/search?q=';
// const END_POINT = 'https://api.mercadolibre.com/sites/MLB/';

const fetchProducts = async (product) => {
  const url = `${END_POINT}${product}`;
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => error);
  // const response = await fetch(url);
  // const data = await response.json();
  // return data.results;
  // catch (error) {
  //   console.log('erro no fetchProducts');
  //   console.log(error);
  // }
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
