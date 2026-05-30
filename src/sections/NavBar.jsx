const NavBar = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <nav>
      <img src={base + "/images/nav-logo.svg"} className="scale-90" />
      <img src={base +" /images/menu.svg"} className="w-10" />
    </nav>
  );
};

export default NavBar;
