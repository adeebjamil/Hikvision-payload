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
  title: 'Pro Series Card Terminals | Hikvision UAE',
  description: 'Professional-grade card reader terminals with advanced features for enterprise access control systems',
};

async function fetchCardTerminalsProSeriesProducts() {
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
              equals: 'card-terminals',
            },
          },
          {
            series: {
              equals: 'pro-series',
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
    console.error('Error fetching Card Terminals Pro Series products:', error);
    return [];
  }
}

export default async function CardTerminalsProSeriesPage() {
  const products = await fetchCardTerminalsProSeriesProducts();
  
  return (
    <div className="bg-white text-gray-900 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Pro Series Card Terminals</h1>
        <p className="text-gray-600 mb-8">Coming soon - Professional-grade card reader terminals with advanced features for enterprise access control systems</p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
          <ul className="space-y-2">
            <li>• Multi-format Card Readers</li>
            <li>• Proximity Card Terminals</li>
            <li>• Smart Card Solutions</li>
            <li>• Biometric Integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}