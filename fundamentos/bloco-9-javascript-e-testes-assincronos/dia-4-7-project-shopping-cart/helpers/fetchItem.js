const END_POINT_ITEM = 'https://api.mercadolibre.com/items/';

const fetchItem = async (item) => {
  const url = `${END_POINT_ITEM}${item}`;
  const result = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
