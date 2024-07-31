import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import cross from "../assets/cross.png";

const Todoitems = ({ no, display, text, setTodos }) => {
  const deletetodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div id="todoitems" className="bg-accent rounded-md flex justify-between flex-wrap">
      <div
        className={`todoitems-container ${display} flex items-center gap-2 cursor-pointer  `}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={notTick} alt="Not Tick" />
        ) : (
          <img src={tick} alt="Tick" />
        )}

        <div id="todoitems-text" className="max-w-[77vw] overflow-hidden">{text}</div>
      </div>
      <img
        id="todoitems-cross-icons"
        className="p-3 cursor-pointer"
        onClick={() => {
          deletetodo(no);
        }}
        src={cross}
        alt="Cross"
      />
    </div>
  );
};

export default Todoitems;
