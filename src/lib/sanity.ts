import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: '11g5r4ao',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

export function urlFor(source: any) {
  // TODO: FIX TYPE
  return builder.image(source)
}
