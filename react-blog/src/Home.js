import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title:"Hello World!", body:"Blah...blah...blah...", author: "Batman", id: 1},
    { title:"Happy New Year 2021!", body:"Blah...blah...blah...", author: "Wonder Woman", id: 2},
    { title:"React Blogs are the Best!", body:"Blah...blah...blah...", author: "Superman", id: 3}
  ]);

  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;