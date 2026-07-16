"use client";
import Card from "<comikk>/app/components/Card";
import { useEffect, useState } from "react";
import api from "../../api/api"

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
interface DisplayProProps {
  search: string;
}

export default function DisplayPro({ search }: DisplayProProps) {
    
    const [products, setProducts] = useState<Product[]>([]);
  

    useEffect( ()=>{
      const getProduct = async()=>{
          try{
            const response = await api.get("/products");
             setProducts(response.data);
        }catch(err){
            console.log(err)
        }
      }
      getProduct()
    },[]);

const filteredProducts = products.filter((product) => {
  const query = search.toLowerCase();

  return (
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.price.toString().includes(query)
  );
});

    
    return(
           <div className="container-sm">
                 <div className="row g-3">
                     {filteredProducts.map((product, index) =>(
                        <Card key={index}  product={product} />
                     ))
                     }
                 </div>
           </div>
    )
}