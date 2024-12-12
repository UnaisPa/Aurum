const stats = [
    { id: 1, name: 'Clients', value: '50+' },
    { id: 2, name: 'Downloads', value: '10K+' },
    { id: 3, name: 'Client Revenue Increase', value: '72%' },
  ]

//   export default function Example() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//             {stats.map((stat) => (
//               <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
//                 <dt className="text-base/7 text-gray-600">{stat.name}</dt>
//                 <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                   {stat.value}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     )
//   }

import { motion } from "framer-motion";

const Stats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-slate-100">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-100 sm:text-8xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </motion.div>
    );
};

export default Stats;

