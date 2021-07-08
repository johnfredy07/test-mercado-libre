const axios = require("axios");

const getCategories = async (filters, available_filters) => {
    let itemCategories;

    if (filters.length) {
      itemCategories = filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    } else {
      let firstCategory = available_filters[0]?.values;

      firstCategory.sort(function (a, b) {
        if (a.results > b.results) {
          return -1;
        }
        if (a.results < b.results) {
          return 1;
        }
        return 0;
      });

      firstCategory = firstCategory[0].id;

      itemCategories = await axios.get(
        `https://api.mercadolibre.com/categories/${firstCategory}`
      );

      itemCategories = itemCategories.data.path_from_root.map(
        (category) => category.name
      );

      itemCategories =
        itemCategories.length > 5 ? itemCategories.slice(-5) : itemCategories;
    }
    return itemCategories;
};

const itemsByQuery = async (query, limit = 4) => {
    const items = await axios.get(
      `${process.env.API_ML}/sites/MLA/search?q=${query}&limit=${limit}`
    );
    const { results, filters, available_filters } = items.data;

    const products = results.map(
      ({
        id,
        title,
        price,
        currency_id,
        thumbnail,
        thumbnail_id,
        condition,
        shipping: { free_shipping },
        address,
      }) => {
        return {
          id,
          title,
          price: {
            currency: currency_id,
            amount: Math.floor(price).toString(),
            decimals: ((price % 1) * 100).toFixed(0),
          },
          thumbnail,
          picture: `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`,
          condition,
          freeShipping: free_shipping,
          address,
        };
      }
    );   
    const categories = await getCategories(filters, available_filters);
    const data = {
      author: {
        name: "Jhon Fredy",
        lastname: "Guzmán Restrepo",
      },
      categories,
      items: products,
    };     

    return data;
};

module.exports = itemsByQuery;
