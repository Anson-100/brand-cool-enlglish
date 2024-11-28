import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import extIcon from "../assets/extensionIcon.svg"
import { useState } from "react"
import SignUpDialog from "../shared/SignUpDialog"

import differentDynamic from "../assets/differentDynamic.PNG"
import differentEngaging from "../assets/differentEngaging.PNG"
import differentInteractive from "../assets/differentInteractive.PNG"
import differentModern from "../assets/differentModern.PNG"

const Instructions = () => {
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
        id="instructions"
        className="flex flex-col items-center py-16 w-5/6 mx-auto"
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
            <h1 className="text-xl md:text-3xl text-text-primary font-semibold ">
              How Cool English is Different
            </h1>
            <h2 className="mdtext-lg">
              Everything you need to make English class the highlight of your
              day
            </h2>
          </div>
        </motion.div>

        {/* DESKTOP VIEW (TILES)================================================================================================ */}
        {isAboveMd ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="xl:w-5/6 h-full flex flex-col items-center justify-center gap-6 landscape-mobile:gap-3 font-quest text-gray-100 pb-8"
          >
            <div className="flex items-center justify-between gap-8 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-3xl font-bold mb-3">
                  Interactive Music & Games
                </h2>
                <p className="text-text-supporting text-base">
                  With activities for all levels and ages, you can easily find
                  something cool for your classes
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentInteractive}
                  alt="Interactive music and games interface showing Moana character and Jeopardy-style game board"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary"></div>

            <div className="flex items-center justify-between gap-8 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-3xl font-bold mb-3">
                  Engaging Grammar & Vocab
                </h2>
                <p className="text-text-supporting text-base">
                  High-quality material designed by teachers and
                  classroom-tested makes lesson planning much easier
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentEngaging}
                  alt="Interactive music and games interface showing Moana character and Jeopardy-style game board"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary"></div>

            <div className="flex items-center justify-between gap-8 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-3xl font-bold mb-3">
                  Dynamic Reading & Listening
                </h2>
                <p className="text-text-supporting text-base">
                  Attract new students with a variety of high-quality reading
                  and listening activities for all levels of classes
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentDynamic}
                  alt="Dynamic interface showing various educational activities and content"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary"></div>

            <div className="flex items-center justify-between gap-8 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-3xl font-bold mb-3">
                  Modern Videos & Clips
                </h2>
                <p className="text-text-supporting text-base">
                  Hundreds of short videos from basic to advanced, all designed
                  for English learners
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentModern}
                  alt="Modern interface showcasing contemporary learning tools and features"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          // MOBILE VIEW (NO TILES)========================================================================

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="z-10 font-quest flex flex-col gap-4 landscape-mobile:gap-4 text-base md:text-lg se-mobile:text-sm bg-bg-secondary border-[1px] border-border-primary rounded-lg p-4"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center justify-between gap-8 py-6 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-2xl font-bold mb-3">
                  Interactive Music & Games
                </h2>
                <p className="text-text-supporting text-base">
                  With activities for all levels and ages, you can easily find
                  something cool for your classes
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentInteractive}
                  alt="Interactive music and games interface showing Moana character and Jeopardy-style game board"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary mx-auto"></div>

            <div className="flex flex-col items-center justify-between gap-8 py-6 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-2xl font-bold mb-3">
                  Engaging Grammar & Vocab
                </h2>
                <p className="text-text-supporting text-base">
                  High-quality material designed by teachers and
                  classroom-tested makes lesson planning much easier
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentEngaging}
                  alt="Interactive music and games interface showing Moana character and Jeopardy-style game board"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary mx-auto"></div>

            <div className="flex flex-col items-center justify-between gap-8 py-6 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-2xl font-bold mb-3">
                  Dynamic Reading & Listening
                </h2>
                <p className="text-text-supporting text-base">
                  Attract new students with a variety of high-quality reading
                  and listening activities for all levels of classes
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentDynamic}
                  alt="Dynamic interface showing various educational activities and content"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
            <div className="w-5/6 h-[1px] bg-border-secondary mx-auto"></div>

            <div className="flex flex-col items-center justify-between gap-8 py-6 text-quest w-full">
              <div className="flex-1">
                <h2 className="text-text-secondary text-2xl font-bold mb-3">
                  Modern Videos & Clips
                </h2>
                <p className="text-text-supporting text-base">
                  Hundreds of short videos from basic to advanced, all designed
                  for English learners
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  src={differentModern}
                  alt="Modern interface showcasing contemporary learning tools and features"
                  className="rounded-md grayscale max-w-full max-h-[220px] object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
        <SignUpDialog isOpen={signingUp} setIsOpen={setSigningUp} />
      </section>
    </>
  )
}

export default Instructions
