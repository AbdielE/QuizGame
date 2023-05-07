import Swal from "sweetalert2";

const DivAciertos = ({
    listResults,
}) => {

    const handleButton = async () => {
        const length = listResults.length;

        const aciertos = listResults.filter(acierto => acierto.answer === acierto.answerc);
        const countAciertos = aciertos.length; 

        if (countAciertos <= (length / 2)) {
            Swal.fire(
                'Nice Try, you can do better',
                countAciertos + " of " + length,
                'error'
            )
        } else {
            Swal.fire(
                'Congralutations',
                countAciertos + " of " + length,
                'success'
            )
        }

    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleButton}>
                Ver aciertos.
            </button>
        </div>
    )
}

export default DivAciertos