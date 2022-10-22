import "./Navigation.css"
const Navigation = (props) => {
    const updateContent = (key) => {
        props.setContent(key)
    }
    const rendertabs = () => {
        const tabsArray = [
            {key: "about", text: "About me"},
            {key: "projects", text: "Projects"},
            {key: "contact", text: "Contacts"},
            {key: "resume", text: "Resume"}
        ]
        return tabsArray.map((tab) => {
            return <li className={props.currentSection === tab.key ? "tabSelected" : "tab"} onClick = {() => updateContent(tab.key)}>{tab.text}</li>
        })
    }
    return (
        <nav className="nav">
        <div>JM</div>
        <ul>
            {rendertabs()}
        </ul>
    </nav>
    )
}
export default Navigation