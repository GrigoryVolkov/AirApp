import React from 'react';
import { Collapse, Space } from 'antd';
const { Panel } = Collapse;

function Levels(props) {
    return (
        <>
            <h1 className="heading">About AQI Levels</h1>
            <div className="collapseDiv">
              <Collapse defaultActiveKey={['2']} className="collapse" accordion>
                <Panel header="Good (0-50)" key="1">
                  <div>
                    <Space>
                      <span className="message" style={{background: 'rgb(45, 217, 2)'}}> Health message </span> None.
                    </Space>
                  </div>
                </Panel>
                <Panel header="Moderate (51-100)" key="2">
                  <div>
                    <Space>
                      <span className="message" style={{background: 'rgb(224, 209, 0)'}}> Health message </span> Unusually sensitive people should reduce prolonged or heavy exertion.
                    </Space>
                  </div>
                </Panel>
                <Panel header="Unhealthy for Sensitive Groups (101-150)" key="3">
                  <div>
                    <Space>
                      <span className="message" style={{background: 'rgb(235, 111, 9)'}}> Health message </span> Sensitive groups should reduce prolonged or heavy exertion.
                    </Space>
                  </div>
                </Panel>
                <Panel header="Unhealthy (151-200)" key="4">
                  <div>
                    <Space>
                      <span className='message messageWhite' style={{background: 'rgb(255,0,0)'}}> Health message </span> Sensitive groups should avoid prolonged or heavy exertion; general public should reduce prolonged or heavy exertion.
                    </Space>
                  </div>
                </Panel>
                <Panel header="Very Unhealthy (201-300)" key="5">
                  <div>
                    <Space>
                      <span className='message messageWhite' style={{background: 'rgb(128,0,128)'}}> Health message </span> Sensitive groups should avoid all physical activity outdoors; general public should avoid prolonged or heavy exertion.
                    </Space>
                  </div>
                </Panel>
                <Panel header="Hazardous (301-500)" key="6">
                  <div>
                    <Space>
                      <span className='message messageWhite' style={{background: 'rgb(128,0,0'}}> Health message </span> Everyone should avoid all physical activity outdoors.
                    </Space>
                  </div>
                </Panel>
              </Collapse>
            </div>
        </>
    );
  }

export default Levels;