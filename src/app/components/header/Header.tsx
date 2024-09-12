import ThemeToggle from "../theme/ThemeToggle";


export default function Header() {
  return (
    <div className="w-full sticky">
      <div className="py-4 px-2 flex items-center justify-between">
        <h1 className="text-4xl font-bold">POSTUMOS</h1>
        <ThemeToggle/>
      </div>
      
    </div>
  )
}
