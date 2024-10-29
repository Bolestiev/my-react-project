import PropTypes from "prop-types";
// src/components/Product.jsx

// src/components/Product.jsx

// src/components/Product.jsx

// src/components/Product.jsx

// export default function Product({ name, imgUrl, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// }

const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="480" />
    <h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Описуємо типи пропсів
Product.propTypes = {
  name: PropTypes.string.isRequired, // name має бути рядком і обов'язковим
  imgUrl: PropTypes.string, // imgUrl має бути рядком, але необов'язковим
  price: PropTypes.number.isRequired, // price має бути числом і обов'язковим
};

export default Product;
