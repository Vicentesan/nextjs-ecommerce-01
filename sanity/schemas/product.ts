export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Products images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of a product'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Product category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    }
  ]
}