import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';

// ant design
import { Card, Col, Row, Button, Tooltip, Input, Select } from "antd";
const { Option } = Select;
const { TextArea } = Input;

function FormSugCom() {
    const { handleSubmit, reset, setValue, control } = useForm();
    const [data, setData] = useState(null);   
    return (
<form onSubmit={handleSubmit((data) => setData(data))} className="form">
            <section>
      <label>Antd Select</label>
      <Controller
        control={control}
        name="AntdSelect"
        as={
          <Select defaultValue="lucy">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        }
      />
    </section>
            <section>
            <label>Antd Input</label>
            <Controller
                placeholder="AntD Input"
                as={TextArea}
                rows={6}
                control={control}
                name="AntdInput"
            />
            </section>
            <Button type="submit" shape="round" size='large'>
          GÖNDER
        </Button>

            </form>
    )
}

export default FormSugCom
