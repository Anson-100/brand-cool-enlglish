// src/components/PageLinkDesktop.jsx
import { Link } from "react-router-dom"

const PageLinkDesktop = ({ page, setSelectedPage }) => {
  const lowerCasePage = page ? page.toLowerCase().replaceAll(" ", "") : ""
  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(page ? lowerCasePage : "Home")
        sessionStorage.setItem("selectedPage", lowerCasePage)
      }}
      className={`hover:cursor-pointer text-text-supporting hover:text-text-primary py-3 px-4 flex items-center hover:bg-bg-supporting rounded-md border-[1px] border-border-primary font-quest`}
    >
      {page ? page : "Home"}
    </Link>
  )
}

export default PageLinkDesktop
