import Title from "./Title.";
const Header = () => {
  return (
    <>
      <div className="nav-items">
        <Title />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>login/Signup</li>
        </ul>
      </div>
    </>
  );
};
export default Header;