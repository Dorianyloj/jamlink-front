import {Button} from "../../atoms/";

const MenuToggle = ({ isOpen, toggle }) => {
    return (
      <Button.Default onClick={toggle}>
        {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      </Button.Default>
    );
  };
  
  export default MenuToggle;