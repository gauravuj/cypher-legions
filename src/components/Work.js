import React from "react";
import Person1 from "../images/person1.jpg";
import Person2 from "../images/person2.jpg";
import Person3 from "../images/person3.jpg";
import Person4 from "../images/person4.jpg";
import Person5 from "../images/person5.jpg";
import Person6 from "../images/person6.jpg";
import Person7 from "../images/person7.jpg";
import Person8 from "../images/person8.jpg";
import Person9 from "../images/person9.jpg";
import Person10 from "../images/person10.jpg";
import Person11 from "../images/person11.jpg";
import Person12 from "../images/person12.jpg";
import Person13 from "../images/person13.jpg";
import Person14 from "../images/person14.jpg";
import Person15 from "../images/person15.jpg";
import Person16 from "../images/person16.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Person1,
      title: "INTJ",
      text: "Imaginative and strategic thinkers, with a plan for everything.",
    },
    {
      image: Person2,
      title: "INTP",
      text: "Innovative inventors with an unquenchable thirst for knowledge.",
    },
    {
      image: Person3,
      title: "ENTJ",
      text: "Bold, imaginative and strong-willed leaders, always finding a way or making one.",
    },
    {
      image: Person4,
      title: "ENTP",
      text: "Smart and curious thinkerswho cannot resist an intellectual challenge",
    },
    {
      image: Person5,
      title: "INFJ",
      text: "Quiet and mystical yet very inspiring and tireless idealists.",
    },
    {
      image: Person6,
      title: "INFP",
      text: "Poetic, kind and altruistic people, always eager to help a good cause.",
    },
    {
      image: Person7,
      title: "ENFJ",
      text: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    },
    {
      image: Person8,
      title: "ENFP",
      text: "Enthusiastic, creative and socible free spirits, who can always find a reason to smile",
    },
    {
      image: Person9,
      title: "ISTJ",
      text: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    },
    {
      image: Person10,
      title: "ISFJ",
      text: "Very dedicated and warm protectors, always ready to defend their loved ones",
    },
    {
      image: Person11,
      title: "ESTJ",
      text: "Excellent administrators, unsurpassed at managing things or people.",
    },
    {
      image: Person12,
      title: "ESFJ",
      text: "Extraordinarily caring, social and popular people, always eager to help.",
    },
    {
      image: Person13,
      title: "ISTP",
      text: "Bold and practical experimenters, masters of all kinds of tools.",
    },
    {
      image: Person14,
      title: "ISFP",
      text: "Flexible and charming artists, always ready to explore and experience something new.",
    },
    {
      image: Person15,
      title: "ESTP",
      text: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    },
    {
      image: Person16,
      title: "ESFP",
      text: "Spontaneous, energetic and enthusiastic people - life is never boring around them.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">16 Personality</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The Myers-Briggs Type Indicator (MBTI) is a widely used personality
          assessment tool that was developed by Isabel Briggs Myers and her
          mother, Katharine Cook Briggs. It is based on the psychological
          theories of Carl Jung and aims to classify individuals into one of 16
          distinct personality types.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
