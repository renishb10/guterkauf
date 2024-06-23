import ProductsContainer from '@/components/products/ProductsContainer';

type Props = { searchParams: { layout?: string; search?: string } };
const ProductsPage = ({ searchParams }: Props) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';

  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;
