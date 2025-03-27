
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/custom/PageHeader';
import { SectionHeading } from '@/components/ui/custom/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Book, Download } from 'lucide-react';

const Documentation = () => {
  const faqItems = [
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
        title="Documentation" 
        subtitle="Technical specifications, guides, and resources"
      />
      
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-2/3">
            <SectionHeading
              title="Technical Resources"
              subtitle="Comprehensive documentation for developers, users, and token holders"
            />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gabby" />
                  $Gabby AI Whitepaper
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our comprehensive whitepaper details the complete vision, tokenomics, technical implementation, and roadmap for the $Gabby platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Read Online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-secondary/30 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-4">Advanced FAQ</h3>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-bold mb-2 text-gabby">{item.question}</h4>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  View All FAQs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <SectionHeading
            title="AI Technical Implementation"
            subtitle="Gabby's intelligence runs on the ELIZA OS V2 framework"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>AI Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">LLM Integration:</span> Model-agnostic usage with optimized prompting</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Memory and Knowledge Base:</span> Vector database with RAG implementation</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Plugins/Tools:</span> API calls, code execution, external integrations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Voice & Video Pipeline:</span> Speech-to-text, TTS, avatar rendering</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Web3 Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">$GABBY Token Contract (BEP-20):</span> Controls supply, transfers, upgradability</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Payment & Session Handling:</span> Off-chain logic with on-chain settlement</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Staking and Tier Management:</span> Upgradeable contract for token locking</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gabby mt-2"></div>
                    <p><span className="font-medium">Agent Interaction:</span> TypeScript (ELIZA V2) + minimal on-chain calls</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
