import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import AboutFramerMotion from "@/components/framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiFirebase, 
  SiExpress, 
  SiNodedotjs, 
  SiPostgresql, 
  SiCss3, 
  SiMaterialdesign, 
  SiTypescript, 
  SiTailwindcss, 
  SiSwagger, 
  SiFigma, 
  SiSendinblue, 
  SiStripe,
} from 'react-icons/si';

import { FaKeyboard } from "react-icons/fa";
import ProjectsData from "../app/Projects/projectsData";
import IconWrapper from "@/components/ui/icon-wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Andrew Portfolio & Blog",
  description: "Portfolio & Blog",
};

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);

  return (
    <>
    <AboutFramerMotion>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-0 lg:py-32 lg:mt-8">
        <div className="container flex flex-col gap-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-balance">
            From Concept to Code: Your Project Partner for Success
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          I&apos;m Andrew, a dedicated software developer ready to transform your ideas  into impactful solutions.          
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="mailto:andrewsalva88@gmail.com"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
             Let&apos;s Collaborate!
            </Link>
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              View my blog
            </Link>
          </div>
        </div>
      </section>
      </AboutFramerMotion>

      <AboutFramerMotion>

        <IconWrapper>
        <div className="container max-w-7xl mx-auto py-8 lg:py-10 flex justify-center items-center gap-8 flex-wrap">
          <SiJavascript style={{ color: "var(--icon-color)" }} className="text-4xl" title="JavaScript" />
          <SiPython style={{ color: "var(--icon-color)" }} className="text-4xl" title="Python" />
          <SiReact style={{ color: "var(--icon-color)" }} className="text-4xl" title="ReactJS" />
          <SiNextdotjs style={{ color: "var(--icon-color)" }} className="text-4xl" title="NextJS" />
          <SiFirebase style={{ color: "var(--icon-color)" }} className="text-4xl" title="Firebase" />
          <SiExpress style={{ color: "var(--icon-color)" }} className="text-4xl" title="Express" />
          <SiNodedotjs style={{ color: "var(--icon-color)" }} className="text-4xl" title="NodeJs" />
          <SiTypescript style={{ color: "var(--icon-color)" }} className="text-4xl" title="Typescript" />
          <SiSendinblue style={{ color: "var(--icon-color)" }} className="text-4xl" title="Sendinblue" />
          <SiStripe style={{ color: "var(--icon-color)" }} className="text-4xl" title="Stripe" />
          <SiPostgresql style={{ color: "var(--icon-color)" }} className="text-4xl" title="PostgreSQL" />
          <SiCss3 style={{ color: "var(--icon-color)" }} className="text-4xl" title="CSS3" />
          <SiMaterialdesign style={{ color: "var(--icon-color)" }} className="text-4xl" title="Material UI" />
          <SiTailwindcss style={{ color: "var(--icon-color)" }} className="text-4xl" title="Tailwind" />
          <SiSwagger style={{ color: "var(--icon-color)" }} className="text-4xl" title="APIs" />
          <SiFigma style={{ color: "var(--icon-color)" }} className="text-4xl" title="Figma" />
          </div>
          </IconWrapper>
      </AboutFramerMotion>

      <AboutFramerMotion>
      <div className="container max-w-6xl py-6 lg:py-10 lg:mt-44">
      <h1 className="font-black text-2xl lg:text-4xl mb-6">
      About me
      </h1>
      <section className="border border-gray-300 rounded-3xl p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex flex-col gap-2">
            <Avatar className="h-48 w-48">
              <AvatarImage src="/avatar.jpg" alt="Andrew" />
              <AvatarFallback>Andrew</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-lg text-muted-foreground">
            <p>
              A passionate software developer with two years of professional experience, dedicated to turning code into high-quality solutions. With a knack for working independently and a commitment to excellence, aiming to drive your business goals to new heights.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-4">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">JavaScript</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Typescript</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Python</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">ReactJS</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">NextJS</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Google Firebase</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Express</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">NodeJs</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">PostgresSql</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">CSS3</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Material UI</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Tailwind</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">APIs</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md inline-block">Figma</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    </AboutFramerMotion>

    <div className="container mx-auto my-20">
      <AboutFramerMotion>
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      </AboutFramerMotion>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project, index) => (
          <AboutFramerMotion key={project.title + index}>
            <a href={project.link} className="block shadow-lg hover:shadow-xl transition duration-300">
              <Image src={project.image} alt={project.title} width={200} height={200} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </AboutFramerMotion>
        ))}
      </div>
    </div>

    <AboutFramerMotion>
      <section className="container max-w-4xl mx-auto py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h3>

        <div className="flex justify-center">
          <FaKeyboard className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black" title="keyboard" />
        </div>

        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
              />
            </li>
          ))}
        </ul>
      </section>
    </AboutFramerMotion>
    </>
  );
}