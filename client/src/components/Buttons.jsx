import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex mx-auto" >
      <Link to="/25">
        <button className="h-40 w-40 rounded-full m-5 bg-saffron text-3xl">
          25/5
        </button>
      </Link>
      <Link to="/50">
        <button className="h-40 w-40 rounded-full m-5 bg-saffron text-3xl">
          50/10
        </button>
      </Link>
      <Link to="/100">
        <button className="h-40 w-40 rounded-full m-5 bg-saffron text-3xl">
          100/20
        </button>
      </Link>
    </div>
  )
}

export default Buttons;