import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.jpg" alt={siteConfig.author} />
            <AvatarFallback>AVS</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <div className="text-muted-foreground text-lg py-4">
          <p className="mb-5">
          I'm Andrew Salvador, a software developer with two years of experience in crafting impactful digital solutions. Initially specializing in front-end development, my journey in technology has been driven by a profound passion for innovation and a relentless pursuit of excellence. Currently expanding my expertise to include back-end systems, mastering tools like Google Firebase, Express, PostgreSQL and others to build robust and scalable applications.</p>
          <p>
          My focus has shifted towards leveraging back-end languages and AI technologies to pioneer automated solutions for the B2B sector. My ambition is to continue evolving within the tech industry, driving advancements that simplify and enhance business operations."
          </p>
        </div>
      </div>
    </div>
  );
}