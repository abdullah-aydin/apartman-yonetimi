//components
import Dashboard from "../routes/Dashboard";
import Analytics from "../routes/Analytics";
import Chat from "../routes/Chat";
import SugCom from "../routes/SugCom";
import FormSugCom from "../routes/SugCom/components/FormSugCom";
import Market from "../routes/Market/Market";
import ShoppingList from "../routes/Market/components/ShoppingList";
import Services from "../routes/Services";

export const routes = [
  {
    id: 0,
    path: "/dashboard",
    title: "Anasayfa",
    components: <Dashboard />,
  },
  {
    id: 1,
    path: "/analytics",
    title: "Gider Tablosu",
    components: <Analytics />,
  },
  {
    id: 2,
    path: "/chat",
    title: "Sohbet Odası",
    components: <Chat />,
  },
  {
    id: 3,
    path: "/sug-com",
    title: "Şikayet ve İstek",
    components: <SugCom />,
  },
  {
    id: 4,
    path: "/sug-com",
    title: "Şikayet ve İstek",
    components: <SugCom />,
  },
  {
    id: 5,
    path: "/new-sug-com",
    title: "Yeni Şikayet veya İstek Ekle",
    components: <FormSugCom />,
  },
  {
    id: 6,
    path: "/services",
    title: "Hizmetler",
    components: <Services />,
  },
  {
    id: 7,
    path: "/market",
    components: <Market />,
  },
  {
    id: 8,
    path: "/shopping-list",
    components: <ShoppingList />,
  },
];
