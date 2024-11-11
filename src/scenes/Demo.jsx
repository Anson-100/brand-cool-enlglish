import React from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import {
  AcademicCapIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline"
import BubbleAnimation from "../components/BubbleAnimation"

const Demo = () => {
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
        id="demo"
        className="flex flex-col items-center md:h-[100svh] py-16 relative overflow-hidden"
      >
        <motion.div
          className="z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* HEADER================================================================ */}
          <div className="mx-auto font-montserrat text-center p-4 pb-8 ss:pb-4 sm:pb-8 py-8 xs:pt-6 md:py-16 flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl text-text-primary font-semibold ">
              How Cool English helps
            </h1>
            <h2 className="mdtext-lg">
              Flexible tools to enhance every learning environment
            </h2>
          </div>
        </motion.div>

        {/*CONTENT: DESKTOP VIEW================================================================ */}
        {isAboveMd ? (
          <div className="w-5/6 flex items-center justify-center font-quest text-gray-100 text-base md:text-lg z-20">
            {/* TEXT SECTION------------------- */}

            <div className="flex">
              {" "}
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
                <div className="flex gap-8 justify-between max-w-6xl mx-auto">
                  {/* Classroom Tile */}
                  <BubbleAnimation className="flex-1 p-8  bg-bg-secondary rounded-lg border border-border-primary py-16">
                    <div className="flex flex-col gap-2">
                      <AcademicCapIcon className="h-12 w-12 text-text-secondary mx-auto" />
                      <h3 className="text-xl font-semibold text-text-primary text-center">
                        Classroom
                      </h3>
                      <p className="text-text-secondary text-center pt-6">
                        Project your screen during class to use the 900+
                        interactive activities
                      </p>
                    </div>
                  </BubbleAnimation>

                  {/* Online Tile */}
                  <BubbleAnimation className="flex-1 p-8 bg-bg-secondary rounded-lg border border-border-primary py-16">
                    <div className="flex flex-col gap-2">
                      <UserGroupIcon className="h-12 w-12 text-text-secondary mx-auto" />
                      <h3 className="text-xl font-semibold text-text-primary text-center">
                        Online
                      </h3>
                      <p className="text-text-secondary text-center pt-6">
                        Share your Zoom screen in online classes for modern
                        engaging activities
                      </p>
                    </div>
                  </BubbleAnimation>

                  {/* Homework Tile */}
                  <BubbleAnimation className="flex-1 p-8 bg-bg-secondary rounded-lg border border-border-primary py-16">
                    <div className="flex flex-col gap-2">
                      <ComputerDesktopIcon className="h-12 w-12 text-text-secondary mx-auto" />
                      <h3 className="text-xl font-semibold text-text-primary text-center">
                        Homework
                      </h3>
                      <p className="text-text-secondary text-center pt-6">
                        Share links with all your students for them to do
                        homework on any device
                      </p>
                    </div>
                  </BubbleAnimation>
                </div>
              </motion.div>
            </div>

            {/* VIDEO SECTION------------------- */}
            <div className="">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              ></motion.div>
            </div>
          </div>
        ) : (
          // CONTENT: MOBILE VIEW================================================================
          <div className="w-full h-full flex flex-col sm:gap-16 items-center gap-16 xs:gap-4 landscape-mobile:gap-4 font-quest text-gray-200 text-base md:text-lg pt-6 landscape-mobile:pt-0 se-mobile:text-sm">
            {" "}
            {/* VIDEO SECTION------------------- */}
            <motion.div
              className="flex flex-col gap-4 w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {" "}
              <BubbleAnimation className="flex-1 p-8  bg-bg-secondary rounded-lg border border-border-primary py-8">
                <div className="flex flex-col gap-2">
                  <AcademicCapIcon className="h-12 w-12 text-text-secondary mx-auto" />
                  <h3 className="text-xl font-semibold text-text-primary text-center">
                    Classroom
                  </h3>
                  <p className="text-text-secondary text-center pt-6">
                    Project your screen during class to use the 900+ interactive
                    activities
                  </p>
                </div>
              </BubbleAnimation>
              {/* Online Tile */}
              <BubbleAnimation className="flex-1 p-8 bg-bg-secondary rounded-lg border border-border-primary py-8">
                <div className="flex flex-col gap-2">
                  <UserGroupIcon className="h-12 w-12 text-text-secondary mx-auto" />
                  <h3 className="text-xl font-semibold text-text-primary text-center">
                    Online
                  </h3>
                  <p className="text-text-secondary text-center pt-6">
                    Share your Zoom screen in online classes for modern engaging
                    activities
                  </p>
                </div>
              </BubbleAnimation>
              {/* Homework Tile */}
              <BubbleAnimation className="flex-1 p-8 bg-bg-secondary rounded-lg border border-border-primary py-8">
                <div className="flex flex-col gap-2">
                  <ComputerDesktopIcon className="h-12 w-12 text-text-secondary mx-auto" />
                  <h3 className="text-xl font-semibold text-text-primary text-center">
                    Homework
                  </h3>
                  <p className="text-text-secondary text-center pt-6">
                    Share links with all your students for them to do homework
                    on any device
                  </p>
                </div>
              </BubbleAnimation>
            </motion.div>
          </div>
        )}
      </section>
    </>
  )
}

export default Demo
