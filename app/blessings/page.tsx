import { redirect } from "next/navigation"

export default function BlessingsPage() {
  redirect("/hongbao?tab=blessings")
  return null
}
