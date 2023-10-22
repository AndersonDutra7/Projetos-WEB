import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
import { ShoppingCartIcon } from 'lucide-react';


const Header = () => {
    return <Card className="flex justify-between p-[1.875rem] items-center">

        <Button size="icon" variant="outline">
            <MenuIcon></MenuIcon>
        </Button>

        <h1 className="font-semibold text-4xl">
            <span className="text-primary">FSW</span> Store
        </h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon></ShoppingCartIcon>
        </Button>

    </Card>
}
 
export default Header;