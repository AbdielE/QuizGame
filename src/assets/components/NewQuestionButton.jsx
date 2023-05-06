import Swal from "sweetalert2"
import {v4 as uuidv4} from "uuid"

const NewQuestionButton = ({listQuestions,setListQuestions}) => {
    const newQuestionModal = async () => {
        const {value} = await Swal.fire({
          title: "New Question",
          html: `
            <input 
              class="swal2-input" 
              type="text" 
              id="question" 
              name="question" 
              placeholder="Question"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer1" 
              name="answer1" 
              placeholder="Answer1"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer2" 
              name="answer2" 
              placeholder="Answer2"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer3" 
              name="answer3" 
              placeholder="Answer3"
            />
          `,
          confirmButtonText: "Add Question",
          showCancelButton: true,
          cancelButtonText: 'Dismiss',
          focusConfirm: false,
          preConfirm: () => {
            const question = Swal.getPopup().querySelector("#question").value;
            const answer1 = Swal.getPopup().querySelector("#answer1").value;
            const answer2 = Swal.getPopup().querySelector("#answer2").value;
            const answer3 = Swal.getPopup().querySelector("#answer3").value;
            if(!question || !answer1 || !answer2 || !answer3){
              Swal.showValidationMessage("Please enter full information.");
            }
            return {question, answer1, answer2, answer3};
          }
        })

        if(!value.question || !value.answer1 || !value.answer2 || !value.answer3) return
        
        const newList = [
          ...listQuestions,
          {
              id: uuidv4(),
              ...value,
              checked: false,
          }
      ]
      localStorage.setItem("listQuestions", JSON.stringify(newList));
      setListQuestions(newList);
    }
  return (
    <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={newQuestionModal}>
        <i class="bi bi-plus-circle"></i>
    </button>
  )
}

export default NewQuestionButton