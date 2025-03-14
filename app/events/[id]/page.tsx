"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { events } from "@/lib/data"
import { RegistrationModal } from "@/components/registration-modal"
import Navbar from "@/components/navbar"

// Função para atualizar o ano para 2025
const updateYearTo2025 = (dateString: string) => {
  const date = new Date(dateString)
  date.setFullYear(2025)
  return date
}

export default function EventPage({ params }: { params: { id: string } }) {
  const [showModal, setShowModal] = useState(false)
  const event = events.find((e) => e.id === params.id)

  if (!event) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center bg-white">
          <h1 className="text-2xl font-bold mb-4">Evento não encontrado</h1>
          <p className="mb-8">O evento que você está procurando não existe.</p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">Voltar para a Página Inicial</Button>
          </Link>
        </div>
      </>
    )
  }

  const handleRegister = () => {
    setShowModal(true)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-white">
        <Link href="/" className="inline-flex items-center text-sm mb-8 hover:text-blue-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para todos os eventos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={event.image || "/placeholder.svg?height=600&width=800"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mb-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600 mb-4">
                {event.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <div className="text-sm text-muted-foreground">Data</div>
                    <div>
                      {updateYearTo2025(event.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <div className="text-sm text-muted-foreground">Horário</div>
                    <div>{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <div className="text-sm text-muted-foreground">Local</div>
                    <div>{event.location}</div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Sobre este evento</h2>
                <p className="whitespace-pre-line">{event.description}</p>
                {event.longDescription && <p className="whitespace-pre-line mt-4">{event.longDescription}</p>}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24 bg-white">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-1">{event.price === 0 ? "Gratuito" : `R$${event.price}`}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees} pessoas confirmadas
                  </div>
                </div>

                <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700" size="lg" onClick={handleRegister}>
                  Inscrever-se neste evento
                </Button>

                <div className="text-sm text-muted-foreground">
                  <p>As inscrições encerram 24 horas antes do início do evento.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} eventTitle={event.title} />
      </div>
      <footer className="border-t py-4 bg-white text-center text-sm text-muted-foreground">
        © 2024 EventHub. Todos os direitos reservados.
      </footer>
    </>
  )
}

