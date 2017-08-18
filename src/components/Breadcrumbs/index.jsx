import React from 'react'
import {Breadcrumb} from 'antd';
const BreadCrumbs =(...props)=> (
      <div className="breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
);
export default BreadCrumbs