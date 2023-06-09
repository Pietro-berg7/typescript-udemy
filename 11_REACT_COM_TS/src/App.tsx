import React, { createContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - Utilizando context
import Context from "./components/Context";

// 8 - Type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Pietro";
  const age: number = 22;
  const isWorking: boolean = false;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - Type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  // mySecondText = "oi";
  const testandoFixed: fixed = "Isso";

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
