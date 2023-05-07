const NavButtonClearListResults = ({ setAction, color, margin, action, icon, title}) => {
  const handleCaptureButton = async () => {
    setAction(action)

    sessionStorage.removeItem("listResults");
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

export default NavButtonClearListResults