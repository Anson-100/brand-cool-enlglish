import AnchorLink from "react-anchor-link-smooth-scroll"

const LinkDesktop = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? " text-text-primary z-40 border-b-[2px] border-b-border-primary"
          : "text-text-supporting hover:border-b-border-primary border-b-[2px] border-b-transparent hover:text-text-secondary"
      }  py-3 px-4`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default LinkDesktop
