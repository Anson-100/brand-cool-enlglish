import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const FAQ = ({ setSelectedPage }) => {
  const [isOpen, setIsOpen] = useState({})

  const toggleOpen = id => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }
  // DROPDOWN CONTENT==============================================================
  const faqItems = [
    {
      id: "faq1",
      question: "Is Cool English the best resource for English activities?",
      answer: <span className="text-3xl">💯</span>,
    },
    {
      id: "faq2",
      question:
        "Will my students love the incredible selection of activities here at Cool English?",
      answer: "Yes, and so will you!",
    },
    {
      id: "faq3",
      question: "How often are new activities released?",
      answer:
        "New activities are added weekly and they are always getting cooler!",
    },
    {
      id: "faq4",
      question: "How can I manage/cancel/restart my membership?",
      answer: () => (
        <span>
          Log in{" "}
          <a
            className="hover:underline text-blue-500"
            href={process.env.REACT_APP_STRIPE_CUSTOMER_PORTAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          or click the "Sign In" button at the top right of this page to manage
          your account.
        </span>
      ),
    },
    {
      id: "faq5",
      question:
        "If I encounter an issue with Cool English that is not covered here, what should I do?",
      answer: () => (
        <span>
          Feel free to use the{" "}
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            className="text-blue-500 hover:underline"
          >
            Contact Us
          </AnchorLink>{" "}
          portal below to tell us more about it. The more details, the better!
        </span>
      ),
    },
  ]

  const isAboveMd = useMediaQuery("(min-width: 1060px)")

  return (
    <>
      <div className="relative top-0 left-0 w-full h-0">
        {" "}
        {/* h-0 prevents taking up space */}
        <div className="absolute top-0 -left-1/4 w-[40%] aspect-square rounded-full bg-bg-dark z-0" />
        <div className="absolute w-32 h-32 rounded-full bg-bg-dark opacity-70 top-1/2 -left-8" />
        <div className="absolute w-24 h-24 rounded-full bg-bg-dark opacity-50 top-16 left-48" />
        <div className="absolute w-40 h-40 rounded-full bg-bg-dark opacity-60 top-64 left-16" />
        <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-80 top-32 left-64" />
        <div className="absolute w-28 h-28 rounded-full bg-bg-dark opacity-40 top-1/2 left-40" />
      </div>
      <section
        id="faq"
        className="flex flex-col items-center min-h-[100svh] py-16 w-full md:w-5/6 landscape-mobile:w-full mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* HEADER================================================================================================ */}
          <div className="mx-auto font-montserrat text-center p-4 pb-8 ss:pb-4 sm:pb-8 py-8 xs:pt-6 pt-12 md:py-16 flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl text-text-primary font-semibold ">
              FAQ
            </h1>
          </div>
        </motion.div>

        {/* CONTENT DESKTOP VIEW================================================================================================ */}
        {isAboveMd ? (
          <div className="w-full h-full flex flex-col gap-4 font-quest text-gray-200 text-base md:text-lg z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div id="faq" className="flex flex-col w-full h-full">
                <div className="w-full h-[1px] bg-neutral-600"></div>

                {faqItems.map(item => (
                  <div key={item.id} className="">
                    <button
                      onClick={() => toggleOpen(item.id)}
                      className="flex items-center justify-between w-full text-left text-text-supporting px-2 py-4 "
                    >
                      <span
                        className={`${
                          isOpen[item.id]
                            ? "text-text-supporting"
                            : "text-text-secondary"
                        } transition-all duration-200`}
                      >
                        {item.question}
                      </span>
                      {isOpen[item.id] ? (
                        <ChevronDoubleDownIcon className="w-5 h-5" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: { opacity: { duration: 0.1 } },
                          }} // Instant opacity change on exit
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className=""
                        >
                          <p className="pb-4 pl-4 px-2 text-text-secondary">
                            {" "}
                            {typeof item.answer === "function"
                              ? item.answer()
                              : item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="w-full h-[1px] bg-neutral-600"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          // CONTENT MOBILE VIEW=====================================================================================
          <div className="w-full h-full flex flex-col gap-4 font-quest text-gray-100 text-base se:text-base pt-4  landscape-mobile:text-sm z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div id="faq" className="flex flex-col w-full">
                <div className="w-full h-[1px] bg-neutral-600"></div>

                {faqItems.map(item => (
                  <div key={item.id} className="">
                    <button
                      onClick={() => toggleOpen(item.id)}
                      className="flex items-center justify-between w-full text-left px-2 py-2 gap-8"
                    >
                      <span
                        className={`${
                          isOpen[item.id]
                            ? "text-text-supporting"
                            : "text-text-secondary"
                        } transition-all duration-200 flex-1`}
                      >
                        {item.question}
                      </span>
                      {isOpen[item.id] ? (
                        <ChevronDoubleDownIcon className="w-5 h-5 text-text-secondary" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-text-supporting" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-2 pt-2 px-2  text-text-secondary">
                            {" "}
                            {typeof item.answer === "function"
                              ? item.answer()
                              : item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </>
  )
}

export default FAQ
