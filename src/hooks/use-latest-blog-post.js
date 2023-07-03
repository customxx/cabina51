import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
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

export default useLatestPost
