export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const result = num1 === num2 ? "You Win!" : "You Lose :(";
    const styles = { color: num1 === num2 ? "green" : "red" };
    return (
        <div style={styles}>
            <h2>{result}</h2>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}