// ant design icons
import {
  ShoppingCartOutlined,
  HomeOutlined,
  LineChartOutlined,
  CommentOutlined,
  ExclamationCircleOutlined,
  ApartmentOutlined


} from "@ant-design/icons";


export const sidebarMenu = [
  {
    id: 0,
    name: "Anasayfa",
    url: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    id: 1,
    name: "Gider Tablosu",
    url: "/analytics",
    icon: <LineChartOutlined />,
  },
  {
    id: 2,
    name: "Sohbet Odası",
    url: "/chat",
    icon: <CommentOutlined />,
  },
  {
    id: 3,
    name: "Şikayet ve İstek",
    url: "/sug-com",
    icon: <ExclamationCircleOutlined />,
  },
  {
    id: 4,
    name: "Market",
    url: "/market",
    icon: <ShoppingCartOutlined />,
  },
   {
    id: 5,
    name: "Hizmetler",
    url: "/services",
    icon: <ApartmentOutlined  />,
  },
];
