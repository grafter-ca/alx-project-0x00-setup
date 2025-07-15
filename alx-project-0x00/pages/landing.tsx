import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <Button   title="Book Now/small" styles="px-2 py-1 border-2 mr-2 rounded-sm"/>
      <Button   title="Book Now/medium" styles="px-2 py-1 border-2 mr-2 rounded-md"/>
      <Button   title="Book Now/large" styles="px-2 py-1 border-2 mr-2 rounded-full"/>
    </div>
  )
}
export default Landing