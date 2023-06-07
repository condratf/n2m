export const solutionTexts = {
  'High Load System': { title: 'High Load System', text: 'Our specialists provide high load system services, ensuring optimal performance and scalability for systems handling heavy user traffic and large volumes of data' },
  'Mobile App': { title: 'Mobile App', text: 'Our company offers comprehensive mobile app services, delivering innovative and user-friendly mobile applications for iOS and Android platforms.' },
  'Web App': { title: 'Web App', text: 'We provide web app services, developing interactive and responsive web applications that are tailored to our clients\' requirements. Our team ensures user-friendly interfaces and seamless functionality to deliver engaging web experiences for businesses across various industries' },
  'Cloud App': { title: 'Cloud App', text: 'Our specialists provide cloud app services, leveraging the power of cloud computing to develop scalable and flexible applications that can be accessed from anywhere. Our team ensures secure data storage, seamless integration, and efficient deployment of cloud-based solutions to enhance business productivity and agility.' },
  'Blockchain': { title: 'Blockchain', text: 'Our expertise in blockchain development enables us to deliver innovative applications that enhance trust, streamline processes, and enable secure transactions for businesses.' },
  'Tech Consulting': { title: 'Tech Consulting', text: 'We offers comprehensive tech consulting services, guiding businesses in leveraging technology to achieve their strategic goals and digital transformation initiatives.' },
  'Cross-Platform Software': { title: 'Cross-Platform Software', text: 'Our expertise in cross-platform development ensures cost-effectiveness, faster time to market, and consistent user experiences across different operating systems, maximizing the reach and impact of our clients\' software solutions.' },
} as const

export type TextKeys = keyof typeof solutionTexts

export const btnList = Object.keys(solutionTexts) as TextKeys[]