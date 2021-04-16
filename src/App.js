import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List'
import BudgetControl from './components/BudgetControl'


function App() {

  //definir state
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showquestion, setQuestion] = useState(true);
  const [spendings, setSpending] = useState([]);
  const [spending, setSpendin] = useState({});
  const [makespending, setMakeSpending] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if (makespending) {
      //agrega el nuevo presupuesto
      setSpending([
        ...spendings,
        spending
      ]);

      //resta del presupuesto actual
      const spendingRest = rest - spending.cant;
      setRest(spendingRest);
      //una vez ejecutado resetear a false
      setMakeSpending(false);
    }
  }, [spending, spendings, rest, makespending])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="main-conten conten">
          {showquestion
            ?
            (<Question
              setBudget={setBudget}
              setRest={setRest}
              setQuestion={setQuestion}
            />)

            : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    setSpendin={setSpendin}
                    setMakeSpending={setMakeSpending}
                  />
                </div>
                <div className="one-half column">
                  <List
                    spendings={spendings}
                  />
                  <BudgetControl
                    budget={budget}
                    rest={rest}
                  />
                </div>
              </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
