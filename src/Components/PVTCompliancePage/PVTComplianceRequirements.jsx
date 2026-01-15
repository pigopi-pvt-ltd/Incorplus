import { motion } from "framer-motion"
import { CheckCircle, Clock, Calendar, FileText } from "lucide-react"

const PVTComplianceRequirements = () => {
  const oneTimeCompliances = [
    "Obtaining stationery Minutes binders",
    "Appointment of First Auditor",
    "Preparing and printing Share certificates",
    "Preparing the statutory registers in E Form",
  ]

  const quarterlyCompliances = [
    "Holding the Board Meeting",
    "Drafting the notice of BM",
    "Preparing minutes thereof",
    "Preparation of attendance sheets of the board meeting",
  ]

  const annualCompliances = [
    "Preparing the directors' disclosures of interest",
    "Preparing the declarations from the directors",
    "Drafting of Board's report",
    "Drafting of Annual return",
    "Obtaining the financials from Auditor",
    "Email ID of all the proposed directors",
    "Drafting the minutes for the pre AGM board meeting",
    "Auditor's reappointment Document preparation",
    "Preparation of Annual General Meeting Minutes",
    "Filling of AOC 4, ADT 1, MGT 7 with attachments",
    "Statutory Auditing (upto 300 transactions or ₹10 Lakhs turnover)",
    "Accounting Entries (upto 300 entries, ₹1 per additional entry)",
    "Filing of form ITR 6 for Income Tax Return",
  ]

  const statutoryRegisters = [
    "Register of shares",
    "Register of Members",
    "Register of Directors",
    "Incorporation documents of the company",
    "Resolutions of the meetings of the Board",
    "Minutes of Board Meetings and AGM",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">
            Compliance Requirements
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
            What are the Compliances your company is Liable to fulfill?
          </p>
        </motion.div>

        {/* Self-Compliance Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-24 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Self-Compliance Requirements
          </h3>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl">
                  storefront
                </span>
                Office Board Display
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Every company is required to fix a board outside the registered
                office. The board should contain the name of the company and
                registered address. Information must be printed in English and
                the regional language.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Letterhead & Invoice Requirements
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Every letterhead and invoice must contain: Full company name,
                registered address, telephone number, Corporate Identity Number
                (CIN), and Email ID. Name in header, CIN No., registered office
                address, and email ID in footer.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl">
                  language
                </span>
                Website Requirements
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                The official website must display on landing/home page:
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Name of the company
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Address of registered office
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Corporate Identity Number (CIN)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Email Address
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Contact person for queries or grievances
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Compliance Timeline */}
        <div className="space-y-16">
          {/* One Time Compliance */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
              >
                <Clock className="w-7 h-7" />
              </motion.div>
              <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                One Time Compliance
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {oneTimeCompliances.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quarterly Compliance */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
              >
                <Calendar className="w-7 h-7" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Quarterly Compliance
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  After Every 90 Days
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {quarterlyCompliances.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Annual Compliance */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-blue-600 text-3xl">
                  event
                </span>
              </motion.div>
              <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                Annual Compliance
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {annualCompliances.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Income Tax Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-800/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-orange-600 text-3xl">
                account_balance
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Income Tax Return Filing
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">
                  Calculation and Quarterly Payment of Advance Tax
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">
                  Filing of Income Tax Returns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">
                  Tax Audit – Mandatory if sales exceed ₹1 Crore
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">
                  Filing of Tax Audit Report
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Statutory Registers */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
              >
                <FileText className="w-7 h-7" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Maintaining Statutory Registers
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Required by Company Law
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {statutoryRegisters.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-200 dark:border-slate-800"
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PVTComplianceRequirements
