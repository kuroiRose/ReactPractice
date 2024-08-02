import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji(){
    const choices = ["🤣", "🤐", "😴", "🤔", "😱", "🥵", "🥶", "😰", "🤢", "🤡", "😡", "💀", "😉", "🥰", "😘",
    "🥪", "🍇", "🍦", "🍘", "🍛", "🍱", "🌙", "⭐", "⛄", "🍀", "🌺", "🌹", "🍁", "🍒", "🍊", "🍎", "🥦", "🥕"];
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randomEmoji()}]);
    }
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id);
        });
    }
    const makeHearts = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map((e) => {
                return {...e, emoji: "💖"};
            });
        });
    }
    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "2rem"}}>{e.emoji}</span>
            ))}
            <div>
                <button onClick={addEmoji}>Add Emoji</button>
                <button onClick={makeHearts}>Make them all Hearts</button>
            </div>
        </div>
    )
}