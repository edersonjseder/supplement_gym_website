export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'img',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Product Title',
    },
    {
      name: 'reviews',
      type: 'number',
      title: 'Product Reviews',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'prevPrice',
      type: 'number',
      title: 'Product Previous Price',
    },
    {
      name: 'newPrice',
      type: 'number',
      title: 'Product New Price',
    },
    {
      name: 'brand',
      type: 'reference',
      title: 'Product Brand',
      to: [
        {
          type: 'brands',
        },
      ],
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product Category',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'flavours',
      type: 'array',
      title: 'Product Flavours',
      of: [{type: 'reference', to: [{type: 'flavour'}]}],
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
