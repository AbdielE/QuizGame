const NavButton = ({ setAction, color, margin, action, icon, title}) => {
  const handleCaptureButton = () => {
    setAction(action)
  }
  
  return (
    <button
      type="button"
      className={`btn btn-outline-${color} btn-lg ${margin} me-1`}
      title={title}
      onClick={handleCaptureButton}>
      <i className={`bi bi-${icon}`}></i>
    </button>
  )
}

export default NavButton