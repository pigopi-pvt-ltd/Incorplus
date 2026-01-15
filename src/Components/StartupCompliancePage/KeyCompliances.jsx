import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const complianceAreas = [
  {
    id: "labour",
    title: "Labour Law",
    desc: "Ensuring workplace safety, POSH act compliance, and adherence to Minimum Wages and Industrial Dispute Acts.",
    icon: "groups",
    content: (
      <>
        Labour laws in general deal with compliances under the Minimum Wages
        Act, Workmen’s Compensation Act, Industrial Dispute Acts, etc. <br />
        <br />
        The most important among these acts in compliance with provisions of
        Sexual Harassment of Women at Workplace Act which is often overlooked by
        the startups and later have to face a penalty for the same. Every
        employer by an order in writing has to form an Internal Complaints
        Committee under Section 4 of the act where women can register their
        Complaints regarding Sexual harassment. <br />
        <br />
        In case of non-compliance with the provisions of the act, a fine up to
        50 thousand rupees shall be imposed if the offense is repeated more than
        once punishment imposed can be twice of that imposed at the first
        instance. Non-compliance can also lead to cancellation of the employer’s
        license or withdrawal, non-renewal or cancellation of registration
        required for business by government or any other local authority.
      </>
    ),
  },
  {
    id: "enviro",
    title: "Environmental Law",
    desc: "Strict adherence to National Green Tribunal guidelines, preventing legal repercussions related to industrial emissions.",
    icon: "eco",
    content: (
      <>
        Increasing environmental awareness has made the laws related to the
        environment more stringent and non-compliance with them leads to higher
        penalties. <br />
        <br />
        Post the enactment of the National Green Tribunal Act, 2010, which
        incorporates all other environmental laws under its umbrella, the
        penalties for non-compliance with such laws have increased manifold.{" "}
        <br />
        <br />
        Section 26 (1) of NGT Act, 2010 states that the tribunal can award a
        fine up-to 10 crores and imprisonment of 3 years or both for the
        non-compliance of an order, award, or decision by NGT. In case of a
        continuing offence, the fine can be escalated up-to 25,000 Rupees per
        day until such continuance. <br />
        <br />
        In Sterlite Industries (I) Ltd. Vs. Union of India and Ors., Supreme
        Court imposed the penalty of Rs.100 Crores on Sterlite Industries for
        contravening the provisions of the Air Act and causing pollution beyond
        the permissible limits.
      </>
    ),
  },
  {
    id: "companies",
    title: "Companies Act",
    desc: "Managing AGMs, director appointments, mandatory filing of TAN/PAN, and professional board maintenance.",
    icon: "corporate_fare",
    content: (
      <>
        A startup that is incorporated as a company under the Companies Act,
        2013, must conform with its provisions. The Companies Act, 2013
        regulates the appointment of directors, the manner in which the annual
        general meeting and the board meeting is to be conducted, appointment of
        auditors, other basic requirements like having PAN (Permanent Account
        Number) and TAN (Tax Deduction and Collection Account Number), bank
        account, etc. after the incorporation. The businesses are expected to
        comply with the rules and regulations applicable to them to avoid the
        penalty that may be incurred in case of non-compliance.
      </>
    ),
  },
  {
    id: "income",
    title: "Income Tax Act",
    desc: "Timely filing of income tax returns and managing procedural liabilities to avoid heavy penalties and audits.",
    icon: "account_balance_wallet",
    content: (
      <>
        Every business is liable for filing of income tax returns and other
        procedural liabilities under the act. The Income Tax Act specifies a
        time limit for such filing and in case of any discrepancy, for an appeal
        to the higher authorities. It is essential that business, small or big,
        take such rules seriously and comply with them accordingly.
      </>
    ),
  },
  {
    id: "gst",
    title: "GST Compliance",
    desc: "Comprehensive GST registration, monthly filings, and tracking to ensure seamless business expansion.",
    icon: "receipt_long",
    content: (
      <>
        Businesses or startups having less than Rs.40 lakhs per annum turn over
        are exempted from being considered for GST registration. This provision
        will help small businesses rise at a faster pace without being liable to
        GST in the initial days of their growth. The amalgamation of multiple
        taxes under GST has facilitated the expansion of profits, specifically
        for startups. <br />
        <br />
        The benefits, however, do not release startups completely from their
        liability to comply with the provisions of GST. As the startup grows
        over time, it needs to comply with the rules under GST.
      </>
    ),
  },
]

const KeyCompliances = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
            Key Compliance <span className="text-blue-600">Areas</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-widest">
            Detailed legal solutions for every business structure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {complianceAreas.map((area) => (
            <motion.div
              key={area.id}
              layout
              className={`p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border transition-all duration-500 flex flex-col h-full ${
                expandedId === area.id
                  ? "border-blue-600 shadow-2xl shadow-blue-600/10 lg:col-span-2"
                  : "border-slate-100 dark:border-slate-800"
              }`}
            >
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 flex items-center justify-center rounded-2xl mb-8 text-blue-600">
                <span className="material-symbols-outlined text-3xl font-bold">
                  {area.icon}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">
                {area.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wide mb-6">
                {area.desc}
              </p>

              <AnimatePresence>
                {expandedId === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6 mb-8 font-medium">
                      {area.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() =>
                  setExpandedId(expandedId === area.id ? null : area.id)
                }
                className="mt-auto text-[10px] font-black text-blue-600 flex items-center gap-2 tracking-[0.2em] uppercase hover:gap-4 transition-all"
              >
                {expandedId === area.id ? "Show Less" : "Learn More"}
                <span className="material-symbols-outlined text-sm font-black">
                  arrow_forward
                </span>
              </button>
            </motion.div>
          ))}

          {/* Expert Support Card */}
          <div className="p-10 rounded-[2.5rem] bg-blue-600 text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-600/30 h-full min-h-[400px]">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
              Expert Support
            </h3>
            <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest mb-8">
              Tailored roadmaps for your specific industry.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-5 bg-white text-blue-600 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-colors"
            >
              Talk to Experts
            </button>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan="Startup Compliance"
      />
    </section>
  )
}

export default KeyCompliances
