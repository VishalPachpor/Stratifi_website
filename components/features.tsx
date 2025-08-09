import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bot, Network, Zap, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

export function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      {/* heading */}
      <h2 className="text-7xl pb-24 font-light text-center">
        What your agent can do
      </h2>
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Bot}
                title="AI-powered interface"
                description="Tell it what you want, in plain English. It drafts the route, runs a sim, and waits for your OK."
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
                title="Multi-protocol support"
                description="Checks net APY after gas and slippage across supported Base lenders: Aave v3, Morpho, Moonwell, Seamless, Compound."
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
            <p className="mx-auto my-6 max-w-xl text-balance text-center text-2xl font-semibold">
              Live on Base. Ethereum and Starknet are up next.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 overflow-hidden px-4">
              <BlockchainLogo label="Ethereum" logoSrc="/ethereum.svg" />
              <BlockchainLogo label="Katana" logoSrc="/katana.jpg" />
              <BlockchainLogo label="Base" logoSrc="/Base.svg" />
              <BlockchainLogo label="Starknet" logoSrc="/Starknet.png" />
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
            <span className="text-white text-sm font-medium">S</span>
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
        <div className="ml-16 p-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="mr-3 text-white font-medium text-sm">Stratifi</div>
            <div className="px-2 py-1 bg-[#1e1633] rounded-full text-xs text-[#AD90FE] border border-[#AD90FE]/30">
              AI-Powered Agent
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 space-y-4 mb-4">
            {/* User message */}
            <div className="flex gap-3 justify-end">
              <div className="bg-[#AD90FE]/20 p-3 rounded-lg text-sm text-white max-w-[80%]">
                I need to check my portfolio performance.
              </div>
            </div>

            {/* Bot response demo */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#AD90FE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#AD90FE] text-sm font-medium">AI</span>
              </div>
              <div className="space-y-2 max-w-[90%]">
                <div className="bg-[#1e1633] p-3 rounded-lg text-white text-sm">
                  Demo response. Connect your wallet to view portfolio and run
                  simulations before execution.
                </div>
                <div className="bg-[#1e1633] p-3 rounded-lg text-white text-sm">
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Simulate a rebalance across supported markets</li>
                    <li>Review gas and slippage assumptions</li>
                    <li>Approve and execute via your smart account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Input area */}
          <div className="mt-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask Stratifi anything about DeFi..."
                className="w-full bg-[#1e1633] border border-[#AD90FE]/30 rounded-lg p-3 pl-4 pr-20 text-white text-sm focus:outline-none focus:border-[#AD90FE]/60"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#AD90FE] text-black px-3 py-1 rounded text-sm font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component to display the protocols grid
const ProtocolsGrid = () => {
  const protocols = [
    { name: "MORPHO", logoSrc: "/Morpho.svg" },
    { name: "MOONWELL", logoSrc: "/moonwell.png" },
    { name: "SEAMLESS", logoSrc: "/seamless.avif" },
    { name: "AAVE", logoSrc: "/aave.svg" },
    { name: "COMPOUND", logoSrc: "/compound.svg" },
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
            <div className="mb-2">
              <Image
                src={protocol.logoSrc}
                alt={`${protocol.name} logo`}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <div className="text-white font-medium text-sm ">
              {protocol.name}
            </div>
            <div className="text-[#AD90FE] font-sm">Supported</div>
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
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center justify-center rounded-[15px] p-3 sm:p-4">
        <Image
          src={logoSrc}
          alt={`${label} logo`}
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-xs sm:text-sm">
      {label}
    </span>
  </div>
);
