import Swal from "sweetalert2";
import NavButton from "./NavButton";
import AnswerButton from "./AnswerButton";
import { useState } from "react";

const ListQuestion = ({ listQuestions, setPantalla }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div class="container text-center">
      {currentIndex < listQuestions.length && (
        <div>
          <h4 class="text-primary text-start">Question {currentIndex + 1}</h4>
          <div className="d-flex justi  fy-content-between">
            <div
              className="col-8 col-md-6 text-start">
              <h5>{listQuestions[currentIndex].question}</h5>
            </div>
          </div>
          <br />
          <h4 class="text-primary">Answers</h4>
          <div class="container text-center">
            <div class="d-grid gap-2 col-6 mx-auto">
              <AnswerButton
                setAction={setCurrentIndex}
                color={"success"}
                mt={"mt-0"}
                action={currentIndex + 1}
                text={listQuestions[currentIndex].answer1}
              />
              <AnswerButton
                setAction={setCurrentIndex}
                color={"success"}
                mt={"mt-0"}
                action={currentIndex + 1}
                text={listQuestions[currentIndex].answer2}
              />
              <AnswerButton
                setAction={setCurrentIndex}
                color={"success"}
                mt={"mt-0"}
                action={currentIndex + 1}
                text={listQuestions[currentIndex].answer3}
              />
            </div>
            <h6 class="text-danger text-start">{listQuestions.length - (currentIndex + 1)} remaining</h6>
          </div>
          <hr />
        </div>
      )}
      {
        currentIndex >= listQuestions.length && (
          <div>
            <h4>Results</h4>
            <NavButton
              setAction={setPantalla}
              color={"primary"}
              margin={"mt-2 mb-2"}
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

export default ListQuestion;