'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Truck, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const router = useRouter();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 2,
    3: 1,
  });

  // ACTION_PLACEHOLDER_START
  const handleCheckout = () => {
    router.push('/about'); // Proceed to checkout/billing
  };

  const handleContinueShopping = () => {
    router.push('/products'); // Return to product catalog
  };

  const handleRemoveItem = (itemId: number) => {
    const newQuantities = { ...quantities };
    delete newQuantities[itemId];
    setQuantities(newQuantities);
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + change),
    }));
  };
  // ACTION_PLACEHOLDER_END

  const cartItems = [
    {
      id: 1,
      name: 'Omega-3 Fish Oil Premium',
      price: 34.99,
      quantity: quantities[1] || 1,
      image: '/api/placeholder/100/100',
      variant: '1000mg - 60 capsules',
      badge: 'Pharmacist Choice',
    },
    {
      id: 2,
      name: 'Vitamin D3 + K2 Complex',
      price: 28.99,
      quantity: quantities[2] || 2,
      image: '/api/placeholder/100/100',
      variant: '5000 IU - 90 tablets',
      badge: 'Best Seller',
    },
    {
      id: 3,
      name: 'Probiotic Daily Support',
      price: 42.99,
      quantity: quantities[3] || 1,
      image: '/api/placeholder/100/100',
      variant: '50 Billion CFU - 30 capsules',
      badge: 'Natural',
    },
  ];

  const activeItems = cartItems.filter(item => quantities[item.id]);
  const subtotal = activeItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 75 ? 0 : 8.99; // Free shipping over $75
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Wellness Cart</h1>
          <p className="text-muted-foreground">
            {activeItems.length} {activeItems.length === 1 ? 'product' : 'products'} selected for
            your health journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {activeItems.map(item => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="size-24 rounded-lg bg-muted overflow-hidden flex-shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 left-1 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">
                        {item.badge}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.variant}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Shield className="size-3 text-primary" />
                            <span className="text-xs text-primary">Pharmacist Approved</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 hover:text-destructive"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <X className="size-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-r-none"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 rounded-l-none"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <Plus className="size-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <Button variant="outline" className="gap-2" onClick={handleContinueShopping}>
              <ArrowLeft className="size-4" />
              Browse More Wellness Products
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Health Savings Code</label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter wellness code" />
                    <Button variant="outline" size="icon">
                      <Tag className="size-4" />
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? 'text-primary' : ''}`}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-lg text-primary">${total.toFixed(2)}</span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Truck className="size-4 text-primary" />
                  <span className="text-sm">
                    {subtotal >= 75
                      ? 'Free shipping included!'
                      : `Add $${(75 - subtotal).toFixed(2)} for free shipping`}
                  </span>
                </div>

                {/* Pharmacist Note */}
                <div className="flex items-start gap-2 p-3 bg-primary/10 rounded-lg">
                  <Shield className="size-4 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary">Licensed Pharmacist Review</p>
                    <p className="text-muted-foreground">
                      All supplements verified for quality and safety
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full gap-2" size="lg" onClick={handleCheckout}>
                  <ShoppingBag className="size-5" />
                  Secure Checkout
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Trusted by 25,000+ health-conscious customers
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
