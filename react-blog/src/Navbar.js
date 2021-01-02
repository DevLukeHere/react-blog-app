const Navbar = () => {
  const newBlogStyle = {
    color: '#ffff',
    backgroundColor: '#f1356d',
    borderRadius: '8px',
  }

  return ( 
    <nav className="navbar">
      <h1>Simple React Blog Page</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={newBlogStyle}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;