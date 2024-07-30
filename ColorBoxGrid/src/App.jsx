import './App.css'
import ColorBoxGrid from './ColorBoxGrid';

const colors = ["red", "purple", "black", "gray", "gold", "green", "blue", "fuchsia", "teal", "brown", "coral", "deeppink", "chocolate",
  "crimson","dodgerblue","forestgreen", "greenyellow", "hotpink", "lightseagreen", "orange", "violet", "indigo", "yellow", "orchid"
];

function App() {
  return (
    <ColorBoxGrid colors={colors} />
  );
}

export default App
