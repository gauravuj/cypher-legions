"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { motion, useScroll, useTransform } from "framer-motion";

function Fullpage() {
  const secRef = React.useRef<HTMLDivElement>(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <FullpageStyled ref={secRef}>
      <motion.div
        className="image"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <Image
          src="/images/bg6.jpg"
          alt="earth"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="text">
          <h1>Experience a New World</h1>
        </div>
      </motion.div>
    </FullpageStyled>
  );
}

const FullpageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 1000px;

    position: relative;
    border-radius: 1rem;
    border-radius: 8px;

    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;

    img {
      padding: 1.5rem;
    }

    &:hover {
      border: 1px solid #feb139;
    }
  }

  .text {
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    z-index: 5;
    h1 {
      display: inline-block;
      font-size: 1.5rem;
      color: #f2994a;
      background: var(--color-bg);
      padding: 0.2rem 1rem;
      border-radius: 30px;
      margin-bottom: 0.5rem;
      border: 1px solid var(--color-border);
    }
  }
`;

export default Fullpage;
