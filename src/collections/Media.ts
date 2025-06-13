import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Image URL',
      admin: {
        description: 'Upload your image to Cloudinary and paste the URL here',
      },
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
