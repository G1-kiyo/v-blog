import { Link } from "gatsby"
import React from "react"

const Header = () => (
    <header

        style={{
            marginBottom: `1.45rem`,
            height:600,
            backgroundImage: "url(" + require("../images/index.jpg") + ")"
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: 230,
                textAlign: `center`
            }}
        >
            <h1 style={{ margin: `0 auto`}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                        magin:`0 auto`
                    }}
                >
                    Vitalik Buterin 博客中文站
                </Link>
            </h1>
        </div>
    </header>
)

export default Header
