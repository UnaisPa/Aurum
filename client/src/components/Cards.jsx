import { motion } from "framer-motion";

const Cards = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="sm:flex w-full gap-5" >
                <div className="w-full  mt-10 sm:mt-0 sm:w-1/3 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <button className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md" >
                        <img className="w-5" src="/symbol.aurumm.svg" /> AU PAY
                    </button>
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >An Exclusive Gold Savings Scheme Payment App</h2>
                    <hr className="border-slate-700 mt-4" />
                    <p className="mt-4 text-slate-400 text-sm" >Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.</p>
                    <button className="text-sm text-slate-200 font-semibold mt-4 bg-gradient-to-r from-[#34503a]  to-[#625539] hover:from-[#3b5b42]  hover:to-[#6f603f] border-yellow-800 px-4 py-2 rounded-lg " >Get Started</button>
                </div>

                <div className="w-full mt-10 sm:mt-0 sm:w-1/3 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937]  hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <button className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md" >
                        <img className="w-5" src="/symbol.aurumm.svg" /> AU SALES
                    </button>
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >All-Round Inventory Management Assistant</h2>
                    <hr className="border-slate-700 mt-4" />
                    <p className="mt-4 text-slate-400 text-sm" >If you`'`re looking for a holistic store management solution, then AU Sales is the only app you need1</p>
                    <button className="text-sm text-slate-200 font-semibold mt-4 bg-gradient-to-r from-[#34503a]  to-[#625539] hover:from-[#3b5b42]  hover:to-[#6f603f] border-yellow-800 px-4 py-2 rounded-lg " >Get Started</button>
                </div>

                <div className="w-full  mt-10 sm:mt-0 sm:w-1/3 border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937]  hover:from-[#293131] hover:to-[#293648] transform hover:sm:scale-110 transition duration-200 ease-in-out cursor-pointer" >
                    <button className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md" >
                        <img className="w-5" src="/symbol.aurumm.svg" /> AU SHOP
                    </button>
                    <h2 className="text-slate-200 mt-4 font-semibold mb-2" >Give Your Fine Jewellery A Sleek Online Platform!</h2>
                    <hr className="border-slate-700 mt-4" />
                    <p className="mt-4 text-slate-400 text-sm" >Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let's begin!</p>
                    <button className="text-sm text-slate-200 font-semibold mt-4 bg-gradient-to-r from-[#34503a]  to-[#625539] hover:from-[#3b5b42]  hover:to-[#6f603f] border-yellow-800 px-4 py-2 rounded-lg " >Get Started</button>
                </div>

            </div>

        </motion.div>
    );
};

export default Cards;
