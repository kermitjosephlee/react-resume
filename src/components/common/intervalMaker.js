import { format } from "date-fns"

export function intervalMaker (start, end, isUnixTime = false){
  if (!start || !end) return ""
  const dateCreator = (date) => isUnixTime ? Date.parse(date) : format(Date.parse(date), "MMM yyyy")

  return `${dateCreator(start)} - ${dateCreator(end)}`
}