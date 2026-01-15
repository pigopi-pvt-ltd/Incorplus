import React from "react"
import { motion } from "framer-motion"

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 sm:p-12"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Welcome
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Welcome to Incorplus Ventures ("Company", "we", "our", "us"). By
                accessing or using our website https://www.incorplusventures.com
                ("Website"), applications, forms, or services ("Services"), you
                agree to comply with and be bound by these Terms & Conditions
                ("Terms"). If you do not agree, you must not use our Website or
                Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Consultancy Services Disclaimer
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Incorplus Ventures provides consultancy services limited to
                areas such as:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed mb-4 space-y-2">
                <li>Business incorporation and compliance assistance</li>
                <li>Preparation and drafting of business-related documents</li>
                <li>Start-up legal advisory and documentation support</li>
                <li>Pitch deck preparation and financial reporting</li>
                <li>Website development and digital marketing solutions</li>
                <li>Certification support and related professional services</li>
                <li>
                  Other consultancy services as required by today's start-ups to
                  effectively run and grow their businesses.
                </li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We strive to offer guidance tailored to the evolving needs of
                modern enterprises. However, it is expressly clarified that:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed mt-2 space-y-2">
                <li>
                  Incorplus Ventures is a consultancy service provider only.
                </li>
                <li>
                  We are not affiliated, associated, or in collaboration with
                  any Government or Non-Government Agency, Institution,
                  Organization, or Department.
                </li>
                <li>
                  Any regulatory or government-related processes facilitated
                  through our consultancy are subject to the applicable
                  authority's rules and decisions, and the client remains solely
                  responsible for compliance.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Some Services may involve third-party partners. You may be
                required to accept their additional terms and conditions. Third
                parties may contact you directly via email or phone. Incorplus
                Ventures is not liable for third-party products, services, or
                privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                All content, documents, text, graphics, logos, videos, and
                software on this Website are the property of Incorplus Ventures
                or its licensors. You may use forms or documents only for your
                personal or internal business purposes. Copying, modifying,
                reselling, or redistributing our materials without permission is
                strictly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                User Responsibilities
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                When using our Website or Services, you agree not to:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed mt-2 space-y-2">
                <li>
                  Upload defamatory, obscene, abusive, illegal, or offensive
                  content.
                </li>
                <li>
                  Infringe on any copyright, trademark, or intellectual property
                  rights.
                </li>
                <li>Upload malware, viruses, or harmful software.</li>
                <li>Use our Services for fraudulent or misleading purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                To the maximum extent permitted by law, Incorplus Ventures, its
                directors, employees, and affiliates are not liable for
                indirect, incidental, consequential, or punitive damages,
                including but not limited to loss of profits, data, goodwill, or
                legal claims. Any liability, if found, shall be limited to the
                amount paid by you for the specific service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Indemnification
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                You agree to indemnify and hold harmless Incorplus Ventures, its
                employees, affiliates, and partners from any claims, damages,
                liabilities, costs, and expenses (including legal fees) arising
                from your use of our Services, violation of these Terms, or
                infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Refund & Cancellation Policy
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                This Policy consists of the procedure to be followed and terms
                and conditions applied and considered for Refund and
                Cancellation in regards to Services provided by Incorplus
                Ventures.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                i. Eligibility Requirements for Refund
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                The eligibility for a refund shall be determined strictly in
                accordance with the terms and conditions expressly stated in the
                applicable Service Agreement, Undertaking, or Memorandum of
                Understanding (MOU). In cases where services have already been
                rendered, the determination of refund eligibility shall further
                depend on the nature and extent of services provided. As per the
                Agreement, the services are classified in [refundable /
                non-refundable], and this classification shall be final and
                binding in assessing any refund claims. No refund shall be
                entertained beyond the agreement.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                ii. Refund Timeframe
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                The Refund will be received within 45 working days after receipt
                of all the documents i.e. FNF (Full and Final), details and
                information required by the Service Provider to complete the
                process and initiate the transfer.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                iii. Refund Process
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                An e-mail will be sent from Incorplus Ventures stating the
                details of the terms in compliance with which the refund will be
                processed along with the reason and amount of the Refund. The
                Service Receiver will need to Accept and Acknowledge the same in
                respect to the mail itself. The Service Receiver will need to
                provide Bank Account details such as the account number and the
                IFSC code of the branch in question in which the amount of
                refund is required to be transferred by the Service Provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Electronic Records & Signatures
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By using our Services, you authorize Incorplus Ventures to affix
                your electronic signature where required, unless withdrawn
                before submission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Delivery of Services
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Services may be delivered electronically (via email/download) or
                physically through shipping partners. Shipping charges may
                include carrier fees plus administrative costs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Force Majeure
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Incorplus Ventures will not be liable for any delays, failures,
                or interruptions caused by events beyond our control (natural
                disasters, government actions, strikes, pandemics, wars, etc.).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Cookies & Data Collection
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                We use cookies and tracking technologies to improve user
                experience, analyze traffic, and deliver tailored content.
                Third-party analytics and advertising partners may also place
                cookies. You may disable cookies in your browser settings;
                however, some features may not function properly. (See our
                Privacy Policy for details.)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Reviews & User Content
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By submitting reviews, comments, or content, you grant Incorplus
                Ventures a non-exclusive, royalty-free license to use, display,
                and publish your content for marketing or promotional purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Dispute Resolution
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Any dispute arising from these Terms shall be resolved by
                binding arbitration in accordance with the Rules of Arbitration
                of the Indian Council of Arbitration. The arbitration award will
                be final and binding on both parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                These Terms are governed by the laws of India, and disputes
                shall be subject to the exclusive jurisdiction of the courts in
                Ahmedabad, Gujarat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Acknowledgement
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                By using our Website or Services, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed mt-2 space-y-2">
                <li>You have read and understood these Terms & Conditions.</li>
                <li>
                  You are at least 18 years old and legally competent to enter
                  into a binding agreement.
                </li>
                <li>You voluntarily agree to be bound by these Terms.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Grievance Resolution
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                In case of any query or clarity required by the Service
                Receiver, the Company or authorized representative of the
                Company can mail on support@incorplusventures.com through their
                mail id provided to us for service-related communications
                stating the details such as Name of the Company, Service
                availed, Query, Name, and contact of the person connected with
                us on the project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
                Email Us at{" "}
                <a
                  href="mailto:support@incorplusventures.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  support@incorplusventures.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions
