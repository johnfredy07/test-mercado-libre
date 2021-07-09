const axios = require("axios");

const getCategories = async (filters, available_filters) => {
    let categories;

    if (filters.length) {
      categories = filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    } else {
      let firstCategory = available_filters[0]?.values;

      firstCategory.sort((a, b) => {
        if (a.results > b.results) {
          return -1;
        }
        if (a.results < b.results) {
          return 1;
        }
        return 0;
      });

      firstCategory = firstCategory[0].id;

      categories = await axios.get(
        `${process.env.API_ML}/categories/${firstCategory}`
      );

      categories = categories.data.path_from_root.map(
        (category) => category.name
      );
      //Maximo 5 categorias
      categories = categories.length > 5 ? categories.slice(-5) : categories;
    }
    return categories;
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
