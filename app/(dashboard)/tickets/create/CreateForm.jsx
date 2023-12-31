import SubmitButton from "@/app/components/SubmitButton"
import { addTicket } from "../actions";

export default function CreateForm() {

  return (
    <form action={addTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" name="Title" />
      </label>
      <label>
        <span>Body:</span>
        <textarea required name="Body" />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button>
        <SubmitButton />
      </button>
    </form>
  );
}
