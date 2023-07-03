import { graphql, useStaticQuery } from "gatsby"

const useFeaturedProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct(
        filter: { featureThisProduct: { eq: true } }
        sort: { fields: createdAt, order: DESC }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/products/{contentfulProduct.sku}")
          introduction {
            introduction
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

export default useFeaturedProduct
