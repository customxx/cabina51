import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          url
          createdAt(formatString: "DD MMMM, YYYY")
          introduction {
            introduction
          }
        }
      }
    }
  `)

  return data.allContentfulPost.nodes
}

export default useAllBlogPost
