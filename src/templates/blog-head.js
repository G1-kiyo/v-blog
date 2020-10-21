// JavaScript source code

import React from "react"
import { Helmet } from "react-helmet"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import { BackTop, Divider } from 'antd'
import "../components/blog.css"


// import '../css/blog-post.css';



export default function Template({ data }) {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };

    const { markdownRemark } = data;
    
   
    return (
        <>
        <header id='header'>
            <a href='https://www.baidu.com'><img id='v_picture' alt="Ê×Ò³" src='https://i.ibb.co/YXLFt1G/1.jpg' /></a>
        </header>
        <div id="blog-post-container">
            <Helmet title={data.site.siteMetadata.title} />
            <SEO title={data.site.siteMetadata.title} />
                
                <div id='intro' className="column">
                    <Divider orientation="left" style={{ color: `#d9bae8` }}>摘要</Divider>
                    <p>
                        <br />
                        {markdownRemark.frontmatter.description}
                    </p>
                    <Divider style={{ backgroundColor: `#d9bae8` }} />

                    <div id='main-word'>
                        <h1>{markdownRemark.frontmatter.title}</h1>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                        />
                        <BackTop>
                            <div style={style}>UP</div>
                        </BackTop>
                    </div>


                </div>
                <div id='menu' className="column">
                        {data.allMarkdownRemark.nodes.map(list => {
                            return (
                                <li>
                                    <a href={list.frontmatter.path} key={list.frontmatter.id}>{list.frontmatter.title}</a>
                                </li>
                            )
                        })}
                </div>

               
                <div id="tutor" class="column">
                测试
                </div>    
        </div>
        <div id="footer">
                脚注
        </div>    
        </>
    )
}

export const pageQuery = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
        nodes {
            fields {
                slug
            }
            frontmatter {
                date
                description
                id
                path
                title
            }
      }
    }
    markdownRemark{
        html
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          path
          id
        }
      }
    }
  
`




