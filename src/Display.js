
const Display = ({ colorValue, hexValues, darkText }) => {
    return (

        <section className="display"
            style={{
                backgroundColor: colorValue,
                color: darkText ? "#000" : "#fff"
            }}>
            <p> {colorValue ? colorValue : "Enter A Color"}</p>
            <p>{hexValues ? hexValues : null}</p>
        </section>
    )
}

Display.defaultProps = {
    colorValue: "Empty Value"
}

export default Display