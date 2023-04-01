function Colorizer({languageElement}) {

  const { word, classification, error} = languageElement;

  return (
    <pre className={"hlg_"+classification}>{error ? "Error!" : word}</pre>
  )
}
export default Colorizer