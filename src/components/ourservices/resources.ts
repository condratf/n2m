import { SERVICES } from "@/app/constants";

export const cactusesBlockItems = [
  {
    title: "Application Services",
    param: SERVICES.appServices.param,
    img: "/assets/graphic/cactus/long_cactus_2.png",
    text: "Our company offers comprehensive application development services, catering to diverse business needs. From conceptualization to deployment, we specialize in crafting customized applications that are tailored to our clients' requirements, providing innovative solutions that drive business growth and success. With a focus on user experience, functionality, and scalability, we leverage our expertise to deliver high-quality application services that meet the evolving demands of the market.",
  },
  {
    title: "UX/UI Design",
    param: SERVICES.design.param,
    img: "/assets/graphic/cactus/long_cactus_1.png",
    text: "Our team offers professional UX/UI design services, ensuring visually stunning and intuitive user interfaces for enhanced user experiences. With a focus on user-centric design principles and meticulous attention to detail, our talented designers create compelling designs that captivate users and differentiate your software from the competition. We strive to deliver aesthetically pleasing and user-friendly designs that seamlessly blend form and function, providing a delightful user experience across various platforms and devices.",
  },
];
export const lastBlockItems = {
  desktop: [
    {
      title: "Infrastruct ure Services",
      param: SERVICES.infraServices.param,
      text: "Our company offers comprehensive infrastructure services, providing businesses with robust and scalable IT infrastructure solutions to support their operations. From network design and implementation to cloud migration and management, our team of experts ensures that our clients have a reliable and secure infrastructure that meets their current and future needs. With a focus on efficiency and resilience, we optimize infrastructure performance, minimize downtime, and enable seamless connectivity for businesses to thrive in today's digital landscape.",
    },
    {
      title: "Cybersecur ity Services",
      param: SERVICES.cyberServices.param,
      text: "Our team of cybersecurity specialists provides cybersecurity services, ensuring the protection of our clients' digital assets and critical information from evolving cyber threats. With expertise in risk assessment, vulnerability management, and incident response, we develop customized strategies and implement robust security measures to safeguard businesses against unauthorized access, data breaches, and other cyber attacks. Our cybersecurity services help businesses establish a strong defense posture, maintain regulatory compliance, and instill confidence in their stakeholders regarding the security of their digital infrastructure.",
    },
  ],
  mobile: [
    {
      title: "Infrastructure Services",
      param: SERVICES.infraServices.param,
      text: "Our company offers comprehensive infrastructure services, providing businesses with robust and scalable IT infrastructure solutions to support their operations. From network design and implementation to cloud migration and management, our team of experts ensures that our clients have a reliable and secure infrastructure that meets their current and future needs. With a focus on efficiency and resilience, we optimize infrastructure performance, minimize downtime, and enable seamless connectivity for businesses to thrive in today's digital landscape.",
    },
    {
      title: "Cybersecurity Services",
      param: SERVICES.cyberServices.param,
      text: "Our team of cybersecurity specialists provides cybersecurity services, ensuring the protection of our clients' digital assets and critical information from evolving cyber threats. With expertise in risk assessment, vulnerability management, and incident response, we develop customized strategies and implement robust security measures to safeguard businesses against unauthorized access, data breaches, and other cyber attacks. Our cybersecurity services help businesses establish a strong defense posture, maintain regulatory compliance, and instill confidence in their stakeholders regarding the security of their digital infrastructure.",
    },
  ],
};

export type SectionKeys =
  | "software"
  | "testing"
  | "application"
  | "ux"
  | "it"
  | "rd"
  | "data"
  | "infra"
  | "cyber";
