
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Faq = () => {
  const faqs = [
    {
      question: "What makes $Gabby uniquely valuable?",
      answer: "$Gabby is the only AI platform offering paid, blockchain-secured conversational interactions, delivering unmatched access to exclusive, verified intelligence."
    },
    {
      question: "How can I profit with $Gabby?",
      answer: "Earn tokens through active engagement, staking, and validating community-shared rumors and insights."
    },
    {
      question: "Will my data remain secure?",
      answer: "Absolutely. Blockchain technology ensures every interaction and transaction is secure, transparent, and verifiable."
    },
    {
      question: "Is the information from $Gabby reliable?",
      answer: "Yes, reliability is ensured by blockchain transparency and rigorous community validation."
    },
    {
      question: "Where can I purchase $Gabby tokens?",
      answer: "Acquire your tokens during our exclusive launch event and subsequently through selected decentralized exchanges."
    },
    {
      question: "How are partial refunds handled if a call ends early?",
      answer: "When a user starts a timed session with Gabby, tokens are locked in a smart contract escrow. If the call ends before the scheduled time, the unused portion of tokens is automatically refunded based on actual duration, with a minimum charge of one minute."
    },
    {
      question: "How does concurrency management work?",
      answer: "The platform uses a queue-based system for high demand periods. Premium tier users (Silver and above) receive priority access, while the AI backend scales horizontally to accommodate multiple simultaneous sessions, limited primarily by token economics rather than technical constraints."
    },
    {
      question: "How is conversation privacy maintained while using blockchain?",
      answer: "While all financial transactions are recorded on-chain for transparency, the actual content of conversations is never stored on the blockchain. Only payment references and metadata are recorded on-chain, with conversation content encrypted and stored off-chain using secure database systems."
    },
    {
      question: "What happens if the AI generates incorrect information?",
      answer: "For rumor validation, the community can flag information as confirmed or disputed, with economic incentives for accurate verification. For regular conversations, users can report inaccurate information, and the AI training model is continuously improved based on feedback and additional verified data sources."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Answers to common questions about Gabby AI"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions? Join our community on Telegram for direct support.
          </p>
          <a 
            href="https://t.me/reality_spiral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gabby hover:underline mt-2"
          >
            @reality_spiral
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
