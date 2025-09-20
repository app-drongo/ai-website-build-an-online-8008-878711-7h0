'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Productgrid() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);

  // ACTION_PLACEHOLDER_START
  const handleAddToCart = (productId: number) => {
    router.push('/products');
  };
  const handleToggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };
  const handleLoadMore = () => {
    router.push('/products');
  };
  // ACTION_PLACEHOLDER_END

  const products = [
    {
      id: 1,
      name: 'Omega-3 Fish Oil Capsules',
      price: 24.99,
      originalPrice: 32.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 342,
      badge: 'Best Seller',
      category: 'Heart Health',
    },
    {
      id: 2,
      name: 'Vitamin D3 + K2 Complex',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 189,
      badge: 'New Formula',
      category: 'Bone Health',
    },
    {
      id: 3,
      name: 'Probiotic Daily Support',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 456,
      category: 'Digestive Health',
    },
    {
      id: 4,
      name: 'Turmeric Curcumin Extract',
      price: 21.99,
      originalPrice: 27.99,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 278,
      badge: 'Sale',
      category: 'Joint Support',
    },
    {
      id: 5,
      name: 'Magnesium Glycinate 400mg',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 167,
      category: 'Sleep & Relaxation',
    },
    {
      id: 6,
      name: 'Multivitamin Complete',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 523,
      badge: 'Pharmacist Choice',
      category: 'Daily Wellness',
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
            Pharmacist-approved vitamins and supplements for optimal wellness
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Health Category
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Brand
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Showing 6 of 48 products</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Best Rated
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
                    variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className={`absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background ${
                    favorites.includes(product.id) ? 'opacity-100' : ''
                  }`}
                  onClick={() => handleToggleFavorite(product.id)}
                >
                  <Heart
                    className={`size-4 ${favorites.includes(product.id) ? 'fill-primary text-primary' : ''}`}
                  />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
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
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
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
                <Button
                  className="w-full group/btn"
                  size="sm"
                  onClick={() => handleAddToCart(product.id)}
                >
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
            View All Supplements
          </Button>
        </div>
      </div>
    </section>
  );
}
