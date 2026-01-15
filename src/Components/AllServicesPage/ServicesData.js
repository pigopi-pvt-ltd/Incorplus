import TalkToExpert from "../../assets/talkToExpert.jpg"
import companyIcorp from "../../assets/companyIncorporation.png"
import trademarkImage from "../../assets/trademarkService.jpg"
import msmse from "../../assets/Msme.jpg"
import Gst from "../../assets/GST.jpg"
import Fssai from "../../assets/fssaiService.jpg"

import Dppit from "../../assets/expert.jpg"
import indianWorking from "../../assets/indianWorking.jpg"
import group from "../../assets/group.jpg"

import indianMan from "../../assets/indian-man.jpg"
import office1 from "../../assets/office1.jpg"
import office2 from "../../assets/office2.jpg"

import accounting from "../../assets/accounting.jpg"

import indianStartup from "../../assets/indian-startup.jpg"
import logoDesign from "../../assets/logoDesigning.jpg"

import itr from "../../assets/itr.jpg"

import FundigCard from "../../assets/FundigCard.avif"

import PRCard from "../../assets/ProjectReportCard.avif"

import ProprietorshipCard from "../../assets/ProprietorshipCard.avif"

import LLPCard from "../../assets/LLPCard.avif"

import PvtLtdCard from "../../assets/PvtLtdCard.avif"

import PublicLtdCard from "../../assets/PublicLtdCard.avif"

import Section8ngoCard from "../../assets/Section8ngoCard.avif"

import TrustCard from "../../assets/TrustCard.avif"
import ISOCard from "../../assets/ISOCard.avif"
import IECCard from "../../assets/IECCard.avif"
import LLPComplianceCard from "../../assets/LLPComplianceCard.avif"

import ROCCard from "../../assets/ROCCard.avif"
import TdsReturnCard from "../../assets/TdsReturnCard.avif"

import section8ngoComplianceCard from "../../assets/Section8ngocomplianceCard.avif"
import GstComplianceCard from "../../assets/GstComplianceCard.avif"
import SocietyRegistrationCard from "../../assets/SocietyRegistrationCard.avif"

