import * as actions from '@/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductGrid from '../products/ProductGrid';

const FeaturedProducts = async () => {
  const products = await actions.fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="mt-10">
      <SectionTitle text="featured products" />
      <ProductGrid products={products} />
    </section>
  );
};
export default FeaturedProducts;
