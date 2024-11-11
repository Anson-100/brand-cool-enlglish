import AnchorLink from "react-anchor-link-smooth-scroll"
import { useMemo } from "react"

const LinkMobile = ({
  page,
  selectedPage,
  setSelectedPage,
  Icon,
  toggleMenu,
}) => {
  const lowerCasePage = page.toLowerCase()

  // Use useMemo to avoid unnecessary recalculations of the icon component
  const PageIcon = useMemo(() => (Icon ? Icon : null), [Icon])

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-gray-100 landscape-mobile:border-b-gray-200 "
          : "text-gray-400 landscape-mobile:text-gray-300 landscape-mobile:border-b-transparent "
      } py-2 se-mobile:px-2 px-4 flex items-center gap-2 landscape-mobile:text-sm landscape-mobile:border-b`} // Add flex and gap for icon alignment
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
        if (toggleMenu) toggleMenu() // Toggle the menu when a link is clicked
      }}
    >
      {PageIcon && (
        <PageIcon className="h-6 w-6 se-mobile:h-5 se-mobile:w-5 mr-3 landscape-mobile:mr-1 se-mobile:mr-0" />
      )}{" "}
      {/* Render icon if provided */}
      {page}
    </AnchorLink>
  )
}

export default LinkMobile
