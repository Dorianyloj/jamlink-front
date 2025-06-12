import { Container, Button} from "../atoms";

const Menu = ({ onSelect, items, theme }) => {

  const handleSelect = (section) => {
    onSelect(section);
  };

  return (
    <nav>
      <Container.Base 
        bgColor={theme.colors.current.surface}
        padding="1rem" 
        rounded 
        elevated
        margin="0 0 1rem 0"
        style={{ 
          border: `1px solid ${theme.colors.current.border}`,
          boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
        }}
      >
        <Container.Flex 
          direction="row" 
          gap="0.5rem" 
          align="center"
          wrap="wrap"
        >
          {items.map(item => (
            <Button.Default
              key={item.id}
              onClick={() => handleSelect(item.section)}
              variant="tertiary"
              small
              style={{
                backgroundColor: 'transparent',
                color: theme.colors.current.text,
                border: `1px solid transparent`,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = theme.colors.current.surfaceElevated;
                e.target.style.borderColor = theme.colors.current.border;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
              }}
            >
              {item.label}
            </Button.Default>
          ))}
        </Container.Flex>
      </Container.Base>
    </nav>
  );
};

export default Menu;