import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValues, darkText, setDarkText }) => {
    return (
        <form className="colorbox" onSubmit={(e) => e.preventDefault()}>
            <label>Pick a color:</label>
            <input
                autoFocus
                id="colorbox"
                type="text"
                required
                placeholder="Add a color name"
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValues(colorNames(e.target.value))
                }}
            />
            <button type="button"
                onClick={() => setDarkText(!darkText)}>
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input