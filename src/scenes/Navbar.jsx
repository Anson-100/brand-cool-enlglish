import { useState, useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom"
import LinkDesktop from "../components/LinkDesktop"
import LinkMobile from "../components/LinkMobile"
import LogoLink from "../components/LogoLink"
import PageLinkDesktop from "../components/PageLinkDesktop"
import PageLinkMobile from "../components/PageLinkMobile"
import useMediaQuery from "../hooks/useMediaQuery"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import coolEnglishLogo from "../assets/cool english logo.png"

import {
  HomeIcon,
  PhotoIcon,
  QueueListIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"

// ======================================================================================
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1260px)")
  const location = useLocation()
  const navbarBackground = isTopOfPage ? "" : ""

  const menuRef = useRef(null) // Add ref for the menu
  const buttonRef = useRef(null) // Add ref for the burger button

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuToggled &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuToggled(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuToggled])

  return (
    <nav
      className={`${navbarBackground} z-30 w-full fixed top-0 bg-opacity-65 backdrop-blur-xl border-t-4 border-neutral-700 border-opacity-85`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 py-2">
        <LogoLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* DESKTOP NAV ===================================================================*/}
        {isDesktop ? (
          window.location.pathname === "/" ? (
            <div className="flex justify-between items-center gap-4 text-md font-quest bg-bg-secondary bg-opacity-65 p-2 rounded-md">
              <LinkDesktop
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <LinkDesktop
                page="FAQ"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkDesktop
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <div className="w-[1px] h-8 bg-zinc-400"></div>
              {/* <Link
                to="/podcast" // Path to your Privacy Policy component
                onClick={() => {
                  setSelectedPage("podcast") // Set the selected page
                  sessionStorage.setItem("selectedPage", "podcast")
                }}
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex items-center gap-2 rounded-md text-text-supporting hover:text-text-primary z-40 hover:bg-bg-supporting`} // Add flex and gap for icon alignment
              >
                Podcast
              </Link>{" "} */}
              <a
                a
                href="https://www.coolenglish.net/podcast"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex items-center gap-2 rounded-md text-text-supporting hover:text-text-primary z-40 hover:bg-bg-supporting`} // Add flex and gap for icon alignment
              >
                Podcast
              </a>{" "}
              <a
                a
                href="https://www.coolenglish.net/blog"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex items-center gap-2 rounded-md text-text-supporting hover:text-text-primary z-40 hover:bg-bg-supporting`} // Add flex and gap for icon alignment
              >
                Blog
              </a>{" "}
              {/* <Link
                to="/blog" // Path to your Privacy Policy component
                onClick={() => {
                  setSelectedPage("blog") // Set the selected page
                  sessionStorage.setItem("selectedPage", "blog")
                }}
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex items-center gap-2 rounded-md text-text-supporting hover:text-text-primary z-40 hover:bg-bg-supporting`} // Add flex and gap for icon alignment
              >
                Blog
              </Link>{" "} */}
              <div className="hover:cursor-pointer text-text-secondary hover:text-text-primary py-3 px-4 flex items-center gap-2 bg-bg-primary hover:bg-bg-supporting rounded-md border-[1px] border-border-primary">
                <a
                  href={process.env.REACT_APP_STRIPE_CUSTOMER_PORTAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </div>
            </div>
          ) : (
            <PageLinkDesktop setSelectedPage={setSelectedPage} />
          )
        ) : // BURGER MENU=============================================================
        window.location.pathname === "/" ? (
          <button
            ref={buttonRef}
            className={`${isTopOfPage ? "" : ""} rounded-full p-4 z-50`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {!isMenuToggled ? (
              <Bars3Icon
                className={`${
                  isTopOfPage ? "text-text-secondary" : "text-text-secondary"
                } w-6`}
              />
            ) : (
              <XMarkIcon
                className={`${
                  isTopOfPage ? "text-text-secondary" : "text-text-secondary"
                } w-6`}
              />
            )}
          </button>
        ) : (
          <PageLinkMobile setSelectedPage={setSelectedPage} />
        )}

        {/* MOBILE MENU POPUP ================================================================================*/}
        {!isDesktop && isMenuToggled && (
          <div
            ref={menuRef}
            className="fixed w-[300px] landscape-mobile:w-auto landscape-mobile:pr-6 landscape-mobile:pl-1 se-mobile:pl-3 se-mobile:pr-5 rounded-md right-4 landscape-mobile:right-4 se-mobile:right-2 top-12 z-40 bg-neutral-700"
          >
            <div className="flex flex-col landscape-mobile:items-center gap-4 se-mobile:gap-2 text-lg font-quest w-full m-auto py-4 landscape-mobile:py-3 landscape-mobile:flex-row">
              <LinkMobile
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={HomeIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="FAQ"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={QuestionMarkCircleIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={PaperAirplaneIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>

              <Link
                to="/privacy-policy"
                onClick={() => {
                  setSelectedPage("privacy-policy")
                  sessionStorage.setItem("selectedPage", "privacy-policy")
                  setIsMenuToggled(false) // Assuming this is the state controlling the menu visibility
                }}
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-400 landscape-mobile:text-gray-300 z-40 "
                    : "text-gray-400 landscape-mobile:text-gray-300"
                } py-2 ml-4 se-mobile:ml-1 flex landscape-mobile:text-sm items-center`}
              >
                <DocumentTextIcon className="h-6 w-6 mr-5 se-mobile:h-5 se-mobile:w-5 landscape-mobile:mr-3 se-mobile:mr-2 text-gray-400 landscape-mobile:text-gray-300" />{" "}
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* black bar at bottom of navbar */}
      <div className="h-[1px] bg-neutral-400 w-[86%] mx-auto"></div>{" "}
      {/* PROMOTIONAL MESSAGE======================================================================== */}
      {/* <div
        className={`w-full se:text-sm landscape-mobile:text-sm border-y-orange-800 border-y-[1px] bg-zinc-950 text-center text-gray-100 flex items-center justify-center ${
          isTopOfPage && location.pathname !== "/privacy-policy" ? "" : "hidden"
        }`}
      >
        <p className="my-auto font-montserrat">
          First 100 customers receive FREE lifetime membership!{" "}
          <span>
            Use code <span className="text-yellow-400">LAUNCH</span> at checkout{" "}
          </span>
        </p>
      </div> */}
    </nav>
  )
}

export default Navbar
