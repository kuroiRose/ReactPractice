import { useState } from "react";

export default function ScoreKeeper({numPlayers=3, target=5}){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const incrementScore = (idx) => {
        setScores((prevScores) => {
            const temp = [...prevScores];
            temp[idx]+=1;
            return temp;
        });
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}>Player {idx + 1}: {score}
                    <button onClick={() => incrementScore(idx)}>+1</button>
                    {score >= target && "Winner!"}</li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}