import Navigation from "./Navigation"
import "./Header.css"
const Header = (props) => {
    return (
        <header className="header">
            <Navigation setContent={props.setContent} currentSection={props.currentSection} ></Navigation>
        </header>
    )
}
export default Header
