import { motion } from "framer-motion"
import { Shield, Lock, Info, Link, CreditCard, HelpCircle } from "lucide-react"

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "scope",
      title: "Scope of This Policy",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-green-500 to-green-600",
    },
    {
      id: "information",
      title: "Information We Collect",
      icon: <Lock className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-teal-500 to-teal-600",
    },
    {
      id: "security",
      title: "Data Security and Protection",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-red-500 to-red-600",
    },
    {
      id: "rights",
      title: "Your Rights and Choices",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      id: "thirdparty",
      title: "Third-Party Services and Links",
      icon: <Link className="w-6 h-6" />,
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      id: "payment",
      title: "Payment Processing",
      icon: <CreditCard className="w-6 h-6" />,
      gradient: "from-pink-500 to-pink-600",
    },
    {
      id: "refund",
      title: "Refund and Cancellation Policy",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-lime-500 to-lime-600",
    },
    {
      id: "legal",
      title: "Legal Framework",
      icon: <Info className="w-6 h-6" />,
      gradient: "from-violet-500 to-violet-600",
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <HelpCircle className="w-6 h-6" />,
      gradient: "from-emerald-500 to-emerald-600",
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is our priority at Incorplus Venture
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <span className="material-symbols-outlined">schedule</span>
              <span>Last updated: January 14, 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                Table of Contents
              </h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={index}>
                      <a
                        href={`#${section.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.gradient} flex items-center justify-center text-white`}
                        >
                          {section.icon}
                        </motion.div>
                        <span className="text-sm">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-12"
          >
            {/* Introduction */}
            <motion.section
              id="introduction"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Introduction
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  At Incorplusventure, we are dedicated to safeguarding the
                  personal information you share with us when accessing our
                  website at https://incorplusventure.com/. We understand the
                  importance of privacy and are committed to transparency
                  regarding how we collect, use, and protect your data. This
                  Privacy Policy outlines our practices for handling information
                  collected through our platform and services.
                </p>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/30">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold">
                    Important: By using our website and services, you consent to
                    the practices described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Scope */}
            <motion.section
              id="scope"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                Scope of This Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                This Privacy Policy applies to all users who visit our website,
                register for our services, or engage with Incorplusventure in
                any capacity. It covers all forms of data collection, whether
                automatic or manually provided by users.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section
              id="information"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white">
                  <Lock className="w-5 h-5" />
                </div>
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Automatically Collected Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    When you visit our website, we automatically collect certain
                    technical information through various means, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>IP address and geographic location data</li>
                    <li>
                      Browser type and version (Chrome, Firefox, Safari, Edge,
                      etc.)
                    </li>
                    <li>
                      Operating system information (Windows, macOS, Linux,
                      mobile OS)
                    </li>
                    <li>Device characteristics and unique identifiers</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring and exit pages</li>
                    <li>Click patterns and user behavior analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Information You Provide
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    In the course of our business relationship, we may collect
                    additional information including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    <li>
                      Contact details (name, email, phone number, address)
                    </li>
                    <li>Business information and service preferences</li>
                    <li>Communication records and correspondence</li>
                    <li>Service agreements and transaction history</li>
                    <li>Payment information and billing details</li>
                    <li>Feedback and support inquiries</li>
                  </ul>
                  <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800/30">
                    <p className="text-purple-800 dark:text-purple-200">
                      Note: Providing personal information is voluntary, but
                      certain information is necessary for us to deliver our
                      services effectively.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section
              id="usage"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                We process your information for legitimate business purposes,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Service Delivery:</strong> To provide requested
                  services and respond to your inquiries
                </li>
                <li>
                  <strong>Communication:</strong> To send updates,
                  notifications, and information about our services
                </li>
                <li>
                  <strong>Customer Support:</strong> To provide technical
                  assistance and resolve service issues
                </li>
                <li>
                  <strong>Business Operations:</strong> To maintain records,
                  process transactions, and manage our relationship
                </li>
                <li>
                  <strong>Analytics:</strong> To understand user behavior and
                  improve our services
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To meet regulatory
                  requirements and enforce our terms of service
                </li>
                <li>
                  <strong>Marketing:</strong> To inform you about relevant
                  services and opportunities (with your consent)
                </li>
              </ul>
              <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30">
                <p className="text-orange-800 dark:text-orange-200">
                  We base our data processing on your explicit consent,
                  contractual necessity, legitimate business interests, and
                  legal obligations. You have the right to withdraw consent at
                  any time by contacting us at privacy@incorplusventure.com.
                </p>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section
              id="cookies"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Cookies and Tracking Technologies
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our website uses cookies and similar technologies to enhance
                  your browsing experience. Cookies are small files stored on
                  your device that help us:
                </p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                  You can manage cookie preferences through your browser
                  settings. However, disabling cookies may affect certain
                  website features and functionality.
                </p>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              id="security"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center text-white">
                  <Shield className="w-5 h-5" />
                </div>
                Data Security and Protection
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We implement comprehensive security measures to protect your
                  personal information:
                </p>
                <ul>
                  <li>
                    <strong>Technical Safeguards:</strong> Encryption, secure
                    servers, and regular security updates
                  </li>
                  <li>
                    <strong>Physical Security:</strong> Restricted access to
                    facilities and equipment
                  </li>
                  <li>
                    <strong>Administrative Controls:</strong> Employee training
                    and access limitations
                  </li>
                  <li>
                    <strong>Regular Monitoring:</strong> Continuous security
                    assessments and improvements
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We follow industry-standard practices for data protection and
                  retain information only as long as necessary for business and
                  legal purposes. While we implement robust security measures,
                  no system is completely secure, and we cannot guarantee
                  absolute protection against all potential threats.
                </p>
              </div>
            </motion.section>

            {/* Rights */}
            <motion.section
              id="rights"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Your Rights and Choices
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  You have several rights regarding your personal information:
                </p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request copies of your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request removal of your personal
                    data
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a
                    structured format
                  </li>
                  <li>
                    <strong>Objection:</strong> Opt out of certain data
                    processing activities
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </div>
            </motion.section>

            {/* Third Party */}
            <motion.section
              id="thirdparty"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-white">
                  <Link className="w-5 h-5" />
                </div>
                Third-Party Services and Links
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our website may contain links to external websites or integrate
                with third-party services. We are not responsible for the
                privacy practices of these external sites. We recommend
                reviewing the privacy policies of any third-party services you
                access through our platform.
              </p>
            </motion.section>

            {/* Payment */}
            <motion.section
              id="payment"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center text-white">
                  <CreditCard className="w-5 h-5" />
                </div>
                Payment Processing
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  All payments for Incorplusventure services are processed
                  through secure, authorized payment gateways. We accept
                  payments via:
                </p>
                <ul>
                  <li>Bank transfers (NEFT, RTGS, IMPS)</li>
                  <li>Digital payment platforms</li>
                  <li>Credit and debit cards</li>
                  <li>Other secure payment methods</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We do not store complete payment card information on our
                  servers. All transactions are processed in compliance with
                  applicable financial regulations.
                </p>
              </div>
            </motion.section>

            {/* Refund */}
            <motion.section
              id="refund"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Refund and Cancellation Policy
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Eligibility for Refunds
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Refund eligibility is determined based on our service
                    agreements and the specific circumstances of each case. All
                    refund requests are subject to review and approval.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Refund Process
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    To request a refund:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    <li>
                      Submit a written request to our customer service team
                    </li>
                    <li>Provide necessary documentation and account details</li>
                    <li>Allow up to 30 business days for processing</li>
                    <li>
                      Receive confirmation and refund through original payment
                      method
                    </li>
                  </ol>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.section
              id="updates"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-lime-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Updates to This Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. Significant
                changes will be communicated through our website or direct
                notification. Your continued use of our services after policy
                updates constitutes acceptance of the revised terms.
              </p>
            </motion.section>

            {/* Legal */}
            <motion.section
              id="legal"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center text-white">
                  <Info className="w-5 h-5" />
                </div>
                Legal Framework
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                This Privacy Policy is governed by Indian law and regulations.
                Any disputes arising from this policy will be resolved through
                arbitration in accordance with the Arbitration and Conciliation
                Act, 2016. The arbitration proceedings will be conducted in
                English, with the venue in New Delhi, India.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              id="contact"
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                  <HelpCircle className="w-5 h-5" />
                </div>
                Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                For questions, concerns, or requests regarding this Privacy
                Policy, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">
                    mail
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium">
                    Email: privacy@incorplusventure.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">
                    language
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium">
                    Website: https://incorplusventure.com/
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">
                    schedule
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium">
                    Response Time: We aim to respond to all inquiries within 48
                    hours.
                  </span>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
