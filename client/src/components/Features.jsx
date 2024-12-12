import { motion } from "framer-motion";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CiCloudOn } from "react-icons/ci";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { MdOutlineSavings, MdAttachMoney } from "react-icons/md";
import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { HiOutlineChartBar } from "react-icons/hi2";
import { RiBillLine } from "react-icons/ri";
const Features = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="" >
                <Accordion defaultExpanded style={{
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <CiCloudOn size={24} className="mr-2" /> Cloud Support
                    </AccordionSummary>
                    <AccordionDetails>
                        Go digital and stay ahead with our all-round cloud support services
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{
                    marginTop: '7px',
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <MdOutlineSavings size={24} className="mr-2" /> Saving Scheme Management
                    </AccordionSummary>
                    <AccordionDetails>
                        Give your customers a comprehensive savings scheme management experience.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{
                    marginTop: '7px',
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <GoDatabase size={24} className="mr-2" />  Data Management
                    </AccordionSummary>
                    <AccordionDetails>
                        All your data - accessible anywhere, anytime. Organised in the easiest manner possible.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{
                    marginTop: '7px',
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <RiBillLine size={24} className="mr-2" />Estimation & Billing
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{
                    marginTop: '7px',
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <MdAttachMoney size={24} className="mr-2" />Cost Management
                    </AccordionSummary>
                    <AccordionDetails>
                        Keeping track of your expenses has never been easier.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{
                    marginTop: '7px',
                    background: 'linear-gradient(to right, #1d2222, #1f2937)', color: '#e2e8f0', border: 'solid 1px #334155', borderRadius: '8px'
                }} >
                    <AccordionSummary
                        expandIcon={<IoChevronDownOutline color="#e2e8f0" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <HiOutlineChartBar size={24} className="mr-2" />Reporting & Dashboard
                    </AccordionSummary>
                    <AccordionDetails>
                        Automated reports for actionable insights - managing your numbers is simple and easy!
                    </AccordionDetails>
                </Accordion>
            </div>

        </motion.div>
    );
};

export default Features;
