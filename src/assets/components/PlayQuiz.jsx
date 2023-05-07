import NavButtonClearListResults from "./NavButtonClearListResults";
import AnswerButton from "./AnswerButton";
import { useState } from "react";
import ListResults from "./ListResults";
import DivAciertos from "./DivAciertos";

const PlayQuiz = ({
  listQuestions,
  setPantalla,
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [listResults, setListResults] = useState(
    JSON.parse(sessionStorage.getItem("listResults")) || []
  )

  return (
    <div className="container text-center">
      {
        currentIndex < listQuestions.length && (

          <div>
            <h4 className="text-primary text-start">Question {currentIndex + 1}</h4>
            <div className="d-flex justify-content-between">
              <div
                className="col-8 col-md-6 text-start">
                <h5>{listQuestions[currentIndex].question}</h5>
              </div>
            </div>
            <br />
            <h4 className="text-primary">Answers</h4>
            <div className="container text-center">
              <div className="d-grid gap-2 col-6 mx-auto">
                <AnswerButton
                  listResults={listResults}
                  setAction={setCurrentIndex}
                  setListResults={setListResults}
                  action={currentIndex + 1}
                  text={listQuestions[currentIndex].answer1}
                  color={"success"}
                  mt={"mt-0"}
                  answer={"answer1"}
                  question={listQuestions[currentIndex].question}
                  answerc={listQuestions[currentIndex].answerc}
                />
                <AnswerButton
                  listResults={listResults}
                  setAction={setCurrentIndex}
                  setListResults={setListResults}
                  action={currentIndex + 1}
                  text={listQuestions[currentIndex].answer2}
                  color={"success"}
                  mt={"mt-0"}
                  answer={"answer2"}
                  question={listQuestions[currentIndex].question}
                  answerc={listQuestions[currentIndex].answerc}
                />
                <AnswerButton
                  listResults={listResults}
                  setAction={setCurrentIndex}
                  setListResults={setListResults}
                  action={currentIndex + 1}
                  text={listQuestions[currentIndex].answer3}
                  color={"success"}
                  mt={"mt-0"}
                  answer={"answer3"}
                  question={listQuestions[currentIndex].question}
                  answerc={listQuestions[currentIndex].answerc}
                />
              </div>
              <br />
              <h6 className="text-danger text-center">{listQuestions.length - (currentIndex + 1)} remaining</h6>
            </div>
            <hr />
          </div>
        )
      }

      {
        currentIndex >= listQuestions.length && (
          <div>
            <h4>Results</h4>
            <div className="d-flex justify-content-between">
              <div
                className="col-6 col-md-6 text-center">
                <h4 className="text-primary text-center">Question</h4>
              </div>
              <div
                className="col-6 col-md-6 text-center">
                <h4 className="text-primary">Your Answer</h4>
              </div>
            </div>
            <br />
            {
              listResults.map((item) => (
                <ListResults
                  item={item}
                />
              ))
            }
            <br />
            <div>
              <DivAciertos
                listResults={listResults}
              />
            </div>
            <NavButtonClearListResults
              setAction={setPantalla}
              color={"primary"}
              margin={"mt-4 mb-4"}
              action={"menu"}
              icon={"house"}
              title={"Home"}
            />
          </div>
        )
      }
    </div>
  )
}

export default PlayQuiz;