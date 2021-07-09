const axios = require("axios");

const getCategorie = async (id) => {
  const category = await axios.get(`${process.env.API_ML}/categories/${id}`);
  return category.data.path_from_root.map((category) => category.name);
};

const itemDetail = async (itemId) => {
  const item = await axios.get(`${process.env.API_ML}/items/${itemId}`);
  const description = await axios.get(`${process.env.API_ML}/items/${itemId}/description`);

  const {
    id,
    title,
    price,
    currency_id,
    pictures,
    condition,
    shipping: { free_shipping },
    sold_quantity,
    category_id,
  } = item.data;  

  const data = {
    author: {
      name: "Jhon Fredy",
      lastname: "Guzmán Restrepo",
    },
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: Math.floor(price).toString(),
        decimals: ((price % 1) * 100).toFixed(0),
      },
      picture: pictures[0].secure_url,
      condition,
      free_shipping,
      sold_quantity,
      description: description.data.plain_text,
    },
    categories: await getCategorie(category_id)
  };
  return data;
};

module.exports = itemDetail;