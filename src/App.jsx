import { useState } from "react"
import ListQuestion from "./assets/components/ListQuestion";
import NavButton from "./assets/components/NavButton";
import ClearListButton from "./assets/components/ClearListButton";
import NewQuestionButton from "./assets/components/NewQuestionButton";

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
                setPantalla={setPantalla}
                color={"secondary"}
                action={"capturar"}
                icon={"file-earmark-text"}
                text={"Capture"}
              />
              <a>   </a>
              <NavButton
                setPantalla={setPantalla}
                color={"warning"}
                action={"jugar"}
                icon={"controller"}
                text={"Play"}
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
                setPantalla={setPantalla}
                color={"primary"}
                action={"menu"}
                icon={"house"}
                text={"Home"}
              />
              <ClearListButton setListQuestions={setListQuestions} />
            </div>
            <div>
              {
                listQuestions.length === 0 && (
                  <div>
                    <h3>The list is empty...</h3>
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
              setPantalla={setPantalla}
              color={"primary"}
              action={"menu"}
              icon={"house"}
              text={"Home"}
            />
          </div>
        )
      }

      {
        pantalla === "jugar" && (
          <div>
            <h3>Answer the questions correctly</h3>
            <NavButton
              setPantalla={setPantalla}
              color={"primary"}
              action={"menu"}
              icon={"house"}
              text={"Home"}
            />
          </div>
        )
      }
    </div>
  )
}

export default App
