import { IoClose } from "react-icons/io5";
import logo from "./logo.svg";
import { links, social } from "./data";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="sidebar-btn" onClick={closeSidebar}>
          <IoClose />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
