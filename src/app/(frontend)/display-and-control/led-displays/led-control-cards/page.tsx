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
  title: 'LED Control Cards | Hikvision UAE',
  description: 'Advanced LED control card solutions for managing content display and synchronization across LED display systems',
};

async function fetchLEDControlCardProducts() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Query products with specific category
    const result = await payload.find({
      collection: 'products',
      depth: 1,
      where: {
        and: [
          {
            mainCategory: {
              equals: 'display-and-control',
            },
          },
          {
            productType: {
              equals: 'led-display',
            },
          },
          {
            subType: {
              equals: 'led-control-cards',
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
    console.error('Error fetching LED Control Card products:', error);
    return [];
  }
}

export default async function LEDControlCardsPage() {
  const products = await fetchLEDControlCardProducts();
  
  return (
    <div className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-8 bg-red-600 mr-3"></div>
            <h1 className="text-3xl font-bold">LED Control Cards</h1>
          </div>
          <p className="text-gray-400 max-w-3xl">
            Discover Hikvision's specialized LED Control Card solutions, the essential hardware components 
            that power and manage LED display systems. These high-performance control cards provide precise 
            synchronization, content management, and signal processing capabilities to ensure smooth, high-quality 
            visual output across LED displays. With advanced features like remote management and multiple input 
            interfaces, they're ideal for both simple and complex LED display installations.
          </p>
        </div>
        
        <ProductFilter products={products} />
      </div>
    </div>
  );
}