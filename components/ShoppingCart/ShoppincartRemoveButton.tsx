import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCartRemoveButton = () => {
  return (
    <div className="px-5 cursor-pointer transform hover:scale-110 transition-transform">
      <FontAwesomeIcon className="text-gray-500" icon={faXmark} />
    </div>
  );
};

export default ShoppingCartRemoveButton;
