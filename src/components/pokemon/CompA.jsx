import { useEffect, useState } from "react";
import axios from "axios";

/* pikachu api : 
    https://pokeapi.co/api/v2/pokemon/
*/

const CompA = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMove(res.data.moves.length);  // moves array che etle direct eni value get no thay tene length thi count kari shakay che.
        }

        getData();
    });

    return (
        <>
            <h1>You choose <span style={{ color: 'red' }}> {num} </span> number</h1>
            <h1> My name is <span style={{ color: 'red' }}> {name} </span>  </h1>
            <h1> I have <span style={{ color: 'red' }}> {move} </span> moves. </h1>

            <select value={num}
                onChange={(event) => {
                    setNum(event.target.value)
                }}
            >
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}


export default CompA;