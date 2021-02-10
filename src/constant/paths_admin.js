// ant design icons
import {
  FormOutlined,
  NotificationOutlined,
  CommentOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const sidebarMenu = [
  {
    id: 0,
    name: "Şikayet ve İstek",
    url: "/sug-com",
    icon: <ExclamationCircleOutlined />,
  },
  {
    id: 1,
    name: "Duyurular",
    url: "/announcement",
    icon: <NotificationOutlined />,
  },
  {
    id: 2,
    name: "Apartman Giderleri",
    url: "/expense",
    icon: <LineChartOutlined />,
  },
  {
    id: 3,
    name: "Sohbet Odası",
    url: "/chat",
    icon: <CommentOutlined />,
  },
  {
    id: 4,
    name: "Üyeler",
    url: "/users",
    icon: <UserOutlined />,
  },
  {
    id: 5,
    name: "Faturalar",
    url: "/bills",
    icon: <FormOutlined />,
  },
];
