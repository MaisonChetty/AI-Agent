"use client"

import Link from 'next/link'
import React from 'react'
import AgentPulse from './AgentPulse'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

function Header() {
  return (
    <header className=' sticky top-0 z-50 left-0 right-0 px-4 md:px-0
    bg-black/75 backdrop-blur-md border-b border-black/70'>
        <div className='container mx-auto '>
            <div className=' flex items-center justify-between h-16'>
                {/**Left */}
                <div className=' flex items-center justify-between h-16'> 
                    <Link href="/" className='flex items-center gap-4'>
                        {/**AgentPulse */}
                        <AgentPulse size='small' color='purple'/>
                        <h1 className='text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                            AgentTube
                        </h1>
                    </Link>
                </div>

                {/**Right */}
                <div className='flex items-center gap-4'>
                    <SignedIn>
                        <Link href="/manage-plan">
                        <Button
                            variant="outline"
                            className='mr-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-xl'>
                                Manage Plan
                        </Button>
                        </Link>
                        
                        <div className=' p-2 w-10 h-10 flex items-center justify-center
                        rounded-full border bg-blue-100 border-blue-200'>
                            <UserButton/>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <Link href="/sign-in">
                            <Button
                                variant="ghost"
                                className='bg-gradient-to-r from-blue-400 to-purple-500 
                                text-transparent bg-clip-text text-xl'>
                                Sign In
                            </Button>
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
