export default {
  name: 'brands',
  type: 'document',
  title: 'Brands',
  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Brand Item Number',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Brand Item Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Brand Item Image',
    },
  ],
}
