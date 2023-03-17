import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage// making all lower case and removing any spaces

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      trasition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`} // this is the id and on clicking on it it knows where to go  
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link