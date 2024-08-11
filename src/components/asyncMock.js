
const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1600,
    category: "celular",
    img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_14_purple_pdp_image_position-1a_laes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Samsung s21",
    price: 900,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "Computadora Desktop",
    price: 2500,
    category: "computer",
    img: "https://oechsle.vteximg.com.br/arquivos/ids/14412798-1000-1000/image-9009da6929734c48978c54d33898c3e2.jpg?v=638278917366570000",
    stock: 10,
    description: "Descripcion de Computadora Desktop",
  },
  {
    id: "5",
    name: "Iphone 12 XR",
    price: 1600,
    category: "celular",
    img: "https://plazavea.vteximg.com.br/arquivos/ids/7108142-1000-1000/image-cdc1eaf9f98245a6b6f3803c3c9ed2fa.jpg?v=637812522991130000",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "6",
    name: "Samsung J10",
    price: 900,
    category: "celular",
    img: "https://http2.mlstatic.com/D_Q_NP_2X_879751-MLA73067605198_112023-E.webp",
    stock: 11,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "7",
    name: "Ipad 3va generacion",
    price: 1400,
    category: "tablet",
    img: "https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/new-tablets/matepad-pro-serises/matepad-pro-series-card-1.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "8",
    name: "Computadora Gamer",
    price: 4000,
    category: "computer",
    img: "https://oechsle.vteximg.com.br/arquivos/ids/14412798-1000-1000/image-9009da6929734c48978c54d33898c3e2.jpg?v=638278917366570000",
    stock: 5,
    description: "Descripcion de Computadora Desktop",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
