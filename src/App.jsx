import { useState } from "react"
import ListQuestion from "./assets/components/ListQuestion";
import NavButton from "./assets/components/NavButton";
import ClearListButton from "./assets/components/ClearListButton";
import NewQuestionButton from "./assets/components/NewQuestionButton";
import PlayQuiz from "./assets/components/PlayQuiz";

function App() {
  const [pantalla, setPantalla] = useState("menu")

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col text-center mt-4">
          <h1>QUIZ GAME</h1>
        </div>
      </div>
      <hr />
      {
        pantalla === "menu" && (
          <div>
            <h3 className="text-primary">What would you like to do?</h3>
            <br />
            <div className="d-flex justify-content-evenly">
              <NavButton
                setAction={setPantalla}
                color={"secondary"}
                margin={"mt-4 mb-4"}
                action={"capturar"}
                icon={"file-earmark-text"}
                title={"Capture"}
              />
              <a>   </a>
              <NavButton
                setAction={setPantalla}
                color={"warning"}
                margin={"mt-4 mb-4"}
                action={"jugar"}
                icon={"controller"}
                title={"Play"}
              />
            </div>
          </div>
        )
      }

      {
        pantalla === "capturar" && (
          <div>
            <h3>Write your own questions with the answers you want.</h3>
            <div className="col text-end mt-2">
              <NewQuestionButton
                listQuestions={listQuestions}
                setListQuestions={setListQuestions}
              />
              <NavButton
                setAction={setPantalla}
                color={"primary"}
                margin={"mt-4 mb-4"}
                action={"menu"}
                icon={"house"}
                title={"Home"}
              />
              <ClearListButton setListQuestions={setListQuestions} />
            </div>
            <div>
              {
                listQuestions.length === 0 && (
                  <div>
                    <h3 className="text-danger">The list is empty...</h3>
                    Please add a new question to start.
                  </div>
                )
              }
              {
                listQuestions.map((item) => (
                  <ListQuestion
                    item={item}
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                  />
                ))
              }
            </div>
            <NavButton
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

      {
        pantalla === "jugar" && (
          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-3">
                <h3>Answer the questions correctly</h3>
              </div>
              <div>
                <NavButton
                  setAction={setPantalla}
                  color={"primary"}
                  margin={"mt-4 mb-4"}
                  action={"menu"}
                  icon={"house"}
                  title={"Home"}
                />
              </div>
            </div>
            <div>
              {
                listQuestions.length === 0 && (
                  <div>
                    <h3 className="text-danger">The list is empty...</h3>
                    Try again later.
                  </div>
                )
              }
              {
                <PlayQuiz
                  listQuestions={listQuestions}
                  setPantalla={setPantalla}
                />
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
