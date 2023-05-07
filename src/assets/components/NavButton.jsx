const NavButton = ({ setAction, color, margin, action, icon, title}) => {
  const handleCaptureButton = async () => {
    setAction(action)
  }
  
  return (
    <button
      type="button"
      class={`btn btn-outline-${color} btn-lg ${margin} me-1`}
      title={title}
      onClick={handleCaptureButton}>
      <i class={`bi bi-${icon}`}></i>
    </button>
  )
}

export default NavButton