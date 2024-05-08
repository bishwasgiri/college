import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../Assets/hero-image.jpg";

const slide = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      delay: 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${cover})`,
          backgroundSize: "cover",
          height: "40vh",
        }}
      >
        <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slide}
            viewport={{ once: true }}
            className="text-white text-center p-4 flex flex-col items-center space-y-4"
          >
            <span className="font-light text-4xl uppercase tracking-wider">
              Get Connected As an Alumni
            </span>
            <span className="font-light text-xl lowercase tracking-wider">
              Stay Connected and Get Notified about events
            </span>
            <form className="flex justify-center space-x-4 ">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="outline-none p-2 rounded  bg-gray-200 text-gray-800"
              />
              <button className="text-white bg-primary p-4 rounded">
                Send Your Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="bg-primary p-20">
        <footer className="flex justify-around md:items-center text-white opacity-60">
          <div className=" flex-1 flex flex-col items-center md:items-start">
            <div className="flex flex-col mb-3">
              <span className="text-3xl">Gaurishankar Multiple Campus</span>
              <span className="text-2xl">Since 1980</span>
            </div>
            <div className="text-xl">
              <p className="text-xl mb-3">
                GMC transforms lives through acessible, student centered,high
                quality education
              </p>
            </div>
            <div className="text-xl ">91112324491</div>
            <div className="text-xl ">demo@gmail.com</div>
            <div className="text-xl">2023 All Rights Reserved</div>
          </div>

          <div className="hidden flex-1 md:flex justify-between md:border-l-2 border-white p-10">
            <div className="">
              <h3 className="text-2xl mb-3">About</h3>
              <ul className="">
                <li>
                  <Link href="" className="text-xl">
                    Notice
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <h3 className="text-2xl mb-3">Links</h3>
              <ul>
                <li>
                  <Link href="" className="text-xl">
                    Student
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Staff
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Faculties
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <h3 className="text-2xl mb-3">Connect With Us</h3>
              <ul>
                <li>
                  <Link href="" className="text-xl">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-xl">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
