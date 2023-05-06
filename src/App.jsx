import { useState } from "react"
import ListQuestions from "./assets/components/ListQuestions";
import NavButton from "./assets/components/NavButton";
import ClearListButton from "./assets/components/ClearListButton";
import NewQuestionButton from "./assets/components/NewQuestionButton";

function App() {
  const [pantalla, setPantalla] = useState("menu");

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
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
            <h3>¿Qué desea hacer?</h3>
            <br />
            <div className="d-flex justify-content-evenly">
              <NavButton
                setPantalla={setPantalla}
                action={"capturar"}
                icon={"file-earmark-text"}
                text={"Capturar"}
              />
              <a>   </a>
              <NavButton
                setPantalla={setPantalla}
                action={"jugar"}
                icon={"controller"}
                text={"Jugar"}
              />
            </div>
          </div>
        )
      }

      {
        pantalla === "capturar" && (
          <div>
            <h3>Escriba sus propias preguntas con las respuestas que guste.</h3>
            <div className="col text-end mt-2">
              <ClearListButton setListQuestions={setListQuestions} />
              <NewQuestionButton listQuestions={listQuestions} setListQuestions={setListQuestions} />
            </div>
            <div>
              {listQuestions.map((item) => (
                <ListQuestions
                  id={item.id}
                  question={item.question}
                  answer1={item.answer1}
                  answer2={item.answer2}
                  answer3={item.answer3}
                />
              ))}
            </div>
            <NavButton
              setPantalla={setPantalla}
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
            <h3>Jugar</h3>
            <NavButton
              setPantalla={setPantalla}
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
