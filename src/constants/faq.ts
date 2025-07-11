type FAQData = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FAQData[] = [
  {
    id: "item-1",
    question: "What is NeoFi, and how does it work?",
    answer:
      "This modern, high-performance website template is designed specifically for Web3 products. It provides a robust foundation for startups aiming to build user-friendly, secure and scalable platforms in the cryptocurrency and blockchain space.",
  },
  {
    id: "item-2",
    question: "How is blockchain related to cryptocurrency?",
    answer:
      "Blockchain is the foundational technology behind cryptocurrencies. It operates as a decentralized ledger, securely recording all transactions across a network. This ensures transparency and data integrity, allowing cryptocurrencies to function without the need for central authorities or intermediaries.",
  },
  {
    id: "item-3",
    question: "Is Blockchain technology secure?",
    answer:
      "Yes — blockchain is designed to be secure at its core. It uses cryptographic hashing, decentralization and consensus mechanisms to protect data. Each block is linked to the previous one, making tampering with the records extremely difficult and easy to detect.",
  },
  {
    id: "item-4",
    question: "How does blockchain enhance security?",
    answer:
      "Blockchain improves security by removing single points of failure and distributing data across a network. Its cryptographic structure ensures that records can't be altered and every transaction leaves behind a permanent, auditable trail.",
  },
  {
    id: "item-5",
    question: "Can blockchain be hacked?",
    answer:
      "The blockchain protocol itself is highly secure and has never been successfully hacked. However, applications built on top of it — like wallets or smart contracts — can be vulnerable if not properly secured. Strong development practices and user awareness are essential for maintaining safety.",
  },
  {
    id: "item-6",
    question: "How can I implement blockchain in my industry?",
    answer:
      "Begin by identifying areas where transparency, automation, or trust are essential — such as supply chain management, identity verification, or secure payments. Collaborate with blockchain developers to design tailored solutions, starting with small-scale pilots before scaling up.",
  },
];