import WebDevCard from "../../assets/webDevCard.avif"
import mobileAppDevCard from "../../assets/mobileAppDevCard.avif"
import DigitalMarketingCard from "../../assets/DigitalMarketingCard.avif"
import GraphicDesignCard from "../../assets/GraphicDesignCard.avif"
export const SECTIONS_DATA = [
  {
    id: "startup",
    title: "For Startup",
    subtitle: "Accelerate your journey with capital and recognition.",
    icon: "rocket_launch",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    items: [
      {
        title: "DPIIT Registration",
        category: "Recognition",
        catIcon: "verified",
        img: Dppit,
        desc: "Get recognized by the government to avail tax exemptions and benefits.",
        path: "/dpiit-registration",
        faqs: [
          {
            q: "Would a one person company (OPC) be eligible to get DPIIT registration?",
            a: "Yes, as per the Startup India notification, Private Limited Companies, LLPs, and Registered Partnership Firms (including OPCs) are eligible for DPIIT recognition, provided they meet the turnover and age criteria.",
          },
          {
            q: "Can a DPIIT registration be revoked?",
            a: "Yes. In case it is found that any certificate has been obtained on the basis of false information, the DPIIT board reserves the right to revoke such certificate or approval.",
          },
          {
            q: "For how long is a startup recognition valid?",
            a: "An entity shall cease to be a Startup on completion of 10 years from the date of its incorporation/registration or if its turnover for any previous financial year exceeds INR 100 crore.",
          },
          {
            q: "After recognition, will the government send the certificate by courier?",
            a: "No. Once online filing is done, the certificate is issued digitally. Applicants can download it directly from the Startup India portal, print it, and laminate it themselves.",
          },
        ],
      },
      {
        title: "Funding",
        category: "Capital",
        catIcon: "monetization_on",
        // img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=600&auto=format&fit=crop",
        img: FundigCard,
        desc: "Assistance in securing seed funding, angel investment, and loans.",
        path: "/funding",
        faqs: [
          {
            q: "Why is funding required for a startup?",
            a: "Funding is needed for prototype creation, product development, team hiring, legal services, raw materials, equipment, licenses, working capital, marketing, and office space.",
          },
          {
            q: "What are the common funding sources at the Ideation/Pre-Seed stage?",
            a: "Common sources include Bootstrapping (self-financing), Friends and Family, and prize money from Business Plan or Pitching Events.",
          },
          {
            q: "What is 'Proof of Concept' (PoC) in the Validation stage?",
            a: "PoC involves validating potential demand by conducting field trials, testing the product on potential customers, onboarding mentors, and building a formal team before a big market launch.",
          },
          // {
          //   q: "How long does it typically take to raise funds from external sources?",
          //   a: "Raising funds from external sources is a time-consuming process and can easily take over 6 months to convert."
          // },
          {
            q: "What specific seed funding is available in Karnataka and Gujarat?",
            a: "Karnataka provides up to INR 50 Lakhs under the 'Idea2PoC' scheme. Gujarat provides up to INR 10 Lakhs in the form of Sustenance, Product Development, and Marketing Assistance.",
          },
          {
            q: "What do investors look for before finalizing a deal?",
            a: "Investors look for revenue growth, market position, favorable ROI, time to break-even, uniqueness of the startup, and a reliable, passionate team.",
          },
        ],
      },
      {
        title: "Project Report",
        category: "Documentation",
        catIcon: "summarize",
        // img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        img: PRCard,
        desc: "Detailed project reports for bank loans and investor presentations.",
        path: "/project-report",
        faqs: [
          {
            q: "Is it necessary to make a project report for a bank loan?",
            a: "Yes, a professional project report is essential when applying for a business loan. It serves as a roadmap for your business and provides banks with the necessary details to evaluate your creditworthiness and the project's viability.",
          },
          {
            q: "What are the necessary contents used in a project report?",
            a: "A comprehensive project report includes: Introductory page, Summary, Promoter & Employee details, Infrastructure overview, Customer & Regional operations analysis, Fiscal acquisitions, Means of financing, and Financial statements (Balance Sheet, P&L, Fund Flow, and Break-even evaluations).",
          },
        ],
      },
      {
        title: "Talk with Experts",
        category: "Consultation",
        catIcon: "support_agent",
        // img: "https://images.unsplash.com/photo-1573163281530-5be9c29fb888?q=80&w=600&auto=format&fit=crop",
        img: TalkToExpert,
        desc: "One-on-one consultation with legal and financial experts.",
        path: "/startup/consultation",
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    subtitle: "Establish your legal identity and structure.",
    icon: "domain",
    iconBg:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
      {
        title: "Company Incorporation",
        category: "Formation",
        catIcon: "apartment",
        // img: "https://images.unsplash.com/photo-1610450949065-1f2842426033?q=80&w=600&auto=format&fit=crop",
        img: companyIcorp,
        desc: "Registration for Pvt Ltd, LLP, or OPC structures.",
        path: "/company-incorporation",
      },
      {
        title: "MSME Registration",
        category: "Govt Scheme",
        catIcon: "store",
        // img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=600&auto=format&fit=crop",
        img: msmse,
        desc: "Register under Udyam to access government benefits.",
        path: "/msme-registration",
      },
      {
        title: "GST Registration",
        category: "Tax",
        catIcon: "percent",
        img: Gst,
        desc: "Obtain your GSTIN for tax compliance and trade.",
        path: "/gst-registration",
        faqs: [
          {
            q: "What is Goods and Services Tax (GST)?",
            a: "GST is a destination-based tax on the consumption of goods and services. It is levied at all stages from manufacture to final consumption, where registered dealers can claim credit for taxes paid in previous stages (Input Tax Credit). Only the value addition is taxed, and the final cost is borne by the consumer.",
          },
          {
            q: "Is GST Mandatory for all Businesses?",
            a: "Yes, registration is mandatory for businesses exceeding the prescribed turnover limits. Generally, goods manufacturers with an annual turnover of over ₹40 Lakhs (and service providers over ₹20 Lakhs) must obtain GST registration.",
          },
          {
            q: "What are the advantages of GST registration?",
            a: "Key advantages include legal recognition as a supplier, the ability to collect taxes from customers, and the eligibility to claim Input Tax Credit (ITC), which reduces the overall tax burden and prevents double taxation.",
          },
          {
            q: "Can I claim Input Tax Credit (ITC) without GST registration?",
            a: "No. A person is not eligible to claim Input Tax Credit until their business is registered. Only a registrant with a valid GSTIN can claim credit for taxes paid on purchases or charge taxes on supplies.",
          },
          {
            q: "Do I need separate registrations for different businesses in the same state?",
            a: "A person carrying on multiple business verticals within a single State may obtain separate registrations for each business vertical, subject to specific conditions prescribed by GST law.",
          },
          {
            q: "Is the GST registration certificate permanent?",
            a: "Yes, once issued by the Goods and Services Department, the registration is considered permanent. It does not have an expiry date unless it is cancelled, surrendered, or suspended.",
          },
          {
            q: "Can a GST registration be cancelled?",
            a: "Yes. Registration can be cancelled upon request by the taxpayer (or their legal heir in case of death) or by the department if the business fails to comply with GST laws or provides incorrect information.",
          },
        ],
      },
      {
        title: "Proprietorship Registration",
        category: "Individual",
        catIcon: "person",
        // img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
        img: ProprietorshipCard,
        desc: "Simplest business form for solo owners.",
        path: "/proprietorship-registration",
        faqs: [
          {
            q: "In how much time my process will complete?",
            a: "Within 24 working hours your process will be done after completing the process with us, we will update you through email or phone about your status and if more details are required.",
          },
          {
            q: "What is the definition of Udyog aadhar/ Udyam Registration?",
            a: "The Government of India has enacted the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 in terms of which the definition of micro, small and medium enterprises is as under: Enterprises engaged in the manufacture or production, processing or preservation of goods as specified below:\nA micro enterprise is an enterprise where investment in plant and machinery does not exceed Rs. 25 lakh;\nA small enterprise is an enterprise where the investment in plant and machinery is more than Rs. 25 lakh but does not exceed Rs. 5 crore;\nA medium enterprise is an enterprise where the investment in plant and machinery is more than Rs.5 crore but does not exceed Rs.10 crore.",
          },
          {
            q: "Who can apply for MSME Registration/ Udyam Registration>?",
            a: "Any entrepreneur having valid Aadhaar Number can apply for Udyog Adhaar Registration Online.",
          },
          {
            q: "Is GST registration mandatory for proprietorship firm registration?",
            a: "GST registration is not compulsory for the registration of the owner company, but it also depends on the activity and turnover of the company. It is at the owner’s sole discretion whether to register.",
          },
          {
            q: "How do you raise capital for a sole proprietorship?",
            a: "A sole proprietorship can raise capital by taking out loans to support the business. This business entity is not registered as an independent business but is operated under the name and personal responsibility of the owner.",
          },
          {
            q: "Why a sole proprietorship is best?",
            a: "Sole proprietorship businesses generally need less work and are easier to take care of than partnerships or corporations. The accounting and record keeping strategies are sometimes straightforward and easy in proprietorship and business owner is accountable just for the debts and liabilities.",
          },
          {
            q: "Do you need a business license for a sole proprietorship?",
            a: "Sole Proprietorships usually require a general business license to legally conduct their business, Udyam Registration is enough for starting out. If the owner has another business activity, such as a grocery store, a Fssai license is required, and an IEC code is required for import and export. All licenses are dependent on the company you work for.",
          },
        ],
      },
      {
        title: "Partnership Registration",
        category: "Firm",
        catIcon: "group",
        img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
        desc: "Register your partnership firm with proper deeds.",
        path: "/partnership-registration",
        faqs: [
          {
            q: "Is it necessary to register a partnership?",
            a: "No, it’s not necessary to register a partnership. However, it is suggested to urge the firm registered to offer it a legal identity. Annual compliance’ are necessary regardless of the registration standing of the Partnership Business.",
          },
          {
            q: "How many persons are compulsory to commence a partnership firm?",
            a: "A minimum of 2 Person is required to start a partnership and a maximum can be 20. Many small businesses are started as a sole proprietorship by the owners and much later turned into another entity just to protect the owner from be personally responsible for the future of the company creditors.",
          },
          {
            q: "How much capital is required to start a partnership firm?",
            a: "A partnership company can be launched with any amount of less capital.",
          },
          {
            q: "Is partnership deed in writing fundamental to structure a partnership firm?",
            a: "According to the contractual act, it is not essential to have a written agreement. However, it is always prudent to pass a Partnership Deed to be produced to third parties with whom the partner company has concluded a contract in the same way as banks, the tax authorities, customers, etc.",
          },
          {
            q: "Can a partnership be established for a particular business task?",
            a: "A Partnership Business can be established for a particular business task. One person could also enter into a partnership with another for a single business. The duration of the undertaking can be for the completion of a specific project or for a certain period or at will.",
          },
        ],
      },
      {
        title: "LLP Registration",
        category: "Corporate",
        catIcon: "handshake",
        // img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",

        img: LLPCard,
        desc: "Limited Liability Partnership registration.",
        path: "/llp-registration",
        faqs: [
          {
            q: "What is LLP?",
            a: "A Limited Liability Partnership (LLP) is a type of Company that allows you to structure the business structure in a non-traditional way by reducing the liability of its owners. This type of operation also allows owners to operate at the same level and status within the company.",
          },
          {
            q: "Who is designated partner in LLP?",
            a: "There are 2 types of partners in LLP, designated partner and partner. Partners are the one that shares the profit and loss only. once we state designated Partners, those person deals in day to day activities to run the LLP and accountable for all compliance that the LLP is susceptible to file to roc timely.",
          },
          {
            q: "How can a person become partner of an LLP?",
            a: "The person who signs the subscriber card at the time of incorporation of LLP will be considered an associate of LLP. After incorporation, a new person can be added as a partner according to the clause mentioned in the LLP agreement.",
          },
          {
            q: "If any partner wants to leave from LLP. How he can do so?",
            a: "According to the clause mentioned in the LLP agreement, a person can leave the organization. A supplemental deed must be established upon any amendment to the LLP constitution. When a person ceases to be associated or when a change occurs, the ROC must be notified by completing the prescribed forms.",
          },
          {
            q: "Is it mandatory to maintain and file documents?",
            a: "An LLP shall be beneath obligation to maintain annual financial records revealing correct and honest vision of its affairs. The statement of account & solvency and annual return is needed to be filed to registrar of company.",
          },
        ],
      },
      {
        title: "OPC Registration",
        category: "Corporate",
        catIcon: "person_pin",
        // img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
        img: indianWorking,
        desc: "One Person Company registration for solo founders.",
        path: "/opc-registration",
        faqs: [
          {
            q: "What is a One Person Company (OPC)?",
            a: "OPC means a company in which only one person acts as a member. It is a new concept introduced in the Companies Act 2013; previously, there was no provision for the creation of an OPC.",
          },
          {
            q: "Which person is allowed to incorporate an OPC?",
            a: "Only individuals who are Indian citizens and residing in India are authorized to form a One Person Company. A single person is exclusively authorized to set up an OPC.",
          },
          {
            q: "Who is considered a resident of India for OPC provisions?",
            a: "For the purpose of governing OPC provisions, a person is considered a resident of India if they have stayed in the Republic of India for a minimum period of 182 days during the immediately preceding one calendar year.",
          },
          {
            q: "How many people can an OPC appoint as directors?",
            a: "An OPC may appoint several directors, with a maximum limit of 15 directors. It is also possible to appoint more than 15 directors by passing a specific resolution.",
          },
          {
            q: "Can an OPC voluntarily convert itself into another kind of company?",
            a: "An OPC can voluntarily transform into any other type of company only after it has been in existence for more than two years.",
          },
        ],
      },
      {
        title: "Private Limited Company Registration",
        category: "Corporate",
        catIcon: "business",
        // img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=600&auto=format&fit=crop",
        img: PvtLtdCard,
        desc: "The most popular entity for startups raising funds.",
        path: "/pvt-ltd-registration",
        faqs: [
          {
            q: "What is a Private Limited Company?",
            a: "It is a separate legal entity with perpetual succession, limited liability only up to the capital share. A shareholder is not personally liable for the amount of the debt and his personal assets will not be used to pay the debt. A limited liability company limits the number of members to 200. The company can be incorporated with only two members.",
          },
          {
            q: "Does for Small Business, the Private Limited Company registration is benefited?",
            a: "Yes, a small business can get its business register by registering a Private Limited Company in India. It ensures your company’s credibility and image in the eyes of the financial institution, suppliers and potential customers. It helps the company to obtain non-compliant loans from banks or potential parties while closing deals.",
          },
          {
            q: "Is there any high qualification required to become a director or shareholder in the private limited company?",
            a: "No specialized qualification is required to appoint a director or become a shareholder of a company. Anyone with common sense can start a business.",
          },
          {
            q: "What will be the address of the registered office of the company?",
            a: "The registered office is used for the purpose of holding a meeting, keeping records and receiving in a timely manner correspondence from all statutory authorities. It also determines the jurisdiction of the registered office",
          },
          {
            q: "Is a Private Limited Company suitable for making FDI in india?",
            a: "Yes, perfectly suitable.",
          },
        ],
      },
      {
        title: "Public Limited Company Registration",
        category: "Corporate",
        catIcon: "domain",
        // img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        img: PublicLtdCard,
        desc: "For large scale businesses with unlimited members.",
        path: "/public-limited-registration",
        faqs: [
          {
            q: "How much time is required to incorporate a public limited company?",
            a: "Usually 8 to 10 business days is required to register a business, but this is a legal process and government approval is required, so committing to a fixed period is not advantageous, it is advised startups to plan ahead before their company announcement date.",
          },
          {
            q: "Primary requirement for setting up public limited company?",
            a: "The minimum requirement for setting up a joint stock company is to have a minimum of seven shareholders and three directors, directors can also be shareholders.",
          },
          {
            q: "Any minimum requirement of paid up share capital?",
            a: "Previously, there was a minimum requirement for paid-up share capital, whereas currently there is no such limit. Any paid up capital can be used for establishment.",
          },
          {
            q: "Can changes be possible after incorporation of Public Limited Company?",
            a: "Yes, changes are possible after incorporation. Changes such as name change; modification of the subject clause; change of direction; change in authorized capital; changes in paid-up capital and many more where permitted by law.",
          },
          {
            q: "Can the equity shares be transferred to outsider?",
            a: "After the allotment of the shares, they can be transferred to 3rd parties, even certain percentages of the participation can be transferred to the transferee provided that the deed of transfer SH4 takes place.",
          },
        ],
      },
      {
        title: "Section-8 Company (NGO) Registration",
        category: "Non-Profit",
        catIcon: "volunteer_activism",
        // img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop",
        img: Section8ngoCard,
        desc: "Register a non-profit for charitable purposes.",
        path: "/section-8-registration",
        faqs: [
          {
            q: "Define section 8 company (NGO)?",
            a: "A company (NGO) whose main objective is to provide social assistance by promoting commerce, education, research, art, science, sport, religion, charity, etc.",
          },
          {
            q: "Where a section 8 company does register?",
            a: "A person or partnership may apply to the Commercial Registry under Section 8 of the Company Deed using the forms required for charitable company registration.",
          },
          {
            q: "Can director of section 8 draws salary?",
            a: "There is no constraint on the payment of compensation to employees/directors of Section 8 companies.",
          },
          {
            q: "What is difference between 12A and 80G?",
            a: "Registration in Section 12A allows the Section 8 corporation to be exempt from tax rates. In contrast, listing in Section 80G exempts the taxable income of the person who donates to the NGO, resulting in more donations.",
          },
          {
            q: "Is GST applicable to section 8 company?",
            a: "These entities don’t seem to be engaged in any economic activity rather like mercantilism and commerce in order that they can’t be treated as a rateable person under Goods and Services Tax.",
          },
        ],
      },
      {
        title: "Trust Registration",
        category: "Non-Profit",
        catIcon: "foundation",
        // img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop",
        img: TrustCard,
        desc: "Private or public trust for social welfare.",
        path: "/trust-registration",
        faqs: [
          {
            q: "Who manage the trust?",
            a: "A Trust is an agreement between 3 parties; one is the trustee who controls the property for the benefit of another person known as the beneficiary. The person creating the trust will be known as the settlor.",
          },
          {
            q: "How many types of Trust?",
            a: "There are two type of trust. A public trust generally charitable trust that is created for the benefit of the general public whereas in private trust, benefits are created in favor of particular individual or group of individuals. Those individual will be known as beneficiary.",
          },
          {
            q: "How many trustees are required to form a trust?",
            a: "A trust needs a minimum of two trustees and no limit on the maximum. The board of directors includes the trustees. An application will be made by the trustee to the registrar of the trust having jurisdiction over the place where the trust will be registered.",
          },
          {
            q: "Can the trustee also be a beneficiary?",
            a: "Yes, this statement is correct because a trustee can also act as a beneficiary. A trust owner can designate a beneficiary who receives benefits (income and assets) from the trust. The original trustee may be replaced by the beneficiary if the trustee appears ineligible and uses their rights illegally or in violation of their legal responsibilities.",
          },
          {
            q: "Who is the owner of the trust?",
            a: "To create a trust, the property owner known as as settlor who transfers a possession to someone or cluster called the trustee to regulate that property. The property are managed for the good thing about some group of person or an individual person called the beneficiary.",
          },
          {
            q: "How the trust will pay taxes on its funds?",
            a: "Generally, any income generated by the business of the Trust will be taxable under the Income Tax Act. But if the trust pays a portion of its income to the beneficiary, the trust can get a deduction for any distributive net income. If the trust has undistributed income, the trust will pay taxes on that income.",
          },
        ],
      },
      {
        title: "Society Registration",
        category: "Non-Profit",
        catIcon: "groups",
        // img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
        img: SocietyRegistrationCard,
        desc: "Formation of societies for art or science.",
        path: "/society-registration",
        faqs: [
          {
            q: "Who can be considered to become the members in society ?",
            a: "The person who signed the list of members and paid the amount of the subscription in accordance with the Rules and Regulations of the Company will be considered a member.",
          },
          {
            q: "How many members are required to form a society ?",
            a: "Minimum 7 people are required to form a Society Registration",
          },
          {
            q: "What is the benefit of society registration ?",
            a: "Main purpose to form a society is social welfare like promotion of education, health, employment in society etc. Society registration will be treated as NGO under the societies registration act, 1860.",
          },
          {
            q: "Can society be converted into trust ?",
            a: "No",
          },
          {
            q: "How society is different from trust ?",
            a: "Societies are similar in character to trusts, although there a few essential differences. When we talk about membership, only 2 people will be allowed to form a trust whereas in society, minimum 7 members are required.",
          },
        ],
      },
      {
        title: "Trademark Registration",
        category: "IP Rights",
        catIcon: "copyright",
        img: trademarkImage,
        desc: "Protect your brand name and logo.",
        path: "/trademark-registration",
        faqs: [
          {
            q: "What is trademark ?",
            a: "Trademark means that a mark that is capable of being significance clearly and providing individuality in goods or services of 1 person from those of others and will include form of goods, their packing and color combination. primarily it’s everything which classifies a brand to a common buyer.",
          },
          {
            q: "Is the trademark registration compulsory ?",
            a: "Trademark registration isn’t compulsory. Though, while not registration no suit are often initiated for infringement of unregistered trademarks.",
          },
          {
            q: "Can a registered trademark be modified at future date ?",
            a: "yes",
          },
          {
            q: "What is the validity of a trademark registration ?",
            a: "10 Years",
          },
          {
            q: "How much time it take to register a trademark ?",
            a: "Registration of a trademark may be a long method and it takes around six to eight months to induce the registration complete in a very straight-forward case. Though, the trademark acknowledgement receipt having application range with assigned trademark class is usually issued inside one or 2 working days after filing.",
          },
        ],
      },
    ],
  },
  {
    id: "licenses",
    title: "Licenses",
    subtitle: "Sector-specific permits to operate legally.",
    icon: "verified_user",
    iconBg:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
      {
        title: "FSSAI Registration",
        category: "Food Safety",
        catIcon: "restaurant_menu",
        img: Fssai,
        desc: "Food license mandatory for all food businesses.",
        path: "/fssai-registration",
        faqs: [
          {
            q: "What are the Benefits of FSSAI ?",
            a: "Obtaining a license can provide the food business with legal benefits, build goodwill, ensure food safety, create consumer awareness, and assist in business expansion.",
          },
          {
            q: "What are the Documents Requirements of FSSAI ?",
            a: "Address Proof, Identity proof, List of food category, Layout plan, Details of all the equipment, Passport photograph, NOC from municipality, MoA and AoA, Import Export Code, Water Test Report",
          },
          {
            q: "How much time taken by FSSAI Department to issue certificate ?",
            a: "Generally, basic FSSAI Registration takes 7 to 12 working days for approval. State license and central license takes approx. 45 to 60 days for generation of certificate.",
          },
          {
            q: "Whether FSSAI Required to be Renewed ?",
            a: "Registration certificate is required to be renewed when the validity got expired. If the application for FSSAI License renewal is not documented in the stipulated time, then Rs. 100 per day would be fined. Non-renewal of the FSSAI or food license could lead a punishment.",
          },
          {
            q: "How much Delay is there in FSSAI registration process",
            a: "Generally, it takes around a weeks’ time to get an FSSAI registration after application for the same. However, these days this process is taking good 1-month post the FSSAI application process.",
          },
        ],
      },
      {
        title: "IEC Code Registration",
        category: "Trade",
        catIcon: "local_shipping",
        // img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
        img: IECCard,
        desc: "Import Export Code for global trade.",
        path: "/import-export-registration",
        faqs: [
          {
            q: "When IMPORT EXPORT CODE ( IEC ) Required ?",
            a: "Import and Export of Goods and Services, Shipment Clearance, Custom Clearance, and Payments in respect of import and export.",
          },
          {
            q: "Documents Required for IEC ?",
            a: "PAN card of the individual or company, Copy of the entity’s government ID (Driving license/Aadhar/Voter ID), Incorporation certificate/Partnership deed, Personal or company’s current bank account statement, Address proof (Electricity bill/rent agreement/sale deed of the office location), and Copy of cancelled cheque of the current account.",
          },
          {
            q: "What is the validity of IEC ?",
            a: "IEC allotted to an applicant shall have permanent validity but it is mandatory to update the IEC annually so that the IEC is not deactivated. If the IEC is updated between April-June period each year, no fee shall be charged for updating of IEC.",
          },
          {
            q: "Does Custom department use IEC ?",
            a: "Yes",
          },
          {
            q: "How to cancel IEC ?",
            a: "IEC can be cancelled by initiating a formal request to the DGFT online. On receipt of such intimation, the authorities will cancel it electronically.",
          },
          {
            q: "What is ITC (HS) Code ?",
            a: "The ITC (HS) Code is known as Indian Trade Classification (Harmonised System) Code which was adopted in India for exporting importing operations. An 8 digit ITC (HS) Code is used by the Indian customs for the national trade requirements.",
          },
        ],
      },
      {
        title: "ISO Certification",
        category: "Quality",
        catIcon: "verified",
        // img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
        img: ISOCard,
        desc: "International standard certification for trust.",
        path: "/iso-registration",
        faqs: [
          {
            q: "Do you want your company ISO certified? And what does it mean to be ISO Certified?",
            a: "To be certified by the International Organization of Standardization means that the company has agreed to follow the regulations which are set up by ISO and failure to comply with the laws will lead to legal actions against them. However, when an organization gets certified by ISO it means that the company will gain credibility amongst the customers.",
          },
          {
            q: "How much does ISO certification cost?",
            a: "The cost of certification from the International Organization of standards will vary from registrar to registrar. It is advised to the readers that they contanct us or submit the ISO certification form from our website to get the exact cost of certification by the ISO.",
          },
          {
            q: "How to get ISO certification?",
            a: "The process of getting an ISO certification is quite easy. The International Organization for Standardization can help an organization to follow a certain set of laws and the safety of employees and customers. The process of ISO certification will require the involvement of a third party group that ensures the registration of the company. For this particular purpose, our company can be perfect for you. ISO certificate consultants who are a part of our company can help you gain such certificates.\n\nThe steps are as follows:\n1. You have to fill up the ISO form.\n2. We will connect with you in due time.\n3. Your documents will be connected online.\n4. Your certificate will be issued.\n\nYou do not need to worry about your ISO certificate if we are issuing it to the authorities. We have a huge client base and we have done this work many times.",
          },
          {
            q: "How does ISO certification help? Benefits of ISO Certification?",
            a: "The ISO certification or certification provided by the International Organization for Standardization can help a company to abide by a certain set of laws that will ensure the safety of the workers and the employees along with the customers who enjoy its services. The ISO certified companies gain more credibility among the customers.\n\nThe ISO certification is provided to the companies to make sure that they are abiding by the rules of the international standards. These standards can provide a certain limitation to some of the products to ensure the safety of the employees and the customers at the same time. When a company has an ISO certification, there is a possibility that the customers will have more trust in it. Our company can provide ISO certification online.",
          },
          {
            q: "What are the types of ISO certification?",
            a: "There are about 21740 types of ISO certification. However, the most common and generic types of ISO certification are ISO 14001 and ISO 9001. These are the types that are mostly availed by companies.\nISO 9001 – Quality Management\nISO 27000 – Information Security Management Systems\nISO 14001 – Environmental Management\nISO 50001- 2018 – Energy Management\nISO 45001 – Occupational Health and Safety\nISO 22000 – Food Management Systems\nISO 29990 – Education and Training Management",
          },
          {
            q: "What is Procedure to Apply for ISO Certification Online In India ?",
            a: "There needs to be a particular authority who can sanction the ISO or International Organization for Standardization in India. The ISO is an independent body that has several tenders in different countries. The organizations must approach these companies to achieve the ISO certificate. Our company can be one of the best options to avail of when you are planning to get an ISO certification in India.\n\nFollow these simple steps to get ISO Certificate in India\nStep 1: Visit the ISO Certificate Registration Website\nStep 2: Fill all the details on ISO Certification Registration Form\nStep 3: Make the online payment for your ISO Registration Application\nStep 4: One of the ISO registration executives will verify your documents and process your ISO Registration Certification official work\nStep 5: In a few working days you will receive your ISO certificate in your registered email address.",
          },
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Regular filings to keep your business in good standing.",
    icon: "fact_check",
    iconBg:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
      {
        title: "Income Tax Filing",
        category: "Tax",
        catIcon: "description",
        img: itr,
        desc: "ITR filing for individuals and businesses.",
        path: "/itr-filing",
        faqs: [
          {
            q: "What is ITR filing?",
            a: "ITR filing is the process by which taxpayer has to file a report of his total income earned on financial year. Through Income Tax Department official portal individual can complete their filing of returns. It has notified with seven various forms – ITR 1, ITR 2, ITR 3, ITR 4, ITR 5, ITR 6 and ITR 7.",
          },
          {
            q: "How does ITR help in carrying forward losses?",
            a: "Most businesses in their initial years face losses from the business. The business loss or capital losses can be carried forward up to 8 years if the ITR is filed. This loss can also be adjusted against the future income that lowers taxable income in the future. If ITR is not filed, the taxpayer is deprived of this benefit.",
          },
          {
            q: "How does ITR define financial worth?",
            a: "The ITR filed with the Government defines the financial worth of the taxpayer. The track of ITR shows the financial capacity and also increases the capital base of a person. Hence, the track of income and financial worth is decided by the previously filed ITR. The investors and institutions look forward for returns filed to know the capacity of the business.",
          },
          {
            q: "Does ITR filing help in Loan Processing and insurance?",
            a: "The numbers and the capital base defined by the income tax return is helpful for the loan processing. Higher the financial worth, easier the loan processing. The same applies to high-risk cover insurance. The ITR is a considerable document for making decisions in this regards.",
          },
          {
            q: "Can I claim a refund of TDS paid from salary through ITR?",
            a: "Salaried personnel receives the income after deduction of applicable TDS. It may happen that after the eligible deductions, the tax liability is lower than the amount of TDS actually deducted. In such cases, the excessive payment can be claimed in the form of refund only if ITR is filed by the person.",
          },
        ],
      },
      {
        title: "Startup Compliance",
        category: "Bundle",
        catIcon: "rocket",
        // img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        img: indianStartup,
        desc: "End-to-end management for recognized startups.",
        path: "/startup-compliance",
        faqs: [
          {
            q: "How does a Startup deal with its compliance obligation?",
            a: "The main aim of any startup is to maximize its profits. While doing so, it becomes difficult for them to look into other supporting requirements. Legal compliance is the most important wheel that keeps any business going needs to be looked into earnestly. Many companies have their own legal departments that look after compliance requirements, but startups being new, need to approach an expert in this field for assistance. Such outsourcing helps startups in timely compliance with the required laws, completion and maintenance of records needed for the same, reduction in costs required for maintaining the compliance machinery on their own, filling up the vacuum created due to lack of legal knowledge and single-minded focus on profit maximization. Compliance with the relevant laws of the land is vital for the successful setup and efficient rise of startups. Compliance ensures that no penalty is imposed on a budding startup at any point in its growth and helps it stay out of any other possible difficulties.",
          },
        ],
      },
      {
        title: "Proprietorship Compliance",
        category: "Individual",
        catIcon: "badge",
        // img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        img: office1,

        desc: "Annual filings for sole proprietorships.",
        path: "/proprietorship-compliance",
        faqs: [
          {
            q: "I want to start a Proprietorship, what is the capital required for it?",
            a: "There is no capital limit as such to start a Proprietorship. That’s the reason why, you can start a Proprietorship with any capital amount.",
          },
          {
            q: "Can a proprietorship issue shares or have investors?",
            a: "Proprietorship firms are controlled and managed by a single person and therefore they can issue shares or have investors.",
          },
          {
            q: "Are proprietorship firms supposed to get their accounts audited?",
            a: "Proprietorship firms do not necessarily prepare audited financial statements each year. However, a tax audit may be required when the businesses have annual turnover of more than Rs. 1 Crore, those who provide profession services under their proprietorship are supposed to get their accounts audited if their annual turnover is more than Rs. 50 Lakhs.",
          },
          {
            q: "Do Proprietor and Proprietorship have separate legal identity?",
            a: "No, the Proprietorship firm and the Proprietor have same legal identity. The PAN Card of the Proprietor will be the PAN Card of the Proprietorship. Moreover, there will be no separate legal identity for the business. The assets and liabilities of the Proprietorship and the Proprietor will also be the same.",
          },
        ],
      },
      {
        title: "LLP Compliance",
        category: "Corporate",
        catIcon: "group_work",
        // img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
        img: LLPComplianceCard,
        desc: "Form 11 and Form 8 filing for LLPs.",
        path: "/llp-compliance",
      },
      {
        title: "OPC Compliance",
        category: "Corporate",
        catIcon: "person",
        // img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
        img: office2,
        desc: "Mandatory compliance for One Person Companies.",
        path: "/opc-compliance",
      },
      {
        title: "Private Limited Compliance",
        category: "Corporate",
        catIcon: "business",
        // img: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=600&auto=format&fit=crop",
        img: group,
        desc: "Auditor appointment and annual filings.",
        path: "/pvt-ltd-compliance",
      },
      {
        title: "ROC Annual Compliances",
        category: "Regulatory",
        catIcon: "event_repeat",
        // img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        img: ROCCard,
        desc: "Filing AOC-4 and MGT-7 with MCA.",
        path: "/roc-compliance",
        faqs: [
          {
            q: "Is return filing with ROC not same as income tax return?",
            a: "Income tax return is submitted to Income Tax department whereas ROC returns are filed with Ministry of Corporate Affairs (MCA) with whom the company is registered. It is mandatory to file the prescribed ROC forms and other returns on annual basis.",
          },
          {
            q: "I am sole director of a One Person Company. What are the applicable Annual return forms and their due dates?",
            a: "Form MGT 7 is used to file Annual Return. The due date is May 30. Form AOC 4 is used to file Annual Accounts. The due date is 180 days from end of Financial Year(FY).",
          },
          {
            q: "What are the Annual return forms and their due dates for private limited companies other than One Person Companies?",
            a: "Form MGT 7 is used to file Annual Return. The due date is 60 days from conclusion of Annual General Meeting(AGM). Form AOC 4 is used to file Annual Accounts. The due date is 30 days from end of Financial Year(FY).",
          },
          {
            q: "Our firm is registered as a Limited Liability Partnership Firm. What are the annual returns to be filed with MCA and what are their due dates?",
            a: "For LLPs, the due date of return filing is 60 days from end of financial year i.e 31st May of the assessment year. For form 8(Statement of solvency) the due date is 30th October.",
          },
          {
            q: "What other returns are to be filed with MCA?",
            a: "Other returns include: *ADT 1 -for appointment of auditor *CRA 4 -for Cost Audit Report(if applicable) Following events also require filing with MCA: Change in name, Change in registered office, Change in board composition(e.g. appointment of director), Alteration of share capital, and For creation/modification/satisfaction of charge. The same plan can be bought as per the requirement. Our experts shall guide you on the compliance requirement.",
          },
          {
            q: "What are the consequences of not filing the forms?",
            a: "If the LLP annual return form is not filed within due date, then a penalty of Rs.100 per day is applicable until the default continues. There is no limit on the maximum penalty amount and hence the amount increases over time. In case of company, the penalty amount depends upon the nominal share capital and period of delay.",
          },
          {
            q: "Do I need to get digital signature for filing ROC returns?",
            a: "LLP form 11 needs to be signed with digital signature of any one designated partner. In case of company, the annual return form has to be signed with the digital signature of the director or the company secretary in practice (as the case may be).",
          },
          {
            q: "Will there be any additional charges during ROC filing?",
            a: "Yes, the plan covers only the professional & ROC filing fees (excluding fee for SH-7) from Cleartax. Apart from this, there is stamp duty payable. Stamp duty charges are imposed by state in which the registered office is proposed to be located. The charges will be based on the nature of MCA form. In some states the amount varies according to the authorised capital of the company. These charges are not part of the plan’s price.",
          },
          {
            q: "What are the government fees applicable for annual ROC filing?",
            a: "The fees differ based on your turnover and share capital These fees apply for a turnover of Rs.1 crore. AOC 4: Rs. 300, MGT-7: Rs.400.",
          },
          {
            q: "I need flexibility in the name of my company. Can I provide multiple names?",
            a: "Yes, you can provide upto 6 names for your company. We will need to file this application separately. Additional charges of Rs. 1000 will apply. These will not be covered in the current package.",
          },
          {
            q: "I and my partner are both directors and shareholders in our company. We wish to bring in two additional shareholders as well. Is that covered in the package?",
            a: "In the current package, we cover upto 2 digital signatures for two directors. For two additional shareholders, you need to secure two additional digital signatures certificates. We offer digital signature certificate – Click here to purchase digital signature.",
          },
          {
            q: "Our company would like to bring in a foreign citizen as a director. Is this covered in your package?",
            a: "To bring in additional director, you need to secure digital signature (DSC ). Click here to purchase digital signature. Only passport of the foreign director is required. In some countries, residency certificate will be provided. These need to be submitted for the application. Any incidental charges here is not covered in the package.",
          },
        ],
      },
      {
        title: "TDS Return Filing",
        category: "Tax",
        catIcon: "file_present",
        // img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
        img: TdsReturnCard,
        desc: "Quarterly TDS return filing services.",
        path: "/tds-filing-compliance",
        faqs: [
          {
            q: "What is e-TDS Return?",
            a: "e-TDS return is a TDS return prepared in form No. 24, 26 or 27 in electronic media as per prescribed data structure in either a floppy or a CD ROM. The floppy or CD ROM prepared should be accompanied by a signed verification in Form No.27A.",
          },
          {
            q: "Who is required to file e-TDS return?",
            a: "As per Section 206 of Income Tax Act all corporate and government deductors are compulsorily required to file their TDS return on electronic media (i.e. e-TDS returns). However, for other Deductors, filing of e-TDS return is optional.",
          },
          {
            q: "Under what provision the e-TDS return should be filed?",
            a: "An e-TDS return should be filed under Section 206 of the Income Tax Act in accordance with the scheme dated 26.8.03 for electronic filing of TDS return notified by the CBDT for this purpose. CBDT Circular No.8 dated 19.9.03 may also be referred.",
          },
          {
            q: "Payments are made to employees and contractors. In such a case, TDS return is required to be submitted in a single Form or separate form is required for employees & contractors.",
            a: "For tax deducted at source from salary paid to employees, the annual return for tax deducted at source up to financial year 2004-2005 is to be filed in Form 24 and from financial year 2005-2006 onwards, the quarterly returns are to be filed in Form 24Q. Similarly, in case of payments mad to contractors, Form 26 will have to be filed for deduction made up to financial year 2004-2005 and Form 26Q on a quarterly basis for deductions made from financial year 2005-2006 onwards.",
          },
          {
            q: "Who is the e-Filing Administrator?",
            a: "The CBDT has appointed the Director General of Income-tax(Systems) as e- Filing Administrator for the purpose of the Electronic Filing of Returns of Tax Deducted at Source Scheme,2003.",
          },
          {
            q: "Who is an e-TDS Intermediary?",
            a: "CBDT has appointed National Securities Depository Ltd., Mumbai as e-TDS Intermediary.",
          },
          {
            q: "Is the bank challan number compulsory?",
            a: "Yes. Challan identification number is necessary for all non government deductors.",
          },
          {
            q: "Will the quarterly paper returns be accepted by the Income tax department?",
            a: "No. All quarterly paper TDS/TCS returns will be received at TIN-FCs",
          },
          {
            q: "Is PAN mandatory for deductor and employees/ deductees ?",
            a: "PAN of the deductors has to be given by non government deductors. It is essential to quote PAN of all deductees failing which credit of tax deducted will not be given.",
          },
          {
            q: "What is the due date for furnishing TDS returns for the financial year 2004-2005 and the 1st quarterly return for the financial year 2005-2006?",
            a: "The due date for furnishing returns for tax deducted for the financial year 2004-2005 was 30th June, 2005 which has been extended to 31st August, 2005 in case of Government deductors only. The quarterly returns for the quarter ending 30th June become due on 15th July. However, for the quarter ending 30th June, 2005, the due date has been extended to 31st August, 2005 for all deductors.",
          },
        ],
      },
      {
        title: "Section 8 Compliance",
        category: "Non-Profit",
        catIcon: "volunteer_activism",
        // img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
        img: section8ngoComplianceCard,
        desc: "Compliance for Non-Profit Organizations.",
        path: "/section-8-compliance",
      },
      {
        title: "GST Compliances",
        category: "Tax",
        catIcon: "receipt",
        // img: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?q=80&w=600&auto=format&fit=crop",
        img: GstComplianceCard,
        desc: "Monthly and Quarterly GSTR filings.",
        path: "/gst-compliance",
      },
      {
        title: "Bookkeeping & Accounting",
        category: "Finance",
        catIcon: "menu_book",
        img: accounting,
        desc: "Professional financial record management.",
        path: "/accounting-compliance",
      },
    ],
  },
  {
    id: "go-online",
    title: "Digital Solutions",
    subtitle: "Establish your digital presence and grow your brand.",
    icon: "language",
    iconBg:
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    items: [
      {
        title: "Web Development",
        category: "Tech",
        catIcon: "web",
        img: WebDevCard,
        // img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        desc: "Responsive and SEO-friendly websites.",
        path: "/web-development",
        faqs: [
          {
            q: "Why does my business need a professional website?",
            a: "A website is the digital face of your business. It enhances credibility, provides 24/7 accessibility to customers, and acts as a powerful marketing tool. Even if you have a strong offline presence, most customers will search for you online before making a purchase decision.",
          },
          {
            q: "How long does it take to build a website?",
            a: "The timeline depends on the complexity of the project. A basic 5-10 page informational website typically takes 2-4 weeks, while complex e-commerce platforms or custom web applications can take 8-12 weeks or more.",
          },
          {
            q: "What is the difference between a Static and a Dynamic website?",
            a: "A Static website is built with basic HTML/CSS and is ideal for sites where content rarely changes. A Dynamic website (built with CMS like WordPress or languages like PHP/Node.js) allows you to update content easily without technical knowledge and supports interactive features like user logins and databases.",
          },
          {
            q: "Will my website be mobile-friendly (Responsive)?",
            a: "Yes, all modern websites are built using responsive design. This ensures your site automatically adjusts its layout to look great and function perfectly on smartphones, tablets, laptops, and desktops.",
          },
          {
            q: "Do I need to provide the content and images?",
            a: "Ideally, yes. Since you know your business best, providing text and high-resolution images helps us align the design with your brand. However, we also offer professional content writing and stock image assistance if you need help starting from scratch.",
          },
          {
            q: "What are the ongoing costs for a website?",
            a: "Besides the initial development fee, there are recurring costs for: \n1. Domain Name (Annual renewal)\n2. Web Hosting (Monthly or Annual)\n3. SSL Certificate (For security, usually annual)\n4. Annual Maintenance (Optional, for updates and backups).",
          },
          {
            q: "Can I update the website myself once it's finished?",
            a: "Yes. If we use a Content Management System (CMS) like WordPress, we provide a basic training session so you can easily edit text, upload blog posts, or change images without needing any coding skills.",
          },
          {
            q: "What is an SSL Certificate and why do I need it?",
            a: "SSL (Secure Sockets Layer) encrypts the data between your website and the visitor. It is essential for security (especially for payments) and displays a 'Lock' icon in the browser. It also helps in improving your Google search rankings.",
          },
          {
            q: "How do you handle website maintenance and security?",
            a: "We offer maintenance plans that include regular backups, security monitoring, plugin updates, and performance optimization to ensure your website remains fast and secure against potential threats.",
          },
        ],
      },

      {
        title: "Mobile App Development",
        category: "Tech",
        catIcon: "smartphone",
        // img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
        img: mobileAppDevCard,
        desc: "Custom Android and iOS mobile applications.",
        path: "/mobile-app-development",
        faqs: [
          {
            q: "Should I build my app for iOS, Android, or both?",
            a: "It depends on your target audience and budget. While Android has a larger market share globally, iOS users often have higher spending power. For most businesses, we recommend Cross-Platform development (using Flutter or React Native) to launch on both platforms simultaneously with a single codebase, saving time and costs.",
          },
          {
            q: "How much does it cost to develop a mobile app?",
            a: "The cost varies significantly based on complexity. A basic MVP (Minimum Viable Product) might cost between $10,000 and $35,000. Medium-complexity apps with custom backends and integrations typically range from $40,000 to $90,000, while highly complex enterprise applications can exceed $100,000.",
          },
          {
            q: "How long does it take to build and launch an app?",
            a: "A typical development timeline spans 3 to 9 months. Simple apps can be ready in 2-4 months, while feature-rich applications involving complex APIs, payment gateways, and real-time syncing usually take 6 months or more, including the time required for App Store and Play Store approvals.",
          },
          {
            q: "What is the difference between Native and Cross-Platform apps?",
            a: "Native apps are built specifically for one platform (using Swift for iOS or Kotlin for Android) and offer the best performance and hardware access. Cross-Platform apps use a shared codebase for both platforms, offering faster time-to-market and lower development costs while still maintaining high performance.",
          },
          {
            q: "How do I protect my app idea from being copied?",
            a: "We prioritize confidentiality and are happy to sign a Non-Disclosure Agreement (NDA) before discussing your project details. This ensures that your unique concept, features, and business logic remain legally protected throughout the development process.",
          },
          {
            q: "What happens after the app is launched? Do you provide maintenance?",
            a: "Yes, launch is just the beginning. We provide ongoing maintenance to fix bugs, ensure compatibility with new iOS/Android OS updates, monitor server performance, and implement new features based on user feedback to keep your app competitive.",
          },
          {
            q: "Can you help with getting the app onto the Apple App Store and Google Play Store?",
            a: "Absolutely. We handle the entire submission process, including preparing metadata, screenshots, and ensuring the app complies with the strict guidelines of both Apple and Google to minimize the risk of rejection.",
          },
          {
            q: "Can my app work offline?",
            a: "Yes, we can implement 'Offline Mode' using local caching and data synchronization. This allows users to access certain features and content without an active internet connection, which then syncs with the server once they are back online.",
          },
          {
            q: "How will I be involved in the development process?",
            a: "We follow an Agile methodology, providing you with regular updates and demos at the end of each sprint (usually every 2 weeks). Your feedback during these stages is crucial to ensure the final product aligns perfectly with your vision.",
          },
        ],
      },
      {
        title: "Digital Marketing",
        category: "Marketing",
        catIcon: "campaign",
        // img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop",
        img: DigitalMarketingCard,
        desc: "SEO, SMM, and PPC for business growth.",
        path: "/digital-marketing",
        faqs: [
          {
            q: "What is Digital Marketing and why is it important for my business?",
            a: "Digital marketing is the use of internet-based channels like search engines, social media, and email to reach potential customers. It is vital because it allows businesses to target specific audiences, interact with them in real-time, and measure results more accurately than traditional marketing. In 2026, over 90% of consumers research products online before buying, making a digital presence essential for survival.",
          },
          {
            q: "How does Search Engine Optimization (SEO) help grow my business?",
            a: "SEO is the process of optimizing your website to rank higher in search results for relevant keywords. By appearing at the top of Google or Bing, you gain 'organic' (free) traffic. It builds long-term credibility and trust, as users generally perceive top-ranking sites as industry leaders.",
          },
          {
            q: "What is the difference between SEO and SEM (Search Engine Marketing)?",
            a: "SEO focuses on gaining traffic through organic (non-paid) search results over time. SEM, often referred to as PPC (Pay-Per-Click), involves paying for ads to appear at the top of search results instantly. SEO is a long-term investment, while SEM/PPC is ideal for immediate traffic, product launches, or time-sensitive promotions.",
          },
          {
            q: "How long does it take to see results from Digital Marketing?",
            a: "Timelines vary by strategy. Paid campaigns (PPC/Social Ads) can generate leads within 24-48 hours. However, organic strategies like SEO and Content Marketing typically take 3 to 6 months to show significant ranking improvements and 6 to 12 months for substantial ROI as your domain authority grows.",
          },
          {
            q: "Is Social Media Marketing (SMM) really necessary for B2B companies?",
            a: "Yes. While B2C brands thrive on platforms like Instagram and TikTok, B2B companies use social media (especially LinkedIn) to establish thought leadership, nurture professional relationships, and target decision-makers. It serves as a validation tool where potential partners check your activity and reputation.",
          },
          {
            q: "What is 'Content Marketing' and do I need it?",
            a: "Content Marketing is the creation of valuable, relevant material (blogs, videos, infographics) to attract and retain an audience. Instead of just pitching products, you provide value. It is the fuel for almost all other digital efforts, as it improves SEO, provides material for Social Media, and builds trust with potential customers.",
          },
          {
            q: "How do you measure the ROI of a Digital Marketing campaign?",
            a: "We track Key Performance Indicators (KPIs) such as Conversion Rate (the percentage of visitors who become customers), Cost Per Acquisition (CPA), and Customer Lifetime Value (LTV). Using tools like Google Analytics 4, we can see exactly which channel (Email, Search, or Social) lead to a sale, allowing for data-driven budget allocation.",
          },
          {
            q: "What is 'Remarketing' or 'Retargeting'?",
            a: "Remarketing involves showing ads specifically to people who have already visited your website but didn't make a purchase. It keeps your brand 'top-of-mind' and often results in much higher conversion rates because you are reaching an audience that is already familiar with your business.",
          },
          {
            q: "Should I hire an agency or do digital marketing in-house?",
            a: "In-house teams offer deep brand knowledge but often lack the specialized tools and broad expertise required for multifaceted campaigns. An agency provides access to a full team of experts (SEO specialists, designers, copywriters, and data analysts) for a fraction of the cost of hiring them individually.",
          },
        ],
      },
      {
        title: "Logo Designing",
        category: "Branding",
        catIcon: "draw",
        // img: "https://images.unsplash.com/photo-1541461985943-955a8a61d6ec?q=80&w=600&auto=format&fit=crop",
        img: logoDesign,
        desc: "Unique logos representing your identity.",
        path: "/logo-design",
      },
      {
        title: "Graphic Designing",
        category: "Creative",
        catIcon: "palette",
        // img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=600&auto=format&fit=crop",
        img: GraphicDesignCard,
        desc: "Visual assets for marketing and social media.",
        path: "/graphic-design",
      },
    ],
  },
]
