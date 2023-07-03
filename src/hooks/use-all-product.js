import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          sku
          price
          introduction {
            introduction
          }
          description {
            raw
          }
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return data.allContentfulProduct.nodes
}

export default useAllProduct
