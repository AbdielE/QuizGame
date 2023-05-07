import Swal from "sweetalert2";

const AnswerButton = ({
  setAction,
  color,
  mt,
  action,
  text,
  answer,
  listResults,
  setListResults,
  question,
  answerc
}) => {

  const handleButton = async () => {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to return later!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, continue'
    })

    if (isConfirmed) {
      const newList = [
        ...listResults,
        {
          question: question,
          answer: answer,
          textUserAnswer: text,
          answerc: answerc,
        }
      ]
      sessionStorage.setItem("listResults", JSON.stringify(newList));
      setListResults(newList);

      setAction(action)
    }
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

export default AnswerButton