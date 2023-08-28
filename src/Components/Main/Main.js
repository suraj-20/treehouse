import React from "react";
import "./Main.css";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.png";
import img8 from "../../Assets/img8.jpg";

const data = [
  {
    id: 1,
    imgSrc: img1,
    date: "August 17, 2023 in Learn",
    cardTitle: "Introducing Treehouse's Career Toolbox Track",
    description:
      "Introducing Treehouse’s Career Toolbox Track—our newest career-oriented resource—exclusively available to active Treehouse students! The Career Toolbox Track serves as your go...",
  },
  {
    id: 2,
    imgSrc: img2,
    date: "May 17, 2023 in AI",
    cardTitle: "Generating Database Seed Files with ChatGPT",
    description:
      "FRameworks like Laravel and Ruby on Rails eliminate countless decisions that you would otherwise be forced to make when building web applications. Even so, a great deal of time is...",
  },
  {
    id: 3,
    imgSrc: img3,
    date: "May 16, 2023 in Learn",
    cardTitle: "Announcing the Treehouse Community Discord",
    description:
      "We are thrilled to announce the Treehouse Community Discord! Whether you're on the hurt for a job in the tech industry, have programming/design questions, ....",
  },
  {
    id: 4,
    imgSrc: img4,
    date: "March 28, 2023 in Career Advice",
    cardTitle: "Three Tips for Effectively Budgeting Learning Time at Work",
    description:
      "Making time to learn at work can be dauntind. Hundreds of emails, tasks piling up, follow-up remainders, and slack messages all at your door don't really leace time for your brain to think about...",
  },
  {
    id: 5,
    imgSrc: img5,
    date: "March 28, 2023 in Learn",
    cardTitle: "Taking into Account Learning Styles In the Workplace",
    description:
      "Why it Matters A culture of learning in the workplace is all about makin sure you team not ony feels encouraged to work but in a matter that works for them. Learning styles in the ....",
  },
  {
    id: 6,
    imgSrc: img6,
    date: "February 27, 2023 in Business Resources",
    cardTitle: "Creating a Culture of Learning in the Workplace",
    description:
      "What's a culture of learning? A culture of learning is a healthy environment that places importance on and skills as a new information and skill as a means of self-improvement. It...",
  },
    // {
    //   id:7,
    //   imgSrc: img7,
    //   date: "January 18, 2023 in Learn",
    //   cardTitle: "How to Create a CSS Sprite Animation With steps()",
    //   description: "There's a little-known timing function in CSS animations that lets us break an animatioin into segments--or steps--instead of running it as one continuous animation from start to finish. This function is useful for creating sprite animation because we're able to...",
    // },
  //   {
  //     id:4,
  //     imgSrc: ,
  //     date: ,
  //     cardTitle: ,
  //     description: ,
  //   }
];

const Main = () => {
  return (
    <section className="mainSection container section">
      <div className="secContent grid">
        {data.map(({ id, imgSrc, date, cardTitle, description }) => {
          return (
            <div key={id} className="signleDestination">
              <a href="#">
                <div className="cardImg">
                  <img src={imgSrc} alt={cardTitle} />
                </div>

                <div className="cardInfo">
                  <div className="cardDate">
                    <span>{date}</span>
                  </div>
                  <div className="cardTitle">
                    <h3>{cardTitle}</h3>
                  </div>
                  <div className="cardDescription">
                    <p>{description}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
