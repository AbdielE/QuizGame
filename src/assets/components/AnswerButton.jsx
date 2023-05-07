const NavButton = ({ setAction, color, mt, action, text}) => {


  const handleButton = async () => {
    setAction(action)
  }



  return (
    <button
      type="button"
      class={`btn btn-outline-${color} btn-lg ${mt} me-1`}
      onClick={handleButton}>
      <i>{text}</i>
    </button>
  )
}

export default NavButton