export default {
  name: 'popularProducts',
  type: 'document',
  title: 'Popular Products',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Popular Product Title',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Popular Product Price',
    },
    {
      name: 'rank',
      type: 'number',
      title: 'Popular Product Rank',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Popular Product Image',
    },
  ],
}
