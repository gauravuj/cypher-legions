"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#7DCE13",
      "#7DCE13",
      "#EAE509",
      "#F6F1E9",
    ]
  );

  return (
    <div ref={text}>
      <motion.p
        style={{ opacity, x, color: colorChange }}
        className="font-semibold"
      >
        {children}
      </motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>
        Say goodbye to miscommunications and hello to meaningful connections.
      </TextWrapper>
      <TextWrapper>
        We celebrate individuality, making it a place where you can shine as
        your true self.
      </TextWrapper>
      <TextWrapper>Get inspired like never before!</TextWrapper>
      <TextWrapper>
        Engage in vibrant conversations, exchange ideas, and fuel your
        creativity
      </TextWrapper>
      <TextWrapper>
        Beyond friendships, you might discover something more magical{" "}
      </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10rem;
  }
`;

export default TextSection;
