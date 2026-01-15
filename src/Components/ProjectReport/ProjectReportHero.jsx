import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import GST from "../../assets/GST.jpg"

const ProjectReportHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-12  overflow-hidden bg-background-light  dark:bg-slate-950">
        <div className="absolute inset-0 gradient-bg opacity-5 dark:opacity-20 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Content - Compact spacing */}
            <div className="flex flex-col justify-center space-y-5 z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-300 text-[10px] font-black tracking-widest uppercase w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                </span>
                Startup India Recognized
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Professional{" "}
                <span className="text-blue-600">Project Report</span> for Bank
                Loans.
              </h1>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-snug max-w-lg">
                A project report is a roadmap to success. For bank loans,
                borrowers must present a detailed business report. We craft
                documents that satisfy highest banking standards.
              </p>
              {/* 
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">₹799</span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹2,499
                  </span>
                </div>
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      alt="Client"
                      className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                      src={`https://i.pravatar.cc/100?u=${i}`}
                    />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                  Trusted by 2k+ Startups
                </p>
              </div> */}

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all active:scale-95 text-sm"
                >
                  Get Enquirer Now
                </button>
                {/* <button className="group flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300 py-3 px-5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    play_circle
                  </span>
                  How it works
                </button> */}
              </div>
            </div>

            {/* Right Visual - Flex Stretch */}
            <div className="relative flex items-stretch">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

              <div className="relative w-full min-h-[350px] rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex-grow">
                <img
                  alt="Professional Financial Reporting"
                  className="w-full h-full object-cover"
                  src={GST}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-0.5">
                        Success Rate
                      </p>
                      <p className="text-base font-bold text-slate-900 dark:text-white">
                        98.5% Approval
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">
                        trending_up
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan="Project Report"
      />
    </>
  )
}

export default ProjectReportHero
