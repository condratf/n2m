import { routes } from "@/routes"

export const contacts = [
  { title: 'Phone number:', number: '+85256474293', isPhone: true },
]

export const aboutLinks = [
  { name: 'Services', href: routes.ourservices },
  { name: 'Policies', href: routes.policies.termsOfUse },
  { name: 'Contacts', href: routes.contacts },
]
export const policiesLinks = [
  { name: 'Terms of use', href: routes.policies.termsOfUse },
  { name: 'Privacy policy', href: routes.policies.privacyPolicy },
  { name: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
  { name: 'Commissions and fees', href: routes.policies.commissionsAndFees },
]
export const licensesLinks = [
  { name: 'RM 8, S-V 6/F, VALIANT INDUSTRIAL CENTRE 2-12 AU PUI WAN ST FO TAN NT, HONG KONG', href: '' },
  { name: 'UNI: Unit 04, 7/f, Bright way, Tower, no. 33, Mong kok road, Kowloon, Hong Kong', href: '' },
  { name: 'Company number: 1205540', href: '' },
  { name: '29 June 2016, MS Ada L L CHUNG, Registrar of Companies, Hong Kong Special Administrative Region', href: '' },
  { name: '2016-2023 © DANIER LTD. DANIER LIMITED', href: '' },
]
