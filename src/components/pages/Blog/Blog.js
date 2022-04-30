import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog-container">    
                <div className="blog">
                    <h2>What is different between JavaScript and NodeJs ?</h2>
                    <p>JavaScipt is programming language. It is runs web browsers.NodeJs is a javascirpt runtime enviroment.NodeJS use for communicate the backend server.NodeJs helps run javascirpt code without web browser.NodeJs use V8 engine for run javascirpt code outside the browser . Javascipt use for client side but NodeJs use for server side . </p> <hr />
                   
                </div>
                <div className="blog">
                    <h2>When should you use NodeJs and When should you use mongoDB ?</h2>
                    <p>When i nedd to call api from client side ,then i have to use NodeJs for creating API . When we need to store data ,then we use mongodb for storing data
                    without NodeJs we can not connect with mongodb database system.</p> <hr />
                </div>
                <div className="blog">
                    <h2>Different between SQL and NoSQL ?</h2>
                    <p>SQL is Vertically Scalable but NoSQL is horizontal Scalable.SQL database system are good for complex queries But NoSQL database system are not good for complex queries. <br /> SQL are fixed and static schema but NoSQL have dyanamically schema.SQL is tablebase database system , but NoSQL is document ,key database system.</p> <hr />
                </div>
                <div className="blog">
                    <h2>What is the purpose of JWT and how it works ?</h2>
                    <p>JWT- stand for Json Web Token .jwt use for pass identity of users between identity provider and and services provider.When a user login completed ,at the same time ,A client application send web token to the backend API .  </p> <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;