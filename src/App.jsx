import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <h1 className='text-3xl font-bold underline'>
      Hello World

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Button className="mt-20" href="#login">
        something strange hit me
      </Button>
    </div>

      <ButtonGradient/>
    </h1>
  )
}

export default App
