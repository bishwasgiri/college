import React from "react";
import { useState } from "react";
import ContentHeader from "../../UI/ContentHeader";

import Accordion from "../../UI/Home/Accordion";
import { motion } from "framer-motion";

const slide = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Faq = () => {
  const FAQ = [
    {
      id: "1",
      question: "What are the criteria of admission?",
      answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Magnam, iste eius? Molestias expedita ratione magnam et
        tempora quam vitae corporis, at quisquam cupiditate libero,
        ullam nobis aliquid error sunt`,
    },
    {
      id: "2",
      question: "What are the criteria of admission?",
      answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, iste eius? Molestias expedita ratione magnam et
          tempora quam vitae corporis, at quisquam cupiditate libero,
          ullam nobis aliquid error sunt`,
    },
    {
      id: "3",
      question: "What are the criteria of admission?",
      answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, iste eius? Molestias expedita ratione magnam et
          tempora quam vitae corporis, at quisquam cupiditate libero,
          ullam nobis aliquid error sunt`,
    },
    {
      id: "4",
      question: "What are the criteria of admission?",
      answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, iste eius? Molestias expedita ratione magnam et
          tempora quam vitae corporis, at quisquam cupiditate libero,
          ullam nobis aliquid error sunt`,
    },
  ];

  return (
    <>
      <ContentHeader heading={"Frequently Asked Questions"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slide}
        viewport={{ once: true }}
        className="w-3/5 mx-auto mt-20 mb-40"
      >
        {FAQ.map((items) => {
          return (
            <Accordion
              key={items.id}
              question={items.question}
              answer={items.answer}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default Faq;
