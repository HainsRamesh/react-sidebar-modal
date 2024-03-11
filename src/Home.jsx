import { useGlobalContext } from "./Context";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="burger">
        <GiHamburgerMenu />
      </button>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
    </main>
  );
};
export default Home;
