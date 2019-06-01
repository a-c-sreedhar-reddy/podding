import React from "react"
import { graphql, Link } from "gatsby"
import PostTitle from '../components/PostTitle'
export default ({ data }) => {
  return (
    <div style={{paddingLeft:20}}>
      <div style={{paddingTop:10,fontSize:'3em',textAlign:'left',      color: "lightcoral",marginTop:20}}>Podding<span> 🎤</span></div>
      <div
        style={{
          display: 'flex',
          marginBottom:40,
          marginTop:10
        }}
      >
        <img
          src={"https://avatars0.githubusercontent.com/u/16081083?s=460&v=4"}
          alt={`A C SREEDHAR REDDY`}
          style={{
            marginBottom: 0,
            borderRadius: '50%',
            width:60,
            height:60,
            marginRight:20
          }}
        />
        <p style={{ maxWidth: 310, color:'white' }}>
            Blog by A C SREEDHAR REDDY
        </p>
      </div>

      {data && data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{marginBottom:50}}>
          <PostTitle title={node.frontmatter.title}/>
          <div style={{marginLeft:5, color:'white',marginTop:3}}>{node.frontmatter.date}</div>
          <div style={{marginLeft:5,color:'white',marginTop:3}}>{node.frontmatter.speaker}</div>
          <div style={{marginLeft:5,color:'white'}}>{node.frontmatter.language}</div>
          <audio controls style={{marginTop:15,marginLeft:0}}><source src={node.frontmatter.attachments[0].publicURL}/></audio>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            speaker
            language
            date(formatString: "MMMM DD, YYYY")
            attachments{
              publicURL
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
