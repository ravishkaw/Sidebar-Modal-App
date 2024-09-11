import { useGlobalContext } from "../context/context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars onClick={openSidebar} />
      </button>
      <button onClick={openModal} className="modal-btn">
        Open Modal
      </button>
    </main>
  );
};
export default Home;
