'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Productgrid() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleAddToCart = () => {
    router.push('/products');
  };
  const handleLoadMore = () => {
    router.push('/products');
  };
  const handleWishlist = () => {
    router.push('/about');
  };
  // ACTION_PLACEHOLDER_END

  const products = [
    {
      id: 1,
      name: 'Omega-3 Fish Oil Premium',
      price: 34.99,
      originalPrice: 44.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 342,
      badge: 'Pharmacist Choice',
      category: 'Heart Health',
    },
    {
      id: 2,
      name: 'Vitamin D3 5000 IU',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 567,
      badge: 'Best Seller',
      category: 'Immune Support',
    },
    {
      id: 3,
      name: 'Probiotic Complex 50 Billion',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 234,
      category: 'Digestive Health',
    },
    {
      id: 4,
      name: 'Magnesium Glycinate 400mg',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 189,
      badge: 'Natural Formula',
      category: 'Sleep & Relaxation',
    },
    {
      id: 5,
      name: 'Turmeric Curcumin with BioPerine',
      price: 27.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 298,
      category: 'Joint Support',
    },
    {
      id: 6,
      name: 'Multivitamin for Women 50+',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 445,
      badge: 'Age-Specific',
      category: "Women's Health",
    },
    {
      id: 7,
      name: 'CoQ10 100mg Softgels',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'Heart Health',
    },
    {
      id: 8,
      name: 'Elderberry Immune Gummies',
      price: 22.99,
      originalPrice: 27.99,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 378,
      badge: 'Family Favorite',
      category: 'Immune Support',
    },
    {
      id: 9,
      name: 'Ashwagandha Root Extract',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 267,
      category: 'Stress Management',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Premium Health Supplements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pharmacist-approved wellness products to support your health journey. All supplements
            are third-party tested for purity and potency.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => router.push('/products')}
            >
              <Filter className="size-4" />
              Health Categories
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => router.push('/products')}
            >
              Condition
              <ChevronDown className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => router.push('/products')}
            >
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 9 of 2,500+ products</span>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => router.push('/products')}
            >
              Sort by: Pharmacist Recommended
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-muted">
                {product.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={
                      product.badge === 'Pharmacist Choice' || product.badge === 'Best Seller'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                  onClick={handleWishlist}
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} verified reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm" onClick={handleAddToCart}>
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" onClick={handleLoadMore}>
            Browse All Wellness Products
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Free shipping on orders over $75 • Licensed pharmacist support available
          </p>
        </div>
      </div>
    </section>
  );
}
