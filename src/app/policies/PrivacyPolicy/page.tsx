import { FC } from 'react'
// local
import { PolicyPage } from '@/components/policies'
 
const policiesList = [
  { title: 'Privacy Policy', text: 'This Privacy Policy (hereinafter - the Privacy Policy) applies to all information that the Company may receive about the User when using the WEB-site www.daniertech.com' },
  { title: 'General', text: 'Daner Limited  respects the privacy of every individual who visits our website. This Privacy Policy states: the type of information collected and how that information is used. For the purposes of this policy Danier Limited  Website (www.daniertech.com) is referred to as “Company” and includes the organization and its representatives. Company will never release information pertaining to its users unless lawfully required to do so. Company has adequate safeguards in place to protect the collected information and to prevent unauthorized disclosure of user’s personal and collected information. The Company may be required to update this policy from time to time' },
  { title: 'Personally Identifiable Information', text: 'Company does not collect any Personally Identifiable Information about its user unless a user voluntarily provides that information. We do maintain a log of the IP address of all visitors to our website. We collect information from a user when they voluntarily fill out a form on our website. This information is treated as personal and kept confidential, it is collected in order to help the Company fulfill your request. Company will not sell, share, or rent this information to any third-party.' },
  { title: 'Non-Personally Identifiable Information', text: 'Company collects Non-Personally Identifiable Information (Automatically) about its user via cookies and various other services to aid us in improving our services. Information Collected: the type of browser used, IP address, operating system, link from which users reach our site – be it via advertisements, search, or directories. Additionally using selected service providers, we collect information regarding a user’s activity on the website and customize certain site functions based on their location.' },
  { title: 'Cookies & Third Party Service Providers', text: 'Company collects Non-Personally Identifiable Information (Automatically) via first-party cookies and third-party cookies. Cookies are small files that Company (or one of our service providers) transfers to a user’s computer via their web browser that collects certain Non Personal Identification Information. Cookies cannot access or deploy programs, and cannot contain or deliver viruses. We use selected third party service providers to help us optimize our ads across the Internet, such as services offered by Google, i.e., Google Analytics, Google Ads, and others of a similar nature which require first-party cookies and third-party cookies. Company uses this information, unless otherwise stated, for monitoring advertisements and improving marketing efforts. Company will not facilitate the merging of Personally Identifiable Information with Non-Personally Identifiable Information, ensuring our users privacy and safety as best as we can.' },
  { title: 'Acceptance Of Policy', text: 'By visiting and browsing the Company website, you as a user, signify your acceptance with the terms and conditions set within this policy. In the event of changes in the policy, your continued usage will be construed as acceptance of those changes.' },
  { title: 'Contact Us', Text: () => <span>Users may contact the Company with any questions and queries via email at <a href='mailto:support@daniertech.com'>{'support@daniertech.com'}</a>. We honor all requests to remove information from our databases.</span> },
]

const PrivacyPolicy: FC = () => {
  return (
    <PolicyPage title="Privacy Policy" policiesList={policiesList} />
  )
}

export default PrivacyPolicy