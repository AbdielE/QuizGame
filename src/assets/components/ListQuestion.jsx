import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const ListQuestion = ({
  item,
  listQuestions,
  setListQuestions,
}) => {

  const { id, question, answer1, answer2, answer3, answerc } = item

  const editListQuestion = async () => {
    const { value } = await Swal.fire({
      title: "Question information",
      html: `
            <input 
              class="swal2-input" 
              type="text" 
              id="question" 
              name="question" 
              placeholder="Question"
              maxlength="200"
              value="${question}"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer1" 
              name="answer1" 
              placeholder="Answer1"
              maxlength="100"
              value="${answer1}"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer2" 
              name="answer2" 
              placeholder="Answer2"
              maxlength="100"
              value="${answer2}"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="answer3" 
              name="answer3" 
              placeholder="Answer3"
              maxlength="100"
              value="${answer3}"
            />
            <select name="answerc" id="answerc" class="swal2-select" >
              <option value="answer1">Answer 1</option>
              <option value="answer2">Answer 2</option>
              <option value="answer3">Answer 3</option>
            </select>
          `,
      confirmButtonText: "Save Question",
      showCancelButton: true,
      cancelButtonText: 'Dismiss',
      focusConfirm: false,
      preConfirm: () => {
        const question = Swal.getPopup().querySelector("#question").value;
        const answer1 = Swal.getPopup().querySelector("#answer1").value;
        const answer2 = Swal.getPopup().querySelector("#answer2").value;
        const answer3 = Swal.getPopup().querySelector("#answer3").value;
        const answerc = Swal.getPopup().querySelector("#answerc").value;
        if (!question || !answer1 || !answer2 || !answer3 || !answerc) {
          Swal.showValidationMessage("Please enter full information.");
        }
        return { question, answer1, answer2, answer3, answerc };
      }
    })

    if (!value.question || !value.answer1 || !value.answer2 || !value.answer3 || !value.answerc) return

    const newList = listQuestions.map((item) => {
      if (item.id === id) {
        item.question = value.question;
        item.answer1 = value.answer1;
        item.answer2 = value.answer2;
        item.answer3 = value.answer3;
        item.answerc = value.answerc;
      }
      return item;
    })

    localStorage.setItem("listQuestions", JSON.stringify(newList));
    setListQuestions(newList);
  }

  return (
    <div className='row'>
      <h4 class="text-primary text-start">Pregunta</h4>

      <div className="d-flex justify-content-between">
        <div
          className="col-8 col-md-6 text-start">
          {question}
        </div>

        <div className="col-8 col-md-3 btn-group btn-group-sm" role="group">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={editListQuestion}>
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-primary">
            <i class="bi bi-files"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-danger">
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
      <br />
      <h4 class="text-primary">Respuestas</h4>
      <div className="d-flex justify-content-around">
        <div>
          {
            answerc === "answer1" ?
              <h4 class="border-bottom border-4 border-success text-success">{`${answer1}`}</h4> :
              `${answer1}`
          }
        </div>
        <div>
          {
            answerc === "answer2" ?
              <h4 class="border-bottom border-4 border-success text-success">{`${answer2}`}</h4> :
              `${answer2}`
          }
        </div>
        <div>
          {
            answerc === "answer3" ?
              <h4 class="border-bottom border-4 border-success text-success">{`${answer3}`}</h4> :
              `${answer3}`
          }
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ListQuestion;