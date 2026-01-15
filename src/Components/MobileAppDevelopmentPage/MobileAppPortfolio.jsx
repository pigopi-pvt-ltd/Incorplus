import React from "react"
import { motion } from "framer-motion"

const MobileAppPortfolio = () => {
  const portfolioItems = [
    {
      title: "E-Commerce Mobile App",
      description: "iOS & Android • React Native",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0tZ3c4gJ7q0Kx2s8fQ3q5f1b9r6v8n7m2k3j4h5i6l7o9p0q2r5s8t1u4v7w0x3y6z9A2b5c8d1e4f7g0h3i6j9k2l5m8n1o4p7q0r3s6t9u2v5w8x1y4z7A0b3c6d9e2f5g8h1i4j7k0l3m6n9o2p5q8r1s4t7u0v3w6x9y2z5A8b1c4d7e0f3g6h9i2j5k8l1m4n7o0p3q6r9s2t5u8v1w4x7y0z3A6b9c2d5e8f1g4h7i0j3k6l9m2n5o8p1q4r7s0t3u6v9w2x5y8z1A4b7c0d3e6f9g2h5i8j1k4l7m0n3o6p9q2r5s8t1u4v7w0x3y6z9",
      category: "Shopping",
    },
    {
      title: "Fitness Tracker App",
      description: "iOS & Android • Flutter",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0tZ3c4gJ7q0Kx2s8fQ3q5f1b9r6v8n7m2k3j4h5i6l7o9p0q2r5s8t1u4v7w0x3y6z9A2b5c8d1e4f7g0h3i6j9k2l5m8n1o4p7q0r3s6t9u2v5w8x1y4z7A0b3c6d9e2f5g8h1i4j7k0l3m6n9o2p5q8r1s4t7u0v3w6x9y2z5A8b1c4d7e0f3g6h9i2j5k8l1m4n7o0p3q6r9s2t5u8v1w4x7y0z3A6b9c2d5e8f1g4h7i0j3k6l9m2n5o8p1q4r7s0t3u6v9w2x5y8z1A4b7c0d3e6f9g2h5i8j1k4l7m0n3o6p9q2r5s8t1u4v7w0x3y6z9",
      category: "Health",
    },
    {
      title: "Food Delivery App",
      description: "iOS & Android • Swift/Kotlin",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0tZ3c4gJ7q0Kx2s8fQ3q5f1b9r6v8n7m2k3j4h5i6l7o9p0q2r5s8t1u4v7w0x3y6z9A2b5c8d1e4f7g0h3i6j9k2l5m8n1o4p7q0r3s6t9u2v5w8x1y4z7A0b3c6d9e2f5g8h1i4j7k0l3m6n9o2p5q8r1s4t7u0v3w6x9y2z5A8b1c4d7e0f3g6h9i2j5k8l1m4n7o0p3q6r9s2t5u8v1w4x7y0z3A6b9c2d5e8f1g4h7i0j3k6l9m2n5o8p1q4r7s0t3u6v9w2x5y8z1A4b7c0d3e6f9g2h5i8j1k4l7m0n3o6p9q2r5s8t1u4v7w0x3y6z9",
      category: "Food",
    },
  ]

  return (
    <div className="relative flex w-full flex-col bg-background-light dark:bg-background-dark py-20">
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center">
        <div className="max-w-6xl w-full flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 dark:border-slate-700 pb-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold">
                Mobile App Portfolio
              </h2>
              <p className="text-[#4c6c9a] dark:text-slate-400">
                Check out our successful mobile app projects
              </p>
            </div>
            <a
              className="text-blue-600 font-bold hover:underline flex items-center gap-1"
              href="#"
            >
              View All Works
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-700">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt={`${item.title} mobile app interface`}
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  ></div>
                </div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4c6c9a] dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileAppPortfolio
