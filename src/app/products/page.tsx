import ProductGrid from '@/components/sections/products/ProductGrid'
import Cta from '@/components/sections/products/Cta'
import Cart from '@/components/sections/products/Cart'

export default function ProductsPage() {
  return (
    <>
      <ProductGrid />
      <Cta />
      <Cart />
    </>
  )
}