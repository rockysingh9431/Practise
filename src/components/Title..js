import {Link} from "react-router-dom"
import titleLogo from "../assets/foodvilla.png"
const Title = () => {
  return (
    <div>
      <Link to="/">
        <img data-testid="logo" className="h-20 pl-3" src={titleLogo} alt="logo" />
      </Link>
    </div>
  );
};
export default Title;
