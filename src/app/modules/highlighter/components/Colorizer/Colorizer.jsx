function Colorizer({languageElement}) {

  const { word,clasification, error} = languageElement;

  return (
    <pre className={"hlg_"+clasification}>{error ? "Error!" : word}</pre>
  )
}
export default Colorizer