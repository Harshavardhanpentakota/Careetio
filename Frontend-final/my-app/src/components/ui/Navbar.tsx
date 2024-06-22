import React from 'react'
import { ClerkLoaded,ClerkLoading,useAuth,UserButton} from "@clerk/clerk-react";
import { ModeToggle } from './mode-toggle';
import UserProfileSkeleton from './skeletons/UserProfileSkeleton';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import SparklesText from '../magicui/sparkles-text';

const Navbar = ({genAi}:{genAi:boolean}) => {
    const {isSignedIn} = useAuth();
  return (
    <div className="border-b relative py-3">
      <div className="h-14 container flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <a href="/home"><p className="text-3xl font-bold font-montserrat">Careetio</p></a>
         {
          !genAi ? (
            <Button variant="outline" className='shadow-md' >
            <a href="/generate-ai">
            <SparklesText className='text-md' sparklesCount={4} text='Generate with AI' />
            </a>
          </Button>
          ):(
            <Button variant="link" className='text-md mt-2' >
            <a href="/home">
            Home
            </a>
          </Button>
          )
         }
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {!isSignedIn ? (
            <Button  asChild>
              <a href="/signin"  >Sign in</a>
            </Button>
          ) : (
            <>
              <Button variant="link" >
                <a href="/dashboard" className='font-montserrat font-semibold' >Dashboard</a>
              </Button>
              <ClerkLoading>
                <UserProfileSkeleton />
              </ClerkLoading>
              <ClerkLoaded>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "h-8 w-8",
                        },
                      }}
                      afterSignOutUrl="/signin"
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Do you really want to sign out?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => ({ redirectUrl: '/signin' })}
                      >
                        Sign Out
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </ClerkLoaded>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar