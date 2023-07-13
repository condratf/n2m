import { redirect } from 'next/navigation'
import { routes } from '@/routes'

export default function Policies() {
 return redirect(routes.policies.termsOfUse)
}