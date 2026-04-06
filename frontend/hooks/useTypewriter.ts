"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export interface TypewriterLine {
  speaker: "user" | "bot";
  text: string;
}

interface DisplayedLine {
  speaker: "user" | "bot";
  text: string;
  complete: boolean;
}

interface UseTypewriterOptions {
  charDelay?: number;
  lineDelay?: number;
  startDelay?: number;
}

export function useTypewriter(
  lines: TypewriterLine[],
  options: UseTypewriterOptions = {}
) {
  const { charDelay = 30, lineDelay = 600, startDelay = 800 } = options;
  const shouldReduceMotion = useReducedMotion();
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState<"user" | "bot">("user");
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    if (shouldReduceMotion) {
      setDisplayedLines(
        lines.map((l) => ({ speaker: l.speaker, text: l.text, complete: true }))
      );
      setIsTyping(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const typeLines = async () => {
      await new Promise<void>((r) => {
        timeoutId = setTimeout(r, startDelay);
      });

      for (let i = 0; i < lines.length; i++) {
        if (cancelledRef.current) return;

        const line = lines[i];
        setCurrentSpeaker(line.speaker);
        setIsTyping(true);

        // Add empty line
        setDisplayedLines((prev) => [
          ...prev,
          { speaker: line.speaker, text: "", complete: false },
        ]);

        // Type characters
        for (let j = 0; j < line.text.length; j++) {
          if (cancelledRef.current) return;
          await new Promise<void>((r) => {
            timeoutId = setTimeout(r, charDelay);
          });
          if (cancelledRef.current) return;

          const charIndex = j;
          setDisplayedLines((prev) => {
            const updated = [...prev];
            updated[i] = {
              ...updated[i],
              text: line.text.slice(0, charIndex + 1),
            };
            return updated;
          });
        }

        // Mark complete
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], complete: true };
          return updated;
        });

        setIsTyping(false);

        // Pause between lines
        if (i < lines.length - 1) {
          await new Promise<void>((r) => {
            timeoutId = setTimeout(r, lineDelay);
          });
        }
      }
    };

    typeLines();

    return () => {
      cancelledRef.current = true;
      clearTimeout(timeoutId);
    };
  }, [lines, charDelay, lineDelay, startDelay, shouldReduceMotion]);

  return { displayedLines, isTyping, currentSpeaker };
}
