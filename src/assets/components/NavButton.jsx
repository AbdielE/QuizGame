const NavButton = ({ setPantalla, action, icon, text}) => {
  const handleCaptureButton = async () => {
    setPantalla(action)
  }
  return (
    <button
      type="button"
      class="btn btn-outline-primary btn-lg"
      title={text}
      onClick={handleCaptureButton}>
      <i class={`bi bi-${icon}`}></i>
    </button>
  )
}

export default NavButton