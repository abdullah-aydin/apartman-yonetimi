

import  TableSugCom  from "./components/TableSugCom";

// ant design
import { Card, Col, Row, Button } from "antd";

function SugCom() {


    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card bordered={true} className="card_chat">
            <Col
              xl={24}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="sugcom_section"
            >
                <TableSugCom/>
                <Button type="submit" shape="round" size='large'>
          İSTEK veya ŞİKAYET EKLE
        </Button>
       
        </Col>
        </Card>
      </Col>
    </Row>
    )
}

export default SugCom
