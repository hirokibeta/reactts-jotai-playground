/* eslint-disable react/no-array-index-key */
import { atom, useAtom, PrimitiveAtom } from 'jotai';
import { splitAtom } from 'jotai/utils';
import { nanoid } from 'nanoid';

const initialState = [
  {
    task: 'help the town',
    done: false,
  },
  {
    task: 'feed the dragon',
    done: false,
  },
];

const todosAtom = atom(initialState);
const todoAtomsAtom = splitAtom(todosAtom);

type TodoType = typeof initialState[number];

function TodoItemView({ todoAtom }: { todoAtom: PrimitiveAtom<TodoType> }) {
  const [todo] = useAtom(todoAtom);
  return <div>{todo.task}</div>;
}

function TodoItemEdit({
  todoAtom,
  remove,
}: {
  todoAtom: PrimitiveAtom<TodoType>;
  remove: () => void;
}) {
  const [todo, setTodo] = useAtom(todoAtom);
  return (
    <div>
      <input
        value={todo.task}
        onChange={(e) => {
          setTodo((oldValue) => ({ ...oldValue, task: e.target.value }));
        }}
      />
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          setTodo((oldValue) => ({ ...oldValue, done: !oldValue.done }));
        }}
      />
      <button type="button" onClick={remove}>
        remove
      </button>
    </div>
  );
}

export function SplitAtom() {
  const [todoAtoms, dispatch] = useAtom(todoAtomsAtom);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({
          type: 'insert',
          value: {
            task: nanoid(),
            done: false,
          },
        })}
      >
        insert
      </button>
      <ul>
        {todoAtoms.map((todoAtom, i) => (
          <TodoItemView key={i} todoAtom={todoAtom} />
        ))}
      </ul>
      <ul>
        {todoAtoms.map((todoAtom, i) => (
          <TodoItemEdit
            key={i}
            todoAtom={todoAtom}
            remove={() => dispatch({ type: 'remove', atom: todoAtom })}
          />
        ))}
      </ul>
    </>
  );
}
