"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { events } from "@/lib/data"
import Navbar from "@/components/navbar"

// Função para atualizar o ano para 2025
const updateYearTo2025 = (dateString: string) => {
  const date = new Date(dateString)
  date.setFullYear(2025)
  return date
}

export default function Home() {
  const [location] = useState("Caruaru, Pernambuco, Brasil")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Obter todas as categorias únicas
  const allCategories = Array.from(new Set(events.map((event) => event.category)))

  // Filtrar eventos por categoria
  const filteredEvents =
    selectedCategories.length > 0 ? events.filter((event) => selectedCategories.includes(event.category)) : events

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-white">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Próximos Eventos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra e participe de eventos incríveis acontecendo ao seu redor. De conferências de tecnologia a
            workshops e encontros de networking.
          </p>

          {/* Campo de localização e filtro */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="text" value={location} className="pl-10 pr-4 py-2" readOnly />
              </div>
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                <Filter className="h-4 w-4" />
                Filtrar
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow bg-white overflow-hidden border rounded-lg"
            >
              {/* Imagem do evento */}
              <div className="relative w-full h-48">
                <Image
                  src={event.image || "/placeholder.svg?height=400&width=600"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                    {event.category}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3 mb-4">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      {updateYearTo2025(event.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/events/${event.id}`} className="w-full">
                  <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                    Ver Detalhes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <footer className="border-t py-4 bg-white text-center text-sm text-muted-foreground">
        © 2024 EventHub. Todos os direitos reservados.
      </footer>
    </>
  )
}

