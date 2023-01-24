import ExpenseItem from './ExpenseItem';
import '../css/Expenses.css'
import Card from './Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        );
      })}
    </Card>
  );
}

export default Expenses;