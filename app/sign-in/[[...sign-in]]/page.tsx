'use client'

import StarsCanvas from '@/components/background'
import { Button } from '@/components/ui/button'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-transparent px-4 sm:px-6 lg:px-8"
    >
      <StarsCanvas/>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full max-w-md space-y-6 rounded-2xl opacity-80 bg-zinc-900 px-6 py-10 shadow-lg ring-1 ring-white/10 backdrop-blur-md overflow-y-clip"
        >
          <header className="text-center opacity-100 ">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="mx-auto size-12 text-white"
              aria-hidden
            >
              <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
              </mask>
              <g fill="currentColor" mask="url(#a)">
                <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2Z" />
              </g>
            </svg> */}
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">
              Sign in to AI Agent
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          
          <div className="space-y-2">
            <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 16"
                className="w-4"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                />
              </svg>
              Login with Google
            </Clerk.Connection>
          </div>
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-white">Username</Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-zinc-800 px-3.5 py-2 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/40 focus:ring-white/70 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-white">Password</Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-md bg-zinc-800 px-3.5 py-2 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/40 focus:ring-white/70 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="w-full rounded-md bg-white px-3.5 py-1.5 text-center text-sm font-medium text-zinc-900 shadow-md outline-none ring-1 ring-inset ring-white hover:bg-zinc-300 focus-visible:outline-white focus-visible:outline-[1.5px] focus-visible:outline-offset-2"
          >
            Sign In
          </SignIn.Action>
          <p className="text-center text-sm text-white/80">
            No account?{' '}
            <Link href="/sign-up">
              <Button
                variant="ghost"
                className='font-medium text-white underline decoration-white/20 underline-offset-4 outline-none hover:text-zinc-300 hover:underline focus-visible:underline'
              >
                Sign Up
              </Button>
            </Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
