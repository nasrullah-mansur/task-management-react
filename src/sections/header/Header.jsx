import { useEffect, useState } from "react";
import Container from "../../components/Container";
import logo from '../../images/logo.png';
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  // Check local storage and set the theme on initial load
  const [theme, setTheme] = useState(localStorage.getItem('themeMode') || 'light');

  // Update the document class and localStorage whenever theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('themeMode', theme);
  }, [theme]);

  // Handle the theme toggle
  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="py-4 border-b border-solid dark:border-[#666]">
      <Container className="flex justify-between items-center">
        <img src={logo} className="dark:brightness-200 " alt="Brand Logo" />
        <MdOutlineLightMode
          onClick={themeHandler}
          className={`text-xl cursor-pointer ${theme === 'dark' && 'text-white'}`}
        />
      </Container>
    </div>
  );
}

export default Header;
