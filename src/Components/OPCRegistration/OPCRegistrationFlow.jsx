import { motion } from "framer-motion"

const OPCRegistrationFlow = () => {
  const steps = [
    {
      title: "Name Availability",
      desc: "Search and reserve your unique company name through MCA's 'RUN' service.",
    },
    {
      title: "Obtain DSC",
      desc: "Procure Class-3 Digital Signature Certificate for secure electronic filings.",
    },
    {
      title: "Drafting Docs",
      desc: "Legal drafting of MOA, AOA, and other mandatory incorporation forms.",
    },
    {
      title: "Form Submission",
      desc: "Online submission of SPICe+ form to the Ministry of Corporate Affairs.",
    },
    {
      title: "COI Issuance",
      desc: "Upon verification, ROC issues the Certificate of Incorporation with CIN.",
    },
    {
      title: "Start Business",
      desc: "Open your bank account and commence your professional operations!",
    },
  ]

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
            6-Step Registration Flow
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Our streamlined process gets you registered in record time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white text-sm font-black mb-4 shadow-lg shadow-blue-500/20">
                {i + 1}
              </div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OPCRegistrationFlow
