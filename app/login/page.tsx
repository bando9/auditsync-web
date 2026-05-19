import React from "react"

function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-3">
        <div className="flex flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary p-2 text-gray-100">
            <ClipboardCheck />
          </div>
          <h1 className="text-2xl font-bold">AuditSync</h1>
          <p className="text-xs uppercase">industrial control systems</p>
        </div>
        <LoginForm />
        <div className="text-center">
          <div className="rounded-full bg-accent-foreground p-0.5">
            <p>System fully operational</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <p>v.0.1-build</p>
            <p>Secure Node</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ClipboardCheck } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>
            Enter your credentials to access the audit dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="auditor@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <Separator />
                <FieldDescription className="text-center">
                  Need an account?{" "}
                  <Link href="#" className="font-semibold">
                    Request Access
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
