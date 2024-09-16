import styles from '../styles/Product.module.css';

const ProductCard = ({ productName, productImage }) => {
    return (
      <div className={styles.productCard}>
        <h2>{productName}</h2>
        <a>
            <img src={productImage} alt={productName} />
        </a>
      </div>
    );
  };
  
  export default ProductCard;
  