import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { ProductFilter } from '@/components/ProductFilter';
import type { Product as PayloadProduct } from '@/payload-types';

// Define the expected Product type for the ProductFilter component
interface Product {
  id: string;
  title: string;
  description?: string;
  heroImage?: {
    url: string;
  };
  slug: string;
  meta?: {
    description?: string;
  };
}

export const metadata = {
  title: 'Ultra Series Controllers | Hikvision UAE',
  description: 'Ultra-series access control controllers with advanced security features',
};

async function fetchControllerUltraSeriesProducts() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Query products with specific series and type
    const result = await payload.find({
      collection: 'products',
      depth: 1,
      where: {
        and: [
          {
            mainCategory: {
              equals: 'access-control',
            },
          },
          {
            productType: {
              equals: 'controllers',
            },
          },
          {
            series: {
              equals: 'ultra-series',
            },
          },
        ],
      },
      limit: 100,
    });
    
    // Transform the products to match the expected Product interface
    const products: Product[] = result.docs.map((product: PayloadProduct) => ({
      id: product.id,
      title: product.title,
      description: product.shortDescription || product.meta?.description || '',
      heroImage: typeof product.heroImage === 'string'
        ? { url: product.heroImage }
        : product.heroImage && typeof product.heroImage === 'object' && 'url' in product.heroImage && product.heroImage.url
          ? { url: product.heroImage.url as string }
          : undefined,
      slug: product.slug,
      meta: {
        description: product.meta?.description as string | undefined
      }
    }));
    
    return products;
  } catch (error) {
    console.error('Error fetching Controller Ultra Series products:', error);
    return [];
  }
}

export default async function ControllersUltraSeriesPage() {
  const products = await fetchControllerUltraSeriesProducts();
  
  return (
    <div className="bg-white text-gray-900 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Ultra Series Controllers</h1>
        <p className="text-gray-600 mb-8">Coming soon - Ultra-series access control controllers with advanced security features</p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            <li>• High-capacity door control</li>
            <li>• Advanced encryption</li>
            <li>• Network connectivity</li>
            <li>• Integration capabilities</li>
          </ul>
        </div>
        
        <ProductFilter products={products} />
      </div>
    </div>
  );
}