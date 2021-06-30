import React, { useState } from "react";
import { Row, Col, Button, Select, Layout, Space, Tabs } from "antd";
import ProductTab from "./ProductTab";
import TaskTab from "./TaskTab";
import CreatePersonModal from "../CreatePersonModal";

const { Option } = Select;
const { Content } = Layout;
const { TabPane } = Tabs;


const Dashboard: React.FunctionComponent = () => {
  const [tabkey, setTabkey] = useState("tasks");
  const [filterModal, setFilterModal] = useState(false);
  const [createPersonModal, setCreatePersonModal] = useState<boolean>(false);

  const onChnageKey = (key: any) => {
    setTabkey(key);
  };

  const extraTabButtons = () => {
    if (tabkey !== "products")
      return (
        <Button type="primary" onClick={() => setFilterModal(!filterModal)}>
          Filter
        </Button>
      );
  };

  return (
    <Content className="container main-page">
      <div className="mobile-select-tab">
        <Select
          style={{ width: "130px" }}
          onChange={onChnageKey}
          value={tabkey}
        >
          <Option key="tasks" value="tasks">
            Tasks
          </Option>
          <Option key="products" value="products">
            Products
          </Option>
        </Select>
        <div className="extra">{extraTabButtons()}</div>
      </div>
      <Row gutter={50} className="mb-40">
        <Col md={24}>
          <Tabs
            activeKey={tabkey}
            className="main-tab"
            onChange={onChnageKey}
            tabBarExtraContent={extraTabButtons()}
          >
            <TabPane tab="Tasks" key="tasks">
              <TaskTab
                showInitiativeName={true}
                showProductName={true}
                setFilterModal={setFilterModal}
                filterModal={filterModal}
              />
            </TabPane>
            <TabPane tab="Products" key="products">
              <ProductTab/>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <CreatePersonModal modal={createPersonModal} closeModal={setCreatePersonModal}/>
    </Content>
  );
};

export default Dashboard;
