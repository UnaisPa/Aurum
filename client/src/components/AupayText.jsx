


import { motion } from "framer-motion";

const AupayText = ({ type, head, desc, text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >

            <button className=" px-3 mx-auto mt-5 sm:mt-0 sm:mx-0 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md" >
                <img className="w-5" src="/symbol.aurumm.svg" /> AU {type}
            </button>
            <h1 className=' text-4xl font-bold mt-5 bg-gradient-to-r from-[#66AA74]  to-[#D7B56D] text-transparent bg-clip-text'>{head}</h1>
            <h1 className='text-4xl font-semibold text-slate-300 mt-4' >{desc}</h1>
            {text ? <p className="text-xs text-slate-400 mt-3" >
                {text}
            </p> : <><div className='w-3/5 mt-7 h-5 hidden sm:block  rounded-lg border border-b-0 border-slate-700' >

            </div>
                <div className='w-3/5 ml-auto  h-5 hidden sm:block  rounded-lg border border-b-0 border-slate-700' >

                </div></>}



        </motion.div>
    );
};

export default AupayText;


