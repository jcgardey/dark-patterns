import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/petspace/product/${product.id}`);
  };

  return (
    <div onClick={goToProduct} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-3">
        <h4 className="font-semibold text-lg">{product.name}</h4>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-600 text-lg">
              ${product.priceKg * product.amountKg}
            </span>
            <span className="text-xs font-thin">${product.priceKg}/kg</span>
          </div>
          <div>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            {product.halfStar ? (
              <i className="fa-solid fa-star-half-stroke text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-star text-yellow-400"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
