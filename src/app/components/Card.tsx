import styles from "../styles/card.module.css"

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface CardProps {
  product: Product;
}

export default function Card({ product}:CardProps){
    return(
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
        <div className={`card ${styles.card}`}>
           <img src={product.image} className={`card-img-top ${styles.img}`} alt="..." />
             <div className="card-body">
                <h5 className={`card-title ${styles.title}`}>{product.title}</h5>
                <p className={`card-text ${styles.description}`}>{product.description.toUpperCase()}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> ${product.price}</li>
                <li className="list-group-item">{product.category}</li>
            </ul>
  
       </div>        
    </div>
    )
}