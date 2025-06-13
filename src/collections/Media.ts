import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'cloudinaryUrl',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
  ],
  upload: {
    // For Vercel, disable local storage
    staticDir: process.env.NODE_ENV === 'production' ? undefined : 'media',
    mimeTypes: ['image/*'],
    
    // We'll add Cloudinary upload logic via API routes
  },
}
