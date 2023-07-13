import { FC } from 'react'
// local
import { PolicyPage } from '@/components/policies'

const policiesList = [
  { title: 'Commissions and fees', text: 'At Danier limited, we pride ourselves on providing high-quality, innovative software development solutions and establishing reliable partnerships with our clients. To ensure transparency and clarity in our business practices, we outline below the commissions and fees associated with our services:' },
  {
    title: '', ol: [
      'Consultation and Proposal Stage \n During the initial consultation and proposal stage, we provide our clients with a comprehensive understanding of their project requirements and develop a tailored solution. This stage does not involve any specific commissions or fees.',
      'Project Development and Implementation \n 2.1 Project Scope and Cost \n Based on the project requirements, complexity, and estimated development effort, we provide our clients with a detailed cost breakdown. The project cost includes the development and implementation of the software solution, as well as any necessary integrations and customizations. This cost is agreed upon and outlined in a formal proposal or agreement. \n 2.2 Milestone Payments \n To ensure progress and maintain a mutually beneficial partnership, we may structure the payment schedule based on project milestones. Payments are typically made upon the completion of predetermined milestones, as outlined in the project agreement.',
      'Maintenance and Support \n 3.1 Ongoing Support Fees \n Once the software solution is implemented, we offer ongoing maintenance and support services to ensure its smooth operation. The fees for maintenance and support are determined based on the level of assistance required and the agreed-upon service level agreement (SLA). The SLA outlines the response times, support channels, and associated costs, if applicable.',
      'Additional Services \n 4.1 Customizations and Enhancements \n If clients require additional customizations or enhancements beyond the initial project scope, we may provide these services upon request. The fees for such services will be determined based on the complexity, effort, and resources required. \n 4.2 Third-Party Costs \n In some cases, specific project requirements may involve the integration of third-party software or services. Any associated costs, such as licensing fees or usage charges for third-party tools or platforms, will be communicated to the client in advance.',
      'Payment Terms \n 5.1 Invoicing and Payment \n Schedule Invoices for the agreed-upon services will be issued based on the agreed payment schedule, which may vary depending on the project size and duration. Our preferred payment method is usually outlined in the proposal or agreement. \n 5.2 Late Payment and Penalties \n Timely payment is essential to ensure project progress and continuity. Failure to adhere to the agreed payment terms may result in delays in project delivery or additional penalties, as specified in the project agreement.',
    ]
  },
  { title: '', text: 'Please note that the specific commissions and fees may vary based on the individual project requirements and agreements. We aim to provide our clients with transparent and competitive pricing while ensuring the delivery of high-quality software solutions and reliable partnership \n \n For a detailed breakdown of the commissions and fees associated with your specific project, please consult the project proposal or reach out to our team for further clarification.' },
]

const CommissionsAndFees: FC = () => {
  return (
    <PolicyPage title="Commissions And Fees" policiesList={policiesList} />
  )
} 

export default CommissionsAndFees