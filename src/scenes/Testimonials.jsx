import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import extIcon from "../assets/extensionIcon.svg"
import { useState } from "react"
import SignUpDialog from "../shared/SignUpDialog"
import {
  AcademicCapIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline"
import BubbleAnimation from "../components/BubbleAnimation"
import teacherBrazil from "../assets/teacher-brazil.png"
import teacherChina from "../assets/teacher-china.png"
import teacherItaly from "../assets/teacher-italy.png"

const Testimonials = () => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )
  const [signingUp, setSigningUp] = useState(false)
  return (
    <>
      <div className="relative bottom-0 right-0 w-full h-0">
        {" "}
        {/* h-0 prevents taking up space */}
        <div className="absolute top-0 -right-1/4 w-[40%] aspect-square rounded-full bg-bg-dark z-0" />
        <div className="absolute w-32 h-32 rounded-full bg-bg-dark opacity-70 top-1/2 -right-8" />
        <div className="absolute w-24 h-24 rounded-full bg-bg-dark opacity-50 top-16 right-48" />
        <div className="absolute w-40 h-40 rounded-full bg-bg-dark opacity-60 top-64 right-16" />
        <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-80 top-32 right-64" />
        <div className="absolute w-28 h-28 rounded-full bg-bg-dark opacity-40 top-1/2 right-40" />
      </div>
      <section
        id="testimonials"
        className="flex flex-col items-center md:h-[100svh] py-16 mx-auto"
      >
        <motion.div
          className="z-10"
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
          <div className="mx-auto font-montserrat text-center p-4 pb-8 ss:pb-4 sm:pb-8 py-8 xs:pt-6 md:py-16 flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl   text-text-primary font-semibold ">
              What are other teachers saying?
            </h1>
            <h2 className="mdtext-lg">
              Trusted by teachers and schools in 100+ countries around the world
            </h2>
          </div>
        </motion.div>

        {/* DESKTOP VIEW (TILES)================================================================================================ */}
        {isAboveMd ? (
          <div className="w-5/6 flex items-center justify-center font-quest text-gray-100 text-base md:text-lg z-20">
            {/* TEXT SECTION------------------- */}{" "}
            <motion.div
              className="flex flex-col md:flex-row gap-8 justify-between mx-auto w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    These activities have transformed my classroom! My students
                    and I always look forward to the new activities each week.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherBrazil}
                        alt="Teacher from Brazil"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Isabella
                    </h3>
                    <p className="text-text-supporting">Brazil</p>
                  </div>
                </div>
              </BubbleAnimation>

              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    Perfect for Asian students! The activities help overcome
                    participation barriers and makes learning English fun and
                    effective.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherChina}
                        alt="Teacher from China"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Liu
                    </h3>
                    <p className="text-text-supporting">China</p>
                  </div>
                </div>
              </BubbleAnimation>

              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    Whether teaching in classroom or online, Cool English adapts
                    perfectly. Students especially love the interactive homework
                    features.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherItaly}
                        alt="Teacher from Italy"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Juliette
                    </h3>
                    <p className="text-text-supporting">Italy</p>
                  </div>
                </div>
              </BubbleAnimation>
            </motion.div>
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
          // MOBILE VIEW (NO TILES)========================================================================
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
              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    These activities have transformed my classroom! My students
                    and I always look forward to the new activities each week.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherBrazil}
                        alt="Teacher from Brazil"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Isabella
                    </h3>
                    <p className="text-text-supporting">Brazil</p>
                  </div>
                </div>
              </BubbleAnimation>
              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    Perfect for Asian students! The activities help overcome
                    participation barriers and makes learning English fun and
                    effective.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherChina}
                        alt="Teacher from China"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Liu
                    </h3>
                    <p className="text-text-supporting">China</p>
                  </div>
                </div>
              </BubbleAnimation>
              <BubbleAnimation className="flex flex-1 p-4 bg-bg-secondary rounded-lg border border-border-primary relative">
                <div className="absolute text-text-secondary text-[10rem] font-serif top-16 opacity-20">
                  "
                </div>
                <div className="h-full flex flex-col justify-between gap-12">
                  <p className="text-text-secondary text-center italic font-quest relative z-10 pt-8 flex-1">
                    Whether teaching in classroom or online, Cool English adapts
                    perfectly. Students especially love the interactive homework
                    features.
                  </p>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={teacherItaly}
                        alt="Teacher from Italy"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Juliette
                    </h3>
                    <p className="text-text-supporting">Italy</p>
                  </div>
                </div>
              </BubbleAnimation>
            </motion.div>
          </div>
        )}
        <SignUpDialog isOpen={signingUp} setIsOpen={setSigningUp} />
      </section>
    </>
  )
}

export default Testimonials
