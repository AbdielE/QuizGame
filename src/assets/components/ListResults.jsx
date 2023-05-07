const ListResults = ({
  item,
}) => {

  const { question, answer, textUserAnswer, answerc } = item;

  return (
    <div className='row'>
      {
        answerc === answer ? (
          <div className="d-flex justify-content-between">
            <div className="col-6 col-md-6 text-center">
              <h4>{`${question}`}</h4>
            </div>
            <div className="col-6 col-md-6 text-center">
              <u className="text-success"><h4 className="text-success">{`${textUserAnswer}`}</h4></u>
            </div>
          </div>
        ) :
          (
            <div className="d-flex justify-content-between">
              <div className="col-6 col-md-6 text-center">
                <h4>{`${question}`}</h4>
              </div>
              <div className="col-6 col-md-6 text-center">
                <del className="text-danger"><h4 className="text-danger">{`${textUserAnswer}`}</h4></del>
              </div>
            </div>
          )
      }
      <br />
      <br />
      <hr />
    </div>
  )
}

export default ListResults;