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
  title: 'Ultra Series Fingerprint Terminals | Hikvision UAE',
  description: 'Premium fingerprint recognition terminals with superior accuracy and advanced features for high-security environments',
};

async function fetchFingerprintUltraSeriesProducts() {
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
              equals: 'fingerprint-terminals',
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
    console.error('Error fetching Fingerprint Ultra Series products:', error);
    return [];
  }
}

export default async function FingerprintUltraSeriesPage() {
  const products = await fetchFingerprintUltraSeriesProducts();
  
  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-8 bg-red-600 mr-3"></div>
            <h1 className="text-3xl font-bold">Ultra Series Fingerprint Terminals</h1>
          </div>
          <p className="text-gray-400 max-w-3xl">
            Experience unmatched security with Hikvision's Ultra Series Fingerprint Terminals. These premium biometric 
            devices feature superior fingerprint recognition algorithms, exceptional accuracy in all conditions, and 
            advanced anti-spoofing technology. Designed for high-security environments, government facilities, and 
            enterprise applications requiring the highest level of access control.
          </p>
        </div>
        
        <ProductFilter products={products} />
      </div>
    </div>
  );
}