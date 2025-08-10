import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Lloyd Rosales</h1>
        <p className="text-xl mb-8">Computer Science Student & Aspiring Developer</p>
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  )
}

