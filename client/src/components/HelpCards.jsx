import { motion } from "framer-motion";
import { HiBadgeCheck, HiChatAlt2, HiCheckCircle } from "react-icons/hi";
import { HiCube, HiUserGroup } from "react-icons/hi2";
const HelpCards = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="sm:flex w-full gap-5 mt-16" >
                <div className="w-full  mt-10 sm:mt-0 sm:w-1/4 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    {/* <button className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md" >
                        <img className="w-5" src="/symbol.aurumm.svg" /> AU PAY
                    </button> */}
                    <HiBadgeCheck color="white" size={70} />
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >All-Round Assistance</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-4 text-slate-400 text-sm" >Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.</p>
                    {/* <button className="text-sm text-slate-200 font-semibold mt-4 bg-gradient-to-r from-[#34503a]  to-[#625539] hover:from-[#3b5b42]  hover:to-[#6f603f] border-yellow-800 px-4 py-2 rounded-lg " >Get Started</button> */}
                </div>

                <div className="w-full mt-10 sm:mt-0 sm:w-1/4 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937]  hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <HiUserGroup color="white" size={70} />
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >Relationship Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-4 text-slate-400 text-sm" >Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!</p>
                </div>

                <div className="w-full  mt-10 sm:mt-0 sm:w-1/4 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937]  hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <HiChatAlt2 color="white" size={70} />
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >Technical Support</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-4 text-slate-400 text-sm" >Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!</p>
                </div>

                <div className="w-full  mt-10 sm:mt-0 sm:w-1/4 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937]  hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <HiCube color="white" size={70} />
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >Stay Ahead</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-4 text-slate-400 text-sm" >We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!</p>
                </div>

            </div>

        </motion.div>
    );
};

export default HelpCards;
