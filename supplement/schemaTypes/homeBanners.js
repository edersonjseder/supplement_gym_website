export default {
  name: 'homeBanner',
  type: 'document',
  title: 'Home Banners',
  fields: [
    {
      name: 'index',
      type: 'number',
      title: 'Home Banner Order Index',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Home Banner Image',
    },
    {
      name: 'title1',
      type: 'string',
      title: 'Home Banner Title 1',
    },
    {
      name: 'title2',
      type: 'string',
      title: 'Home Banner Title 2',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Home Banner Sub-Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Home Banner Description',
    },
  ],
}
