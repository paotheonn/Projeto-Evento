"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  eventTitle: string
}

export function RegistrationModal({ isOpen, onClose, eventTitle }: RegistrationModalProps) {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegister = () => {
    // Simulate registration process
    setTimeout(() => {
      setIsRegistered(true)
    }, 500)
  }

  const handleClose = () => {
    onClose()
    // Reset state after modal is closed
    setTimeout(() => {
      setIsRegistered(false)
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          {!isRegistered ? (
            <>
              <DialogTitle>Inscrever-se no evento</DialogTitle>
              <DialogDescription>
                Você está prestes a se inscrever em <span className="font-medium">{eventTitle}</span>
              </DialogDescription>
            </>
          ) : (
            <DialogTitle className="text-center">Inscrição Realizada com Sucesso</DialogTitle>
          )}
        </DialogHeader>

        {!isRegistered ? (
          <div className="space-y-4 py-4">
            <p>
              Ao se inscrever, você confirma sua presença neste evento. Você receberá um e-mail de confirmação com todos
              os detalhes.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button onClick={handleRegister} className="bg-blue-600 hover:bg-blue-700">
                Confirmar Inscrição
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6 space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-medium">Tudo pronto!</p>
              <p className="text-muted-foreground">
                Você se inscreveu com sucesso em <span className="font-medium">{eventTitle}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Um e-mail de confirmação foi enviado para o seu endereço de e-mail cadastrado.
              </p>
            </div>
            <Button onClick={handleClose} className="mt-4 bg-blue-600 hover:bg-blue-700">
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

