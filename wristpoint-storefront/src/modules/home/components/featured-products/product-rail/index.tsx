import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }
  // console.log({products});


  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Explore all Products
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-24">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
    // <div className="content-container py-12 small:py-24">
    //   <div className="flex justify-between mb-8">
    //     <Text className="txt-xlarge">{collection.title}</Text>
    //     <InteractiveLink href={`/collections/${collection.handle}`}>
    //       Explore all Products
    //     </InteractiveLink>
    //   </div>
    //   <ul className="grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-1 gap-x-6 gap-y-24 lg:gap-y-24">
    //     {products &&
    //       products.map((product) => (
    //         <li key={product.id}>
    //           <ProductPreview
    //             productPreview={product}
    //             region={region}
    //             isFeatured
    //           />
    //         </li>
    //       ))}
    //   </ul>
    // </div>
  )
}
