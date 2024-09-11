import { useGlobalContext } from "../context/context";
import { IoMdClose } from "react-icons/io";
import { links, social } from "../data";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} className="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <IoMdClose />
        </button>
      </div>

      <ul className="link">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                <span className="link-icon">{icon}</span>
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((socials) => {
          const { id, url, icon } = socials;
          return (
            <li key={id}>
              <a href={url}> {icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
