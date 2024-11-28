import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SignUpDialog from "../shared/SignUpDialog"
import coolEnglishLogo from "../assets/cool english logo.png"
import coolEnglishHero from "../assets/Cool English_final version.webp"
import heroImage from "../assets/heroImage.png"
import JoinButton from "../buttons/JoinButton"

import { RocketLaunchIcon } from "@heroicons/react/24/outline"

const Landing = ({ setSelectedPage }) => {
  const [signingUp, setSigningUp] = useState(false)
  const checkout = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    }

    fetch(
      "https://qkhx7dsa0d.execute-api.us-east-1.amazonaws.com/prod/subscriptions",
      requestOptions
    )
      .then(response => response.text())
      .then(html => {
        window.open(html, "_blank")
      })
      .catch(error => console.log("error", error))
  }

  const isAboveMd = useMediaQuery("(min-width: 1060px)")
  return (
    <>
      {/* h-0 prevents taking up space */}
      {isAboveMd ? (
        <div className="relative bottom-0 right-0 w-full h-0">
          {" "}
          <div className="absolute top-0 -right-[10%] w-[40%] aspect-square rounded-full bg-bg-dark z-0" />
          <div className="absolute w-32 h-32 rounded-full bg-bg-dark opacity-70 top-[40rem] right-1/3" />
          <div className="absolute w-24 h-24 rounded-full bg-bg-dark opacity-50 top-8 right-1/4" />
          <div className="absolute w-40 h-40 rounded-full bg-bg-dark opacity-60 top-[32rem] right-1/3" />
          <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-80 top-16 right-40" />
          <div className="absolute w-28 h-28 rounded-full bg-bg-dark opacity-40 top-32 right-[45%]" />
        </div>
      ) : (
        <div className="relative bottom-0 right-0 w-full h-0">
          {" "}
          <div className="absolute top-0 -right-[10%] w-[40%] aspect-square rounded-full bg-bg-dark z-0" />
          <div className="absolute w-24 h-24 rounded-full bg-bg-dark opacity-50 top-8 right-1/4" />
          <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-80 top-16 right-10" />
          <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-40 top-52 right-[-2rem]" />
        </div>
      )}
      <section id="home" className="w-full h-screen relative overflow-hidden">
        <div className="flex flex-col w-5/6 mx-auto justify-center items-center h-screen py-16">
          {/* DESKTOP VIEW========================================================= */}
          {isAboveMd ? (
            <div className="flex pb-16 lg:gap-8 xl:gap-0 items-center w-full lg:w-5/6 justify-between">
              <motion.div
                className="flex flex-col flex-1 gap-8 landscape-mobile:pb-2 short-screen:pb-4 landscape-mobile:pt-8 font-quest "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {" "}
                <div>
                  <img
                    src={coolEnglishLogo}
                    className="lg:h-[10rem] h-[8rem] z-30"
                  />
                </div>
                <div className="text-lg text-text-secondary px-6 flex flex-col gap-4">
                  <h2 className="lg:text-xl text-lg font-bold">
                    Teaching English has never been more cool
                  </h2>
                  {/* <p>
                  Interactive English activities so you can teach better classes
                  today!
                </p> */}
                </div>
                <div className="flex gap-4 px-6 mt-8">
                  {/* Join Now - Primary button with solid background */}

                  <JoinButton />
                  {/* <button
                    onClick={() => setSigningUp(true)}
                    className="w-48 md: px-6 py-3 rounded-lg bg-bg-supporting text-text-primary border border-border-primary hover:bg-bg-dark"
                  >
                    Join Now
                  </button> */}
                  {/* Log In - Secondary button */}
                  <a
                    href="https://www.coolenglish.net/auth"
                    target="_blank"
                    className="w-48 px-6 py-3 rounded-lg bg-bg-secondary text-text-secondary border border-border-primary hover:bg-bg-dark text-center"
                  >
                    Log In
                  </a>
                </div>
              </motion.div>{" "}
              <motion.div
                className="z-10 flex-1 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {/* Main image */}
                <img
                  src={heroImage}
                  alt="hero image"
                  className="rounded-full w-full lg:w-full xl:w-5/6 grayscale ml-auto relative"
                />
              </motion.div>
            </div>
          ) : (
            // DESKTOP VIEW================================================================

            // MOBILE VIEW================================================================
            <div className="w-full flex flex-col items-center justify-center gap-16 short-screen:gap-8">
              <div>
                <img
                  src={coolEnglishLogo}
                  className="sm:h-[10rem] h-[8rem] z-30"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-8  text-center text-lg text-gray-100 font-quest">
                <motion.div
                  className="flex flex-col justify-center items-center gap-8 text-center text-base text-gray-100 font-quest"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h2 className="landscape-mobile:hidden ss:inline text-text-secondary text-lg">
                    Teaching English has never been more cool
                  </h2>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                className="flex flex-col ss:flex-row font-quest landscape-mobile:flex-row items-center gap-4 se:gap-3 py-4 text-center"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {/* <button
                  onClick={() => setSigningUp(true)}
                  className="w-48 px-6 py-3 rounded-lg bg-bg-supporting text-text-primary border border-border-primary hover:bg-bg-dark"
                >
                  Join Now
                </button> */}
                <a
                  href="https://www.coolenglish.net/auth"
                  className="inline-block w-48 px-6 py-3 rounded-lg bg-bg-supporting text-text-primary border border-border-primary hover:bg-bg-dark text-center"
                >
                  Join Now
                </a>
                {/* Log In - Secondary button */}
                <button className="w-48 px-6 py-3 rounded-lg bg-bg-secondary text-text-secondary border border-border-primary hover:bg-bg-dark">
                  Log In
                </button>
              </motion.div>
            </div>
          )}
          <SignUpDialog isOpen={signingUp} setIsOpen={setSigningUp} />
        </div>
      </section>
    </>
  )
}

export default Landing
