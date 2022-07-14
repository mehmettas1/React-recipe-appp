

const Navbar = () => {
  return (
    <nav>
     <div>
     <i>{"<Mehmet/>"}</i>
      <span>Recipe</span>
      <div>
        <Link to= "/">Home</Link>
        <Link to= "about">About</Link>
        <Link to= "register">Register</Link>
        <Link to= "login">Logout</Link>
      </div>
     </div>

    </nav>
  )
}

export default Navbar
