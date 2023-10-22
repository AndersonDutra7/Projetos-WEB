import {
    HomeIcon,
    ListOrderedIcon,
    LogInIcon,
    LogOutIcon,
    MenuIcon,
    PercentIcon,
    ShoppingCartIcon,
  } from "lucide-react";
  import { Button } from "./button";
  import { Card } from "./card";
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "./sheet";
//   import { signIn, signOut, useSession } from "next-auth/react";
//   import { Avatar, AvatarImage } from "./avatar";
//   import { AvatarFallback } from "@radix-ui/react-avatar";
//   import { Separator } from "./separator";
//   import Link from "next/link";
//   import Cart from "./cart";


const Header = () => {
    return <Card className="flex justify-between p-[1.875rem] items-center">

        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon></MenuIcon>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">Menu
                </SheetHeader>
                <Button variant="outline" className="w-full justify-start">Fazer Login</Button> 
            </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-4xl">
            <span className="text-primary">FSW</span> Store
        </h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon></ShoppingCartIcon>
        </Button>

    </Card>
}
 
export default Header;