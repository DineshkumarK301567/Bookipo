import React, { useState, useEffect } from 'react';
import Today from './Today';
import Tommorow from './Tommorow';
import NextDay from './Nextday';


import { Tabs } from 'antd';


  const items = [
    {
      key: '1',
      label: 'Today',
      children: <Today />
    },
    {
      key: '2',
      label: 'Tommorow',
      children: <Tommorow />,
    },
    {
      key: '3',
      label: '31 June Monday',
      children: <NextDay />,
    },
  ];

export default function BookingSlot() {


    return (
        <div>
           <Tabs defaultActiveKey="1" items={items}/>
        </div>
    )
}