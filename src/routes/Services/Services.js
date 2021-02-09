import { Card, Row, Col } from "antd";

const { Meta } = Card;

const servicesdata = [
  {
    id: 0,
    title: "Çilingir Murat",
    img: "https://cilingirgetir.com/image/cilingir-1.jpg",
    tel: "055 555 55",
  },
  {
    id: 1,
    title: "Su Tesisatçısı Gültepe",
    img: "https://www.vakittesisat.com/wp-content/uploads/2019/10/fatih-su-tesisatcisi-768x439.jpg",
    tel: "055 555 55",
  },
  {
    id: 2,
    title: "Profesyonel Ev Temizliği",
    img: "https://www.betatemizlik.com/images/ev_temizligi.jpg",
    tel: "055 555 55",
  },
  {
    id: 3,
    title: "Ütü Hizmeti",
    img: "http://www.bebekli.com.tr/site/images/service-image-4.jfif",
    tel: "055 555 55",
  },
  {
    id: 4,
    title: "Özel Ders",
    img: "https://www.ozelders.xyz/wp-content/uploads/2020/04/matematik-ozel-ders-istanbul-300x211.jpeg",
    tel: "055 555 55",
  },
  {
    id: 5,
    title: "Beyaz Eşya/Kombi Teknik Servis",
    img: "https://www.tamirveservis.com/wp-content/uploads/2020/12/beyaz-esya-teknik-servisi.png",
    tel: "055 555 55",
  },
  {
    id: 6,
    title: "Çocuk Bakımı",
    img: "https://blog.joker.com.tr/wp-content/uploads/2018/09/bebek-bakicisi-arayanlar.png",
    tel: "055 555 55",
  },
  {
    id: 7,
    title: "Hasta/Yaşlı Bakımı",
    img: "https://icdn.turkiyegazetesi.com.tr/images/haberler/2016_01/buyuk/hasta-ve-yasli-bakimi-egitim-programi-basladi--1452792330.jpg",
    tel: "055 555 55",
  },
  {
    id: 8,
    title: "Damacana Su Servisi",
    img: "https://hakanticaret.net/wp-content/uploads/damacana_795041551-300x200.jpg",
    tel: "055 555 55",
  },
  
];

function Services() {
  return (
    <Row gutter={[16, 16]}> 
    {
        servicesdata.map((service)=>(

            <Col xxl={8} lg={8} md={8} sm={24} xs={24} key={service.id} >
            <Card
              hoverable
              style={{ width: 340,height:323 }}
              cover={
                <img
                  alt="example"
                  src={service.img}
                />
              }
            >
              <Meta title={service.title} description= {`Telefon: ${service.tel} `}/>
            </Card>
          </Col>

        ))
    }
     
    </Row>
  );
}

export default Services;
