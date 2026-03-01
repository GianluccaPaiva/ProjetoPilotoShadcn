import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { addDays } from "date-fns"

export function Calendario() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  )
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="w-full max-w-5xl mx-auto h-fit">
      <CardContent className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="p-0 w-full [&_table]:table-fixed [&_table]:w-full [&_td]:h-14 [&_td]:text-center [&_td_button]:text-base [&_td_button]:w-full [&_td_button]:h-full [&_th]:h-10 [&_th]:w-[14.28%] [&_th]:text-base [&_th]:text-center [&_.rdp-caption]:text-xl"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Hoje", value: 0 },
          { label: "Amanhã", value: 1 },
          { label: "Em 3 dias", value: 3 },
          { label: "Em uma semana", value: 7 },
          { label: "Em 2 semanas", value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(
                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
              )
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
