import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bot, Network, Zap, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

export function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      {/* add heading  */}
      <h2 className="text-7xl pb-24 font-bold text-center">Features</h2>
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Bot}
                title="AI-Powered Interface"
                description="ChatGPT-like interface for intelligent DeFi interactions"
              />
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative sm:mb-0 p-5">
                <ChatInterface />
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Zap}
                title="Multi-Protocol Integration"
                description="Compare and optimize across thousands of DeFi protocols"
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_15%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[76/59] overflow-hidden rounded-lg">
                  <ProtocolsGrid />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
              Cross-chain DeFi optimization with real-time market intelligence.
            </p>

            <div className="flex justify-center gap-6 overflow-hidden">
              <BlockchainLogo
                label="Ethereum"
                logoSrc="/ethereum.svg"
              />
              <BlockchainLogo
                label="Polygon"
                logoSrc="/polygon.svg"
              />
              <BlockchainLogo
                label="Base"
                logoSrc="/base.svg"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

// Component for the Chat Interface
const ChatInterface = () => {
  return (
    <div className="relative w-full h-full bg-[#0a0613] p-0 overflow-hidden">
      {/* Main chat container with border */}
      <div className="relative w-full h-full border border-[#AD90FE]/20 rounded-lg overflow-hidden">
        {/* Left sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#0e0a1a] border-r border-[#AD90FE]/20 flex flex-col items-center py-6">
          <div className="w-8 h-8 bg-[#AD90FE] rounded-md mb-6 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div className="w-8 h-8 bg-[#1e1633] rounded-full mb-4 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#AD90FE] rounded-full"></div>
          </div>
          <div className="w-8 h-8 bg-[#1e1633] rounded-full mb-4 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#AD90FE] rounded-full"></div>
          </div>
          <div className="w-8 h-8 bg-[#1e1633] rounded-full mb-4 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#AD90FE] rounded-full"></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="ml-16 p-6 h-full">
          {/* Header */}
          <div className="flex items-center mb-6">
            <div className="mr-3 text-white font-medium">Stratifi</div>
            <div className="px-3 py-0.5 bg-[#1e1633] rounded-full text-xs text-[#AD90FE] border border-[#AD90FE]/30">
              AI-Powered Agent
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-6">
            {/* Bot message */}
            {/* <div className="flex gap-3">
                            <div className="w-8 h-8 bg-[#AD90FE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-[#AD90FE]">AI</span>
                            </div>
                            <div className="bg-[#1e1633] p-3 rounded-lg text-white max-w-[80%]">
                                Hello! How can I assist you with your loan needs today?
                            </div>
                        </div> */}

            {/* User message */}
            <div className="flex gap-3 justify-end">
              <div className="bg-[#AD90FE]/20 p-3 rounded-lg text-xs text-white max-w-[80%]">
                I need to check my portfolio performance.
              </div>
            </div>

            {/* Bot response with portfolio */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#AD90FE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#AD90FE]">AI</span>
              </div>
              <div className="space-y-3 max-w-[90%]">
                <div className="bg-[#1e1633] p-3 rounded-lg text-white text-xs">
                  Your portfolio is up 4.7% this week. Here are some metrics:
                </div>
                <div className="bg-[#1e1633] p-3 rounded-lg text-white text-xs">
                  <ul className="list-disc pl-5 space-y-1 text-[8px]">
                    <li>Check yield opportunities</li>
                    <li>View transaction history</li>
                    <li>Analyze token performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Input area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 ml-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask Stratifi anything about DeFi..."
                className="w-full bg-[#1e1633] border border-[#AD90FE]/30 rounded-lg p-3 pl-4 pr-20 text-white focus:outline-none focus:border-[#AD90FE]/60"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#AD90FE] text-black px-4 py-1 rounded-md text-sm">
                Send
              </button>
            </div>

            {/* Bottom navigation */}
            {/* <div className="flex justify-center mt-4 gap-6">
                            <div className="text-[#AD90FE] text-sm">Portfolio</div>
                            <div className="text-gray-400 text-sm">Yield</div>
                            <div className="text-gray-400 text-sm">Transactions</div>
                        </div> */}
          </div>

          {/* <div className="absolute top-0 left-16 w-4 h-4 border-l-2 border-t-2 border-[#AD90FE]/50"></div> */}
          {/* <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#AD90FE]/50"></div>
                    <div className="absolute bottom-0 left-16 w-4 h-4 border-l-2 border-b-2 border-[#AD90FE]/50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#AD90FE]/50"></div> */}
        </div>
      </div>
    </div>
  );
};

// Component to display the protocols grid
const ProtocolsGrid = () => {
  const protocols = [
    {
      name: "MORPHO",
      percentage: "55,69%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 18.5L5 16V8l7 4.5V20.5zm1-9L6 7l6-3.5L18 7l-5 4.5zm6 6.5l-6 3.5V13l6-3.5v7.5z" />
        </svg>
      ),
    },
    {
      name: "SEAMLESS",
      percentage: "31,19%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      ),
    },
    {
      name: "MOONWELL",
      percentage: "9,95%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
    },
    {
      name: "EULER",
      percentage: "7,61%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      ),
    },
    {
      name: "COMPOUND",
      percentage: "6,32%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M16 6h-6v8.59L5.71 9.3l-2.12 2.12L12 19.83l8.41-8.41-2.12-2.12L14 14.59V6z" />
        </svg>
      ),
    },
    {
      name: "FLUID",
      percentage: "5,83%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        </svg>
      ),
    },
    {
      name: "AAVE",
      percentage: "5,43%",
      logo: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#0a0613] p-3 flex">
      {/* Left side gradient bar */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-[#AD90FE] to-[#7c3aed]/30">
        <div className="w-full h-full flex flex-col">
          {Array(16)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full h-1 bg-[#AD90FE]/20 my-[1px]"
              ></div>
            ))}
        </div>
      </div>

      {/* Protocol cards grid */}
      <div className="ml-10 flex-1 grid grid-cols-2 gap-3">
        {protocols.map((protocol, index) => (
          <div
            key={index}
            className="relative bg-[#0e0a1a] p-4 rounded-lg flex flex-col items-center justify-center"
          >
            <div className="mb-2">{protocol.logo}</div>
            <div className="text-white font-medium text-sm ">
              {protocol.name}
            </div>
            <div className="text-[#AD90FE] font-sm">{protocol.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-none shadow-zinc-950/5 overflow-hidden hover:shadow-lg transition-shadow duration-300",
      className
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className,
}: DualModeImageProps) => (
  <>
    <img
      src={darkSrc}
      className={cn(
        "hidden dark:block w-full h-full object-cover object-center",
        className
      )}
      alt={`${alt} dark`}
      width={width}
      height={height}
    />
    <img
      src={lightSrc}
      className={cn(
        "shadow dark:hidden w-full h-full object-cover object-center",
        className
      )}
      alt={`${alt} light`}
      width={width}
      height={height}
    />
  </>
);

interface BlockchainLogoProps {
  label: string;
  logoSrc: string;
  className?: string;
}

const BlockchainLogo = ({ label, logoSrc, className }: BlockchainLogoProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center justify-center rounded-[15px] p-4">
        <Image
          src={logoSrc}
          alt={`${label} logo`}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
