const Navbar = () => {
  return (
    <div className="Navbar flex justify-between p-4 items-center">
      <div id="logoBrand" className='font-bold text-5xl font-nunito'>
        <span className='text-yellow-500 mr-3'>Burger</span>
        <span className='text-king'>King</span>
      </div>
      <div id="menuButton" className='border border-solid rounded-md lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-1 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div id="navList" className='hidden'>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Feature</li>
          <li>Chef</li>
          <li>Menu</li>
          <li>Booking</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;