
// ant design style
import { Layout } from "antd";

const { Content } = Layout;

function Main() {
    return (
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
    )
}

export default Main
