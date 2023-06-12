import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Linker = ({page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-Emjay-5 ": ""}
            transition duration-500 hover:text-Emjay-12
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  );
};

export default Linker