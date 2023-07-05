import { Layout } from "antd";
import RecentProducts from "../../../components/DashBoard/RecentProducts";
const Dashboard = () => {
  const { Header, Content, Sider } = Layout;
  return (
    <div>
    <RecentProducts />
  </div>
  );
};

export default Dashboard;
