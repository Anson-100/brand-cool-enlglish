import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

// =======================================================================================
const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState({})

  const toggleOpen = id => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  // Example FAQ items
  const PolicyItems = [
    {
      id: "policy1",
      question: "Abstract",
      answer:
        "Welcome to Cool English! Your privacy matters to us. This Privacy Policy explains how we handle your data when you use our site. Please take a moment to review it to understand how we treat your information.",
    },
    {
      id: "policy2",
      question: "Data Collection",
      answer: () => (
        <span>
          Enjoy an enhanced English teaching experience with our website! Your
          browsing habits, preferences, and activities outside of our site
          remain completely private and untouched.
        </span>
      ),
    },
    {
      id: "policy3",
      question: "Token Storage",
      answer:
        "Our Site may save a single authentication token in your browser's local storage. This token ensures smooth access to specific features or services. It's securely stored on your device and isn't shared with any external servers or third parties.",
    },
    {
      id: "policy4",
      question: "Third Party Links",
      answer: () => (
        <span>
          Cool English doesn't link to third-party websites. We're not
          responsible for the content or practices of any third-party sites you
          may visit through external links.
        </span>
      ),
    },

    {
      id: "policy5",
      question: "Changes to this Privacy Policy",
      answer:
        "We might make changes to this Privacy Policy occasionally. Don't worry, any updates will be posted here, with the effective date adjusted accordingly. Feel free to check back here every now and then for any changes.",
    },
  ]

  const isAboveMd = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="policy"
      className="flex flex-col items-center min-h-[100svh] py-16 w-5/6 md:w-3/4 lg:w-2/3 mx-auto"
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
        <div className="mx-auto font-montserrat text-center p-4 pb-8 ss:pb-4 sm:pb-8 py-8 xs:pt-6 pt-12 md:pt-0 md:py-16 flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl text-text-primary font-semibold ">
            Privacy Policy
          </h1>
        </div>
      </motion.div>
      {/* CONTENT================================================================================================ */}
      {/* DESKTOP VIEW================================================================================================ */}
      {isAboveMd ? (
        <div className="w-full h-full flex flex-col gap-4 font-quest text-gray-200 text-base md:text-lg">
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

              {PolicyItems.map(item => (
                <div key={item.id} className="">
                  <button
                    onClick={() => toggleOpen(item.id)}
                    className="flex items-center justify-between w-full text-left px-2 py-4 "
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
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className=""
                      >
                        <p className="pb-4 pl-4 px-2">
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
        // MOBILE VIEW=====================================================================================
        <div className="w-full h-full flex flex-col gap-4 font-quest text-gray-200 text-base pt-4 landscape-mobile:text-sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            id="faq"
            className="flex flex-col w-full"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full h-[1px] bg-neutral-600"></div>

            {PolicyItems.map(item => (
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
                      <p className="pb-2 pt-2 px-2 text-text-secondary">
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
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default PrivacyPolicy
