import { FC } from 'react'
// local
import { PolicyPage } from '@/components/policies'

const policiesList = [
  { title: 'Disclosure of risks', text: 'Please read the following Risk Disclosure Statement (hereinafter referred to as "Statement") carefully. This Statement outlines the potential risks associated with partnering with Danier Limited  (hereinafter referred to as "we," "us," or "the Company") for software development and innovative solutions. By engaging in a partnership with us, you acknowledge that you have read, understood, and agreed to be bound by this Statement. If you do not agree with any provision of this Statement, please refrain from entering into a partnership with us.' },
  {
    title: '1. General Risks', ol: [
      'Market Risks: The software development industry is subject to market risks, including evolving technologies, changing customer demands, and economic fluctuations. These factors may impact the success or adoption of software solutions, potentially affecting business outcomes.',
      'Competitive Risks: The software development market is highly competitive, with new technologies and competitors emerging constantly. There is a risk of market saturation and the need to differentiate products and services to maintain a competitive edge.',
      'Technological Risks: Developing and implementing innovative solutions involves inherent technological risks, such as software bugs, compatibility issues, and cybersecurity threats. Despite our best efforts, unforeseen technical challenges may arise during the development process.',
    ]
  },
  {
    title: '2. Project Risks', ol: [
      'Project Scope and Complexity: The success of software development projects depends on various factors, including project scope, complexity, and requirements. Unexpected changes in project specifications, delays, or budgetary constraints may impact project timelines and deliverables.',
      'Dependencies on Third Parties: Software development projects often require integration with third-party systems, platforms, or services. The performance and reliability of these third-party components may impact the overall functionality and success of the developed software.',
      'Intellectual Property Risks: It is important to address intellectual property rights and ownership during the partnership. While we take necessary measures to protect intellectual property, there is a risk of infringement or disputes related to proprietary rights.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]
  },
  {
    title: '3. Financial Risks', ol: [
      'Cost and Budget Management: The cost of software development projects may vary depending on project complexity, requirements, and changes during the development process. It is important to carefully manage project budgets and ensure ongoing communication to address any financial concerns.',
      'Return on Investment: While we strive to provide high-quality solutions, there is no guarantee of a specific return on investment. Market conditions, user adoption, and other factors beyond our control may influence the success and financial outcomes of software solutions.',
    ]
  },
  {
    title: '4. Partnership Risks', ol: [
      'Reliance on Collaboration: Successful partnerships require effective communication, collaboration, and alignment of goals. Despite our commitment to reliable partnerships, challenges in communication, differences in expectations, or changes in business priorities may impact the overall partnership experience.',
      'Business Continuity: While we aim for long-term partnerships, there is a risk of unforeseen events that may disrupt business operations, such as natural disasters, economic downturns, or changes in market conditions. We have business continuity plans in place to mitigate such risks, but they cannot eliminate all potential disruptions.',
    ]
  },
  {
    title: '5. Limitation of Liability', text: 'To the fullest extent permitted by applicable law, we disclaim any liability for direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the partnership, including any loss of profits, data, or business opportunities.'
  },
  {
    title: '', text: 'It is important to note that the risks mentioned in this Statement are not exhaustive, and other risks not mentioned here may exist. The purpose of this Statement is to highlight some general risks associated with partnering with us for software development and innovative solutions. It is recommended that you carefully assess your business needs, risk tolerance, and conduct due diligence before entering into a partnership with us. By entering into a partnership with us, you acknowledge that you have read, understood, and accepted the risks outlined in this Statement. It is your responsibility to regularly review this Statement for any updates or changes.'
  },
]
 
const DisclosureOfRisks: FC = () => {
  return (
    <PolicyPage title="Disclosure Of Risks" policiesList={policiesList} />
  )
}

export default DisclosureOfRisks