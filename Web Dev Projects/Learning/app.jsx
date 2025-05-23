import {useContext, useState, useEffect} from 'react';

const MoodContext = React.createContext("Mood");
const CountContext = React.createContext("Count");

function MoodProvider({ children }) {
    const [mood, setMood] = useState("Happy");
    return (
      <MoodContext.Provider value={{ mood, setMood }}>
        {children}
      </MoodContext.Provider>
    );
  }

function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
      <CountContext.Provider value={{ count, setCount }}>
        {children}
      </CountContext.Provider>
    );
  } 

function MoodSelector() {
    const {mood, setMood} = useContext(MoodContext);
    const {count, setCount} = useContext(CountContext);
    useEffect(() => {
        console.log(`Mood changed to: ${mood}`);
        setCount(count => count + 1);
    }, [mood]);
    return (
        <div>
            <h1>Current Mood: {mood}</h1>
            <button onClick={() => setMood("Happy")}>Happy</button>
            <button onClick={() => setMood("Sad")}>Sad</button>
            <button onClick={() => setMood("Neutral")}>Neutral</button>
        </div>
    );
}

function MoodDisplay() {
    const { mood } = useContext(MoodContext);
    return <h1>Current Mood: {mood}</h1>;
}


function App() {
    return (
        <MoodProvider>
            <CountProvider>
                <MoodDisplay />
                <MoodSelector />
            </CountProvider>
        </MoodProvider>
    );
}

export default App;