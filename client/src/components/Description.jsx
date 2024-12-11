import { motion } from "framer-motion";

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <p className="text-slate-200 text-center sm:text-start text-xs font-semibold mb-4" > JEWELLERY STORE APP SUITE</p>
            <h1 className="text-3xl  font-bold text-center sm:text-start text-white">
                Simplified Operations,<br/>
                Increased Profits.
            </h1>
            <p className="mt-5 text-center sm:text-start text-slate-300">
                AURUMM revolutionizes the way jewellery stores operate, offering seamless solutions for gold saving schemes, online sales platforms, and inventory management. Streamline operations, increase productivity and double your revenue with our longstanding cutting-edge solutions!
                Welcome to a future of innovation, efficiency, and brilliance.
                Welcome to AURUMM.
            </p>

        </motion.div>
    );
};

export default Description;
