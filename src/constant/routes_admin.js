//components
import Announcement from "../routes_admin/Announcement";
import Expense from "../routes_admin/Expense";
import Users from "../routes_admin/Users";
import Chat from "../routes_admin/Chat";
import SugCom from "../routes_admin/SugCom";
import Bills from "../routes_admin/Bills";
import FormSugCom from "../routes_admin/SugCom/components/FormSugCom";
import FormAnnouncement from "../routes_admin/Announcement/components/FormAnnouncement";
import FormExpense from "../routes_admin/Expense/components/FormExpense";
import FormUsers from "../routes_admin/Users/components/FormUsers";

export const routes = [
  {
    id: 0,
    path: "/sug-com",
    title: "Şikayet ve İstek",
    components: <SugCom />,
  },
  {
    id: 1,
    path: "/announcement",
    title: "Duyurular",
    components: <Announcement />,
  },
  {
    id: 2,
    path: "/new-announcement",
    title: "Yeni Duyuru Ekle",
    components: <FormAnnouncement />,
  },
  {
    id: 3,
    path: "/chat",
    title: "Sohbet Odası",
    components: <Chat />,
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
    path: "/bills",
    components: <Bills />,
  },
  {
    id: 7,
    path: "/expense",
    components: <Expense />,
  },
  {
    id: 8,
    path: "/new-expense",
    title: "Yeni Gider Ekle",
    components: <FormExpense />,
  },
  {
    id: 9,
    path: "/users",
    components: <Users />,
  },
  {
    id: 10,
    path: "/new-users",
    title: "Yeni Üye Ekle",
    components: <FormUsers />,
  },
];
