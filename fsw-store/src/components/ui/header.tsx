import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return <Card className="flex justify-between">

        <Button size="icon">
            <MenuIcon></MenuIcon>
        </Button>

    </Card>
}
 
export default Header;