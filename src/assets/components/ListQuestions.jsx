const ListQuestions = ({
  id,
  question,
  answer1,
  answer2,
  answer3,
}) => {
  return (
    <div className='row'>
      <h4 class="text-primary text-start">Pregunta</h4>
      <div className="d-flex justify-content-between">
        <div
          className="col-8 col-md-6 text-start">
          {question}
        </div>
        <div className="col-8 col-md-3 btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-outline-primary">
            <i class="bi bi-files"></i>
          </button>
          <button type="button" class="btn btn-outline-danger">
            <i class="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
      <br />
      <h4 class="text-primary">Respuestas</h4>
      <div className="d-flex justify-content-around">
        <div>{answer1}</div>
        <div>{answer2}</div>
        <div>{answer3}</div>
      </div>
      <hr />
    </div>
  )
}

export default ListQuestions;