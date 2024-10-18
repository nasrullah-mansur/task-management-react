import Container from "../../components/Container";
import logo from '../../images/logo.png';
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <div className="py-4 border-b">
        <Container className="flex justify-between items-center">
            <img src={logo} alt="Brand Logo" />
            <MdOutlineLightMode className="text-xl cursor-pointer" />
        </Container>
    </div>
  )
}

export default Header