import { useEffect, useState } from "react";
import Container from "../../components/Container";
import logo from '../../images/logo.png';
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  let [theme, setTheme] = useState(false);

  useEffect(() => {

    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);

  return (
    <div className="py-4 border-b border-solid dark:border-[#666]">
      <Container className="flex justify-between items-center">
        <img src={logo} className="dark:brightness-200 " alt="Brand Logo" />
        <MdOutlineLightMode onClick={() => setTheme(!theme)} className={`text-xl cursor-pointer ${theme && 'text-white'}`} />
      </Container>
    </div>
  )
}

export default Header