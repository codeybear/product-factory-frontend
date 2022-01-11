import {TasksComponentProps} from "../interfaces";
import {Avatar, Button, Col, Row, Divider, Typography} from "antd";
import React from "react";

const TasksMobile = ({tasks, openTaskDetail}: TasksComponentProps) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Row key={index} style={{minWidth: 350,marginBottom: 10}}>
                    <Col style={{minWidth: 350}}>
                        <Row justify={"start"} align={"middle"} style={{flexWrap: "nowrap"}}>
                            <Avatar size={32} shape="circle" src={task.product.avatar}/>
                            <Typography.Text strong style={{
                                fontSize: 14,
                                fontFamily: "Roboto",
                                marginLeft: 5
                            }}>{task.title}</Typography.Text>
                        </Row>
                        <Row align={"middle"} justify={"space-between"}>
                            <Col style={{marginLeft:'10px', marginTop:'10px'}}>
                                <Typography.Text style={{fontSize: 12, fontFamily: "Roboto"}}>
                                    {task.expertise.length === 0 
                                    ?
                                        null
                                    : 
                                        <Col style={{marginLeft:'0px', marginBottom:'10px', fontFamily:'Roboto', fontSize:'12px', borderRadius:'3px', backgroundColor:'rgb(245, 245, 245)', color:'rgb(89, 89, 89)', padding:'3px', paddingLeft:'5px', paddingRight:'5px', alignSelf:'start'}}>{task.category.name + ' ' + '(' + task.expertise.map((exp, index) => index === 0 ? exp.name : ' ' + exp.name  )+ ')'}</Col>
                                    }
                                </Typography.Text>
                            </Col>
                        </Row>
                        <Row justify={"space-between"} align={"middle"}>
                            <Col style={{marginLeft: 30}}>
                                <Typography.Text style={{
                                    fontSize: 14,
                                    fontFamily: "Roboto",
                                    color: "rgba(0, 0, 0, 0.45)",
                                    marginRight: 9
                                }}>
                                    {task.date} days ago
                                </Typography.Text>
                            </Col>
                            <Col>
                                <Button style={{
                                    padding: 0,
                                    border: "none"
                                }} onClick={() => openTaskDetail(index)}>
                                    <Typography.Text style={{
                                        textDecoration: "underline #1D1D1B",
                                        color: "#1D1D1B",
                                        fontSize: 14,
                                        fontFamily: "Roboto",
                                    }}>View Delivery Details</Typography.Text></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Divider/>
                </Row>)
            )}
        </>
    )
}

export default TasksMobile;
