import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import extIcon from "../assets/extensionIcon.svg"
import { useState } from "react"
import SignUpDialog from "../shared/SignUpDialog"
import {
  StarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SpeakerWaveIcon,
  PhotoIcon,
  BookOpenIcon,
  PhoneIcon,
  VideoCameraIcon,
  UserPlusIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid"

import differentDynamic from "../assets/differentDynamic.PNG"
import differentEngaging from "../assets/differentEngaging.PNG"
import differentInteractive from "../assets/differentInteractive.PNG"
import differentModern from "../assets/differentModern.PNG"

const Activities = () => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )
  const [signingUp, setSigningUp] = useState(false)

  const desktopTileStyling =
    "relative bg-bg-supporting border-border-primary border rounded-lg flex-1 flex items-center justify-center text-text-secondary font-bold text-3xl hover:bg-bg-dark hover:text-text-primary"

  const mobileTileStyling =
    "relative bg-bg-supporting border-border-primary border rounded-lg flex-1 flex items-center justify-center text-text-secondary font-bold text-2xl hover:bg-bg-dark hover:text-text-primary h-32"
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
        id="Activities"
        className="flex flex-col items-center md:h-[100svh] py-16 w-5/6 mx-auto "
      >
        <motion.div
          className="z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {/* HEADER================================================================================================ */}
          <div className="mx-auto font-montserrat text-center p-4 pb-8 ss:pb-4 sm:pb-8 py-8 xs:pt-6 md:py-16 flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl text-text-primary font-semibold">
              70+ Free Activities
            </h1>
            <h1 className="text-xl md:text-3xl text-text-primary font-semibold ">
              1000+ For Members, New Ones Every Week!
            </h1>
            <h2 className="mdtext-lg">
              Choose a catergory below to get started
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
            className="font-quest flex flex-col w-5/6 h-full gap-4 z-10"
          >
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/fun"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Fun</p>
                <StarIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/grammar"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Grammar</p>
                <ChatBubbleOvalLeftEllipsisIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/listening"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Listening</p>
                <SpeakerWaveIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/pictures"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Pictures</p>
                <PhotoIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/reading"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Reading</p>
                <BookOpenIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/speaking"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Speaking</p>
                <PhoneIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/videos"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Videos</p>
                <VideoCameraIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/vocabulary"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Vocabulary</p>
                <UserPlusIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/writing"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopTileStyling}
              >
                <p className="z-10">Writing</p>
                <Bars3BottomLeftIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
          </motion.div>
        ) : (
          // MOBILE VIEW (NO TILES)========================================================================
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="font-quest flex flex-col h-full w-full gap-4 z-10"
          >
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/grammar"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Grammar</p>
                <ChatBubbleOvalLeftEllipsisIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/listening"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Listening</p>
                <SpeakerWaveIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/pictures"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Pictures</p>
                <PhotoIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/reading"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Reading</p>
                <BookOpenIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/speaking"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Speaking</p>
                <PhoneIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/videos"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Videos</p>
                <VideoCameraIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
            <div className="flex gap-4 w-full flex-1">
              <a
                href="https://www.coolenglish.net/edu/categories/vocabulary"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Vocabulary</p>
                <UserPlusIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
              <a
                href="https://www.coolenglish.net/edu/categories/writing"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileTileStyling}
              >
                <p className="z-10">Writing</p>
                <Bars3BottomLeftIcon className="absolute h-full w-auto left-1/2 transform -translate-x-1/2 text-bg-primary z-0" />
              </a>
            </div>
          </motion.div>
        )}
        <SignUpDialog isOpen={signingUp} setIsOpen={setSigningUp} />
      </section>
    </>
  )
}

export default Activities
