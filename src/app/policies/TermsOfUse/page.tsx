import { FC } from 'react'
// local
import { PolicyPage } from '@/components/policies'

const QuestionsText:FC = () => (
  <span>
    Please send  your message to <a href='mailto:support@daniertech.com'>{'support@daniertech.com'}</a> if you have any questions about the Company&apos;s privacy policy or other legal guidelines.
  </span>
)

const policiesList = [
  { title: '', text: 'These terms and conditions of use ("Terms") apply to your use of the daniertech.com website (the "Site"), provided by Danier Limited and its affiliates ("Company"). Company does not take any responsibility for the accuracy of the information present on this Site. Company reserves the right to change any and/or all information (including Terms). If  the  Company does make any such changes, the revised documents will be posted on this Site and the publication date will be updated. However, Company will not provide any other type of notice to you directly. We sincerely encourage you to periodically check all documents relevant to your situation in order to stay informed about their status. For more information about our online privacy and cookie practices please read our Privacy Policy.' },
  { title: 'DISCLAIMER OF WARRANTY', text: 'All materials contained herein are provided "AS IS" without warranty. Company disclaims warranties of any kind, including all conditions of merchantability, whether expressly implied or statutory, fitness for a particular purpose, title and non-infringement as well as warranties concerning availability, accuracy or content of data or other information. Company does not warrant that the Site or the functions, features, or content contained therein will be timely, secure, uninterrupted or error free, or that defects will be corrected. Company shall not be responsible for any malfunctions, errors, crashes or other adverse events that may occur in connection with your use of the Site. Any use of the materials of this Site is at your own discretion and risk and you are solely responsible for any damage to your computer system, including but not limited to loss of data. If you are dissatisfied with the Site or any content or function thereon, you should simply discontinue accessing the Site.' },
  { title: 'LIMITATION OF LIABILITY', text: 'Under no circumstances shall Company be liable for any kind of damages indirect or consequential, including loss of profits or revenues and/or costs of replacement goods or damages resulting from the use of the information or materials present, even if Company was informed in advance of the possibility of such damages.' },
  { title: 'USER CONDUCT', text: '' },
  {
    title: 'While using the Site, you shall not:', ul: [
      '"Upload, post or transmit to, or otherwise publish through, the Site any material that violates any provision of these Terms;',
      '"Restrict or inhibit any other user from using and enjoying the Site;',
      '"Conduct yourself or encourage others to conduct themselves in a manner that would constitute a criminal offense or give rise to civil liability;',
      '"Impersonate or misrepresent your affiliation with any other person or entity;',
      '"Upload, post, publish, transmit, reproduce, distribute or in any way exploit any information or other material obtained through the Site for commercial purposes (other than as expressly permitted by the provider of such information or other material);',
      '"Engage in spamming or flooding;',
      'or "Attempt to gain unauthorized access to other computer systems through the Site.”',
    ]
  },
  {
    title: '', text: "Company retains the right, but does not assume any obligation, to monitor the Site and to disclose any information as Company deems necessary or appropriate to satisfy any law, regulation or other governmental request, to comply with any subpoena or other legal process, to operate the Site properly, to protect ourselves or our users or for other reasons as Company determines in our sole discretion. Company reserves the right to remove or refuse to post any information or materials, in whole or in part, that we determine to be  unacceptable, undesirable, inappropriate or in violation of these Terms. Company may also suspend or terminate your use of the Site at any time."
  },
  { title: 'USE OF CONTENT', text: 'All the information, communications, software, scripting, photos, text, video, graphics, music, sounds, images and other materials found on this Site (collectively referred to as "Content") may be used for informational and non-commercial or personal use only, provided you do not modify the materials and that you retain all copyright and other proprietary notices contained in the materials. You may not use the content of the Site for commercial purposes without the prior expressed written consent of the Company . The unauthorized copying, displaying, or other use of any Content from this Site is a violation of the domestic and/or international legislation and may be pursued to the full extent of federal and state law. Permission to link to Company from any site is not required, but prior notification to Company would be appreciated.' },
  { title: 'COPYRIGHT AND TRADEMARKS', text: 'All product and brand names are trademarks or registered trademarks of their respective holders. The trademark of Company is provided for your information and by making it available Company does not grant you a license to use it. The copyright in all material provided on this Site is held by  the Company or by the original creator of the material. Neither title nor intellectual property rights are transferred to you, but remain the full and complete rights and title of the  Company or the original creator.' },
  { title: 'LINKS TO THIRD-PARTY SITES', text: 'This Site may provide links to other third-party sites. Company makes no representations whatsoever about any other site which you may access through this Site. You acknowledge and agree that the Company is not responsible for the content of any linked site or any link contained in a linked site. References on this Site to any names, marks, products or services of any third parties or hypertext links to third party sites or information are provided solely for your convenience and do not constitute an endorsement by or association with Company of such sites or the content, products, advertising or other materials presented on such sites. You acknowledge and agree that the Company is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on such linked sites.' },
  { title: 'QUESTIONS', Text: QuestionsText },
]

const TermsOfUse: FC = () => {
  return (
    <PolicyPage title="Terms of Use" policiesList={policiesList} />
  )
}

export default TermsOfUse