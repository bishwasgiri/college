import React, { useState } from "react";
import { plusicon, minusicon } from "../../Assets/Svg/asset";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col item-center">
        <div
          className=" pt-5 pb-5 text-2xl font-light text-primary cursor-pointer  border-b-2 hover:text-black "
          onClick={handleAccordion}
        >
          <div className="flex items-center justify-between">
            <span>{question}</span>

            <span className="">{isOpen ? minusicon : plusicon}</span>
          </div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: {
                    opacity: 0,
                    height: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="bg-secondary"
              >
                <div className="font-light text-primary text-xl p-4">
                  {answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Accordion;
