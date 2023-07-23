"use client";

import Typewriter from "typewriter-effect";

import clsx from "clsx";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "@/public/images/LogoWhite.png";
import Button from "./Button";
import styled from "styled-components";
import { FaRocket, FaSign } from "react-icons/fa";
import { Poppins } from "next/font/google";
import Hover3d from "@/app/(home)/utils/hover";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

function Header() {
  const hero = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const hoverHero = Hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = Hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <HeaderStyled ref={hero}>
      <nav className="bg-transparent backdrop-blur-sm">
        <div className="logo">
          <Image src={logo} alt="logo" width={300} height={300} />
        </div>

        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">16 Personality</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <div>
            <Button name="Sign In" onClick={() => router.push("/auth")} />
          </div>
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={poppins.className}>
            <p className="text-white">Build </p>
            <p className="text-[#F2921D]">
              <Typewriter
                options={{
                  strings: ["Meaningful Connections", "a Stronger Community"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </h1>
          <p>
            Connect brings together like-minded individuals, creating a vibrant
            community where you'll meet people who truly get you. Unleash the
            magic of your personality and dive into conversations, friendships,
            and maybe even love, with those who share your passions and quirks.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#F2921D"
              color="#fff"
              border="1px solid #f2994a"
              onClick={() => router.push("/auth")}
              icon={<FaRocket />}
            />
            <Button
              name="Learn More"
              onClick={() =>
                router.push(
                  "https://www.16personalities.com/free-personality-test"
                )
              }
            />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/images/brand.jpg"
              width="2500"
              height="2500"
              alt="hero"
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);

        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
