const NavButton = ({ setPantalla, color, action, icon, text}) => {
  const handleCaptureButton = async () => {
    setPantalla(action)
  }
  return (
    <button
      type="button"
      class={`btn btn-outline-${color} btn-lg mt-4 mb-4 me-1`}
      title={text}
      onClick={handleCaptureButton}>
      <i class={`bi bi-${icon}`}></i>
    </button>
  )
}

export default NavButton