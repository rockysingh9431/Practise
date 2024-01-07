import { LOGO_CDN_URL } from "../config";
import titleLogo from "../assets/foodvilla.png"
const Title = () => {
  return (
    <div className="logo">
      <img
        src={titleLogo}
        alt="logo"
      />
    </div>
  );
};
export default Title;
