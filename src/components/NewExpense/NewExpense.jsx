import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log('called ', expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
