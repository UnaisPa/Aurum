import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AupayText from './AupayText';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='w-full'  >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className=' flex justify-center items-center'>
                    <Tabs className='w-auto ' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab style={{ color: 'white' }} className='text-slate-200 border' label="AU PAY" {...a11yProps(0)} />
                        <Tab style={{ color: 'white' }} label="AU sales" {...a11yProps(1)} />
                        <Tab style={{ color: 'white' }} label="AU shop" {...a11yProps(2)} />
                    </Tabs>
                </div>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 ' >
                        <img className='w-10/12 mx-auto sm:mx-0 sm:ml-auto' src='/aupay.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2' >
                        <AupayText type='PAY' head='The Golden Gold App' desc="We're Making Jewellery Scheme
                    Payments Easier." />
                    </div>

                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 ' >
                        <img className='w-10/12 mx-auto sm:mx-0 sm:ml-auto' src='/ausales.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2' >
                        <AupayText type='SALES' head='The Hybrid ERP Magic' desc="Inventory Management Excellence
In Every Tap." />
                    </div>

                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 ' >
                        <img className='w-6/12 mx-auto sm:mx-0 sm:ml-auto' src='/aushop.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2' >
                        <AupayText type='SHOP' head='Open Your Shop To World' desc="A Smooth Jewellery Shopping
Experience." />
                    </div>

                </div>
            </CustomTabPanel>
        </div>
    );
}
