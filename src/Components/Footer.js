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
            <span className="font-light text-3xl uppercase tracking-wider md:text-4xl">
              Get Connected As an Alumni
            </span>
            <span className="font-light text-xl lowercase tracking-wider">
              Stay Connected and Get Notified about events
            </span>

            <form
              action=""
              className="flex flex-col space-y-4 lg:space-x-4 lg:flex-row lg:space-y-0"
            >
              <input
                type="text"
                placeholder="example@gmail.com"
                className="outline-none p-4 text-primary bg-white rounded"
              />
              <button className="bg-primary p-4 rounded">
                Send Your Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="flex flex-col justify-around lg:items-center lg:flex-row  text-white  font-light tracking-wide bg-primary p-20">
        <div className=" flex-1 flex flex-col items-center space-y-8  lg:items-start lg:space-y-4">
          <div className="flex flex-col  uppercase">
            <span className="text-3xl tracking-wider text-center lg:text-start">
              Gaurishankar Multiple Campus
            </span>
            <span className="text-2xl text-center lg:text-start">
              Since 1980
            </span>
          </div>
          <div className="text-xl text-center lg:text-start">
            <p className="text-xl ">
              GMC transforms lives through acessible, student centered,high
              quality education
            </p>
          </div>
          <div className="text-xl ">91112324491</div>
          <div className="text-xl ">demo@gmail.com</div>
          <div className="text-xl">2023 All Rights Reserved</div>
        </div>

        <div className="hidden flex-1 lg:flex justify-between md:border-l-2 border-white p-10">
          <div className="">
            <h3 className="text-2xl mb-3">About</h3>
            <ul className="flex flex-col space-y-3">
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
            <ul className="flex flex-col space-y-3">
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
            <ul className="flex flex-col space-y-3">
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
    </>
  );
};

export default Footer;
