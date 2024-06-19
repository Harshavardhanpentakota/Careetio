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
   
const Navbar = () => {
    const isSignedIn = useAuth();
  return (
    <div className="border-b">
      <div className="h-14 container flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <p className="font-bold text-base">Careetio</p>
          <div className="hidden md:!flex items-center gap-6 text-sm font-medium">
            <a href={"/home"} className="transition-colors hover:text-foreground/80 text-foreground/60">Home</a>
            <a href={"/profile"} className="transition-colors hover:text-foreground/80 text-foreground/60">Profile</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {!isSignedIn ? (
            <Button>
              <a href={"/signin"}>Sign in</a>
            </Button>
          ) : (
            <>
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
                      afterSignOutUrl="/sign-in"
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
                        onClick={() => ({ redirectUrl: '/sign-in' })}
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