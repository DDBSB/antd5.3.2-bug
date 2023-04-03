import './App.css';
import {Button, List, Popover, Select, Tooltip} from "antd";
import {useState} from "react";
import {FilterOutlined} from "@ant-design/icons";

const Option = Select.Option

function App() {

  const [open, setOpen] = useState(false)

  const [listData, setListData] = useState([])

  const column = [
    {
      "column_name": "id",
      "description": "系统编号"
    },
    {
      "column_name": "name",
      "description": "数据名称"
    },
    {
      "column_name": "security_level",
      "description": "安全级别"
    },
    {
      "column_name": "unique_columns",
      "description": "唯一主键"
    },
    {
      "column_name": "create_time",
      "description": "创建时间"
    },
  ]

  const onChange = (value, index) => {
    console.log("onChange", value, index)
    const data = [...listData]
    data[index] = column.filter(i => i.column_name === value)[0]
    setListData(data)
  }

  const content = <div style={{width: "200px"}}>
    {/*<List>*/}
    {/*  {listData.map((i, index) => {*/}
    {/*    return <List.Item>*/}
    {/*      <Select key={index} value={i?.column_name ?? ""}*/}
    {/*              onChange={(key) => onChange(key, index)}*/}
    {/*              style={{width: "150px"}}>*/}
    {/*        {column.map(col => {*/}
    {/*          return <Option key={col.column_name} value={col.column_name}>*/}
    {/*            {col.description ?? col.column_name}*/}
    {/*          </Option>*/}
    {/*        })}*/}
    {/*      </Select>*/}
    {/*    </List.Item>*/}
    {/*  })}*/}
    {/*</List>*/}
    <List
      bordered
      dataSource={listData}
      renderItem={(i, index) => (
        <Select key={index} value={i?.column_name ?? ""}
                onChange={(key) => onChange(key, index)}
                style={{width: "150px"}}>
          {column.map(col => {
            return <Option key={col.column_name} value={col.column_name}>
              {col.description ?? col.column_name}
            </Option>
          })}
        </Select>
      )}
    />

    <Button onClick={() => {
      const data = [...listData]
      data.push({})
      setListData(data)
    }}>
      增加
    </Button>
    <Button onClick={() => setListData([])}>
      重置
    </Button>
  </div>

  return (<div className="App">
    <header className="App-header">
      <Popover key={"filter"} content={content} trigger={"click"} placement="bottomLeft" open={open}
               onOpenChange={(bool) => setOpen(bool)}>
        <Tooltip title={"高级筛选"}>
          <Button type="text" icon={<FilterOutlined/>}></Button>
        </Tooltip>
      </Popover>
    </header>
  </div>);
}

export default App;
