type ServicesList = {
  title: string;
  param: string;
  text?: string;
};

export const SERVICES = Object.freeze({
  softwareDev: {
    title: "Software Development",
    text: "Our company provides comprehensive software development services, catering to diverse needs and requirements. From concept to deployment, our team of skilled professionals ensures the delivery of high-quality, custom software solutions that align with our clients\' goals and drive business success. With expertise in various technologies and a client-centric approach, we are committed to delivering innovative and reliable software products to meet the ever-evolving demands of the market.",
    param: "software",
  },
  testingAndQA: {
    title: "Testing & QA",
    text: "We possess extensive expertise in software testing, ensuring the delivery of top-notch quality software solutions. With a team of highly skilled QA specialists, we rigorously test our applications to guarantee their reliability, functionality, and security, providing our clients with robust and bug-free software products. We follow industry best practices and employ advanced testing methodologies to deliver superior software that meets the highest quality standards.",
    param: "testing",
  },
  appServices: {
    title: "Application Services",
    param: "application",
  },
  design: {
    title: "UX/UI Design",
    param: "ux",
  },
  itConsulting: {
    title: "IT Consulting",
    text: "We provide comprehensive IT consulting services, providing expert guidance and strategic insights to help businesses leverage technology for their growth and success. With our deep industry knowledge and technical expertise, we assist clients in identifying optimal IT solutions, optimizing processes, and implementing effective strategies to drive efficiency and maximize ROI. Our dedicated team of IT consultants works closely with clients to understand their unique challenges and objectives, delivering tailored recommendations and innovative solutions to propel their digital transformation journey.",
    param: "it",
  },
  rdServices: {
    title: "R&D Services",
    text: "Our company provides cutting-edge R&D services, driving innovation and staying at the forefront of technological advancements. With a dedicated team of researchers and engineers, we collaborate with clients to develop groundbreaking solutions, pushing the boundaries of what\'s possible in their respective industries. From conceptualization to prototyping and implementation, our R&D services empower businesses to create disruptive products and stay ahead of the competition in today\'s rapidly evolving market.",
    param: "rd",
  },
  dataAnalytics: {
    title: "Data Analytics",
    text: "We offer data analytics services, helping businesses unlock valuable insights from their data to make informed decisions and drive growth. With a team of experienced data scientists and analysts, we leverage advanced analytics techniques and cutting-edge tools to analyze and interpret data, providing actionable recommendations and strategies to optimize business performance and gain a competitive edge in the market. Our data analytics services enable organizations to harness the power of data-driven decision-making, fuel innovation, and achieve measurable results.",
    param: "data",
  },
  infraServices: {
    title: "Infrastructure Services",
    param: "infra",
  },
  cyberServices: {
    title: "Cybersecurity Services",
    param: "cyber",
  },
});

export const SERVICES_LIST: ReadonlyArray<ServicesList> = [
  SERVICES.softwareDev,
  SERVICES.testingAndQA,
  SERVICES.appServices,
  SERVICES.design,
  SERVICES.itConsulting,
  SERVICES.rdServices,
  SERVICES.dataAnalytics,
  SERVICES.infraServices,
  SERVICES.cyberServices,
];
