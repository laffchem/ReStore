import { Grid2 } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
	products: Product[];
}

const ProductList = ({ products }: Props) => {
	return (
		<Grid2 container spacing={3}>
			{products.map((product: Product) => (
				<Grid2 size={3} key={product.id}>
					<ProductCard product={product} />
				</Grid2>
			))}
		</Grid2>
	);
};
export default ProductList;
