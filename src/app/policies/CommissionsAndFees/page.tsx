import { FC } from 'react'
// local
import { PolicyPage } from '@/components/policies'

export const CommissionsAndFees: FC = () => {
  const policiesList = [
    { title: 'Overview', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    {
      title: 'Acceptance of this policy', ul: [
        'Lorem ipsum dolo',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis',
        'Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    },
    {
      title: 'Collection of information by third party services', ol: [
        'Lorem ipsum dolo',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis',
        'Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    },
    { title: 'Use of collected information', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ]

  return (
    <PolicyPage title="Commissions And Fees" policiesList={policiesList} />
  )
}

export default CommissionsAndFees