"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Books",
    content: `
      <p>I really like books. I read a variety of non-fiction, but my primary interests are philosophy, psychology and religion. I&#39;ve read over 450 books so far, and I&#39;ve wrote a few hundred book reviews.</p>

    <p>I used to post my reviews on <a href="https://www.goodreads.com/tiagofaleiro" target="_blank" rel="noopener noreferrer">GoodReads</a>, but nowadays I mostly post to my <a href="https://www.instagram.com/tiagobooks/" target="_blank" rel="noopener noreferrer">Instagram</a> account where I share books and ideas I find interesting.</p>

    <p>From time to time I also write content that isn&#39;t strictly about books, for example about the <a href="https://medium.com/@tiagovf/the-dystopian-horizon-how-ai-challenges-the-fabric-of-society-7ed691317ea1" target="_blank" rel="noopener noreferrer">dangers of AI</a> or <a href="https://tiagovf.medium.com/capturing-knowledge-from-cave-art-to-artificial-intelligence-models-72f819ecd30a" target="_blank" rel="noopener noreferrer">evolution of knowledge management</a>.</p>
  `,
  },
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M7 1H5v3H2v2h3v3h2V6h3V4H7V1zm12 1h-7v2h7v10h-6v6H5v-9H3v11h12v-2h2v-2h2v-2h2V2h-2zm-2 16h-2v-2h2v2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Raven",
    content: `
    <p><a href="http://www.ravenotes.com" target="_blank" rel="noopener noreferrer">Raven</a> is an app I&#39;m developing for note-taking. It transforms how people capture, organize, and access knowledge from books⁠. I always struggled with note taking, being very time-consuming and inefficient⁠. So I fixed it.</p>

    <p>Raven uses AI to automate the note-taking process⁠, creating a well-structured, searchable digital database of personal knowledge⁠.</p>
  `,
  },
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2V5zm2 12h10V7H4v10z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Podcast",
    content: `
    <p>I have a <a href="https://www.anagogepodcast.com/" target="_blank" rel="noopener noreferrer">podcast</a> about philosophy and psychology. While very neglected recently, it&#39;s still something I&#39;m quite proud of, and has been a pleasure to interview people who have been extremely influential in my life, such as <a href="https://www.youtube.com/watch?v=cCaGrBaiGZo" target="_blank" rel="noopener noreferrer">John Vervaeke</a>, <a href="https://www.youtube.com/watch?v=gLwN0Cb3Zk8" target="_blank" rel="noopener noreferrer">Gregory Sadler</a> and <a href="https://www.youtube.com/watch?v=k1ysFfBs87U" target="_blank" rel="noopener noreferrer">Jonathan Pageau</a>.</p>
  `,
  },
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M8 5h2v2H8V5zM6 7h2v2H6V7zM4 9h2v2H4V9zm-2 2h2v2H2v-2zm2 2h2v2H4v-2zm2 2h2v2H6v-2zm2 2h2v2H8v-2zm8-12h-2v2h2V5zm2 2h-2v2h2V7zm2 2h-2v2h2V9zm2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2zm-2 2h-2v2h2v-2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "GitHub",
    content: `
    <p>I have no idea how to code, but I&#39;m nevertheless stubborn enough to try doing a bunch of small projects using the most horrible engineering known to man. I find coding to be one of the beautiful things that people can do. Literally building stuff by yourself using nothing but a computer.</p>

    <p>Unfortunately, I was never consistent and persistent enough to know how to code properly. But with modern tools and LLMs, it&#39;s quite fun to still be able to solve problems and build small personal projects. I have a few of them in my <a href="https://github.com/tiagovasc" target="_blank" rel="noopener noreferrer">Github</a>.</p>
  `,
  },
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M13 3h2v2h2v2H9v4h8v2H9v4h8v2h-2v2h-2v-2h-2v2H9v-2H5v-2h2v-4H5v-2h2V7H5V5h4V3h2v2h2V3zm4 14v-4h2v4h-2zm0-6V7h2v4h-2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Crypto",
    content: `
    <p>I&#39;m a big believer in crypto, and I&#39;ve been working in the industry for several years. I believe blockchain technology can help create a better financial system. Digital sovereignty, permissionless access, censorship resistance and trustless software will play a crucial role in the 21 century. I help startups scale their marketing and community growth. I&#39;ve wrote some articles <a href="https://dazai0x.substack.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>

    <p>I recommend the book "Read Write Own: Building the Next Era of the Internet" by Chris Dixon for a general overview of crypto with a focus on decentralizing the internet and social media.</p>

    <p>For a more technical perspective of its cryptographic foundations, I suggest <a href="https://www.goodreads.com/book/show/34137265-blockchain-basics" target="_blank" rel="noopener noreferrer">"Blockchain Basics: A Non-Technical Introduction in 25 Steps" by Daniel Drescher</a>.</p>
  `,
  },
  {
    icon: (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-16 h-16"
      >
        <path
          d="M3 5h4V3h2v2h4V3h2v2h4V3h2v2h4v14h-4v2h-2v-2h-4v2h-2v-2H9v2H7v-2H3V5zm4 12v-8H5v8h2zm6 0v-8h-4v8h4zm4 0h-2v-8h2v8zm2-8v8h2v-8h-2z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Houseplant Man",
    content: `
    <p>Yes, I&#39;m one of those people who loves houseplants. They add a lot of life to a space. It&#39;s relaxing and rewarding to see them grow⁠—like a small ecosystem you can create and nurture inside your home. My favorite plant has to be the Monstera Deliciosa, for its large leaves and ease of care.</p>
  `,
  },
];

export function HomePageComponent() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }
      const elapsed = time - startTimeRef.current;
      const rotation = (elapsed / 60000) * 360; // Full rotation in 60 seconds

      containerRef.current?.style.setProperty(
        "--rotation",
        `${rotation % 360}deg`
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const radius = Math.min(dimensions.width, dimensions.height) * 0.4;

  return (
    <div className="h-screen bg-[#191919] text-[#c4a579] flex items-center justify-center relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full max-w-4xl max-h-4xl p-4">
        <AnimatePresence mode="wait">
          {activeSection === null ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <h1 className="text-4xl font-bold relative z-10">
                Hi, I&apos;m Tiago
              </h1>
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotate(var(--rotation, 0deg))",
                  transition: "transform 0.1s linear",
                }}
              >
                {sections.map((section, index) => {
                  const angle =
                    (index / sections.length) * 2 * Math.PI - Math.PI / 2;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <button
                      key={section.title}
                      onClick={() => setActiveSection(index)}
                      className="absolute cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform:
                          "translate(-50%, -50%) rotate(calc(var(--rotation, 0deg) * -1))",
                      }}
                    >
                      {section.icon}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full flex flex-col items-center justify-center text-center overflow-y-auto"
            >
              <motion.h2
                className="text-4xl mb-6 font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {sections[activeSection].title}
              </motion.h2>
              <motion.div
                className="mb-8 text-lg max-w-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                dangerouslySetInnerHTML={{
                  __html: sections[activeSection].content,
                }}
              />
              <motion.button
                onClick={() => setActiveSection(null)}
                className="text-sm hover:underline mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx global>{`
        a {
          text-decoration: underline;
        }
        p {
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
}
