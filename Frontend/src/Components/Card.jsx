import { Button } from "./Button"

export const Card = (props) => {
  return (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{props.heading}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
    <Button label={props.button_label} onClick={props.onClick} />
</div>

  )
}

export default Card