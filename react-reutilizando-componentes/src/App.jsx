import Card from "./components/Card"
import Button from "./components/Button"

export default function App() {
  return (
    <>
      <Button text="Assistir" />
      <Card title="Deadpool (2016)" poster="/posterDeadpool1.jpg" />
      <Card title="Deadpool 2 (2018)" poster="/posterDeadpool2.jpg" />
      <Card title="Deadpool 3 (Coming soon)" poster="/posterDeadpool3.jpg" />
    </>
  )
}