//ant design
import { Card, Row, Col } from "antd";
//styles
import "./Services.css";

const { Meta } = Card;

const servicesdata = [
  {
    id: 0,
    title: "Çilingir Murat",
    img: "https://cilingirgetir.com/image/cilingir-1.jpg",
    tel: "0555 555 55 55",
  },
  {
    id: 1,
    title: "Su Tesisatçısı Gültepe",
    img:
      "https://www.vakittesisat.com/wp-content/uploads/2019/10/fatih-su-tesisatcisi-768x439.jpg",
    tel: "0555 555 55 55",
  },
  {
    id: 2,
    title: "Profesyonel Ev Temizliği",
    img:
      "https://www.acrtemizlik.com/images/hizmet/3b8a0913ff507eaed69cde08c142af8b.jpg",
    tel: "0555 555 55 55",
  },
  {
    id: 3,
    title: "Ütü Hizmeti",
    img: "http://www.bebekli.com.tr/site/images/service-image-4.jfif",
    tel: "0555 555 55 55",
  },
  {
    id: 4,
    title: "Kombi Teknik Servis",
    img: "https://caliskanteknikservis.com/images/servisss.jpg",
    tel: "0555 555 55 55",
  },
  {
    id: 5,
    title: "Beyaz Eşya Teknik Servis",
    img:
      "https://www.tamirveservis.com/wp-content/uploads/2020/12/beyaz-esya-teknik-servisi.png",
    tel: "0555 555 55 55",
  },
  {
    id: 6,
    title: "Çocuk Bakıcısı",
    img:
      "https://blog.joker.com.tr/wp-content/uploads/2018/09/bebek-bakicisi-arayanlar.png",
    tel: "0555 555 55 55",
  },
  {
    id: 7,
    title: "Hasta/Yaşlı Bakımı",
    img:
      "https://icdn.turkiyegazetesi.com.tr/images/haberler/2016_01/buyuk/hasta-ve-yasli-bakimi-egitim-programi-basladi--1452792330.jpg",
    tel: "0555 555 55 55",
  },
  {
    id: 8,
    title: "Damacana Su Servisi",
    img:
      "https://hakanticaret.net/wp-content/uploads/damacana_795041551-300x200.jpg",
    tel: "0555 555 55 55",
  },
];

function Services() {
  return (
    <Row gutter={[16, 16]}>
      {servicesdata.map((service) => (
        <Col
          xxl={8}
          lg={8}
          md={12}
          sm={24}
          xs={24}
          key={service.id}
          className="services_col"
        >
          <Card
            hoverable
            style={{ width: 300, height: 320 }}
            cover={
              <img
                alt="example"
                src={service.img}
                style={{ width: 300, height: 200 }}
              />
            }
          >
            <Meta
              title={service.title}
              description={`Telefon: ${service.tel}`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Services;
