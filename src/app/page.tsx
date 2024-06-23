import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
