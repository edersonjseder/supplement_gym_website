export default {
  name: 'bestSellers',
  type: 'document',
  title: 'Best Seller Products',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Best Seller Title',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Best Seller Price',
    },
    {
      name: 'rank',
      type: 'number',
      title: 'Best Seller Rank',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Best Seller Image',
    },
  ],
}
