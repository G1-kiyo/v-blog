// JavaScript source code

import React from "react"
import { Helmet } from "react-helmet"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import { BackTop } from 'antd'
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

    
    const mark = data.markdownRemark
    const key = mark.frontmatter.id
    return (
        <div className="blog-post-container">
            <Helmet title={data.site.siteMetadata.title} />
            <div className="blog-post">
                <SEO title={data.site.siteMetadata.title} />
                <header class='title'>
                    <a href='https://www.baidu.com'><img id='v_picture' alt="Ê×Ò³" src='https://i.ibb.co/YXLFt1G/1.jpg'/></a>        
	            </header>
                <div>
                    <div class='menu'>
                        {data.allMarkdownRemark.nodes.map(list => {
                            return(
                            <li>
                                <a href={list.frontmatter.path} key={key}>{list.frontmatter.title}</a>
                            </li>
                                )
                        })}
                    </div>

                    <div class='intro'>
                        <hr style={{backgroundColor:`#d9bae8`, width:300, float:`left`}}/>
                            <p>
                                <br />
                                {mark.frontmatter.description}
		                    </p>
                        <hr style={{backgroundColor:`#d9bae8`,width:900, float:`right`}}/>
                                
                            <div class='main-word'>
                                <h1>{mark.frontmatter.title}</h1>
                                <div
                                     className="blog-post-content"
                                     dangerouslySetInnerHTML={{ __html: mark.html }}
                            />
                                <BackTop>
                                    <div style={style}>UP</div>
                                </BackTop>
                            </div>
                                
	                </div>
                </div>
            </div>
        </div>
    )
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
        nodes {
            frontmatter {
                id
                path
                title
            }
      }
    }
    markdownRemark {
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


