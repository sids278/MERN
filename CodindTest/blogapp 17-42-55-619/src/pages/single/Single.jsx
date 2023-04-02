import "./single.css";
import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}