import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Header = ({ handleCart, orderLen }) => {
    return (
        <header className="header">
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{ flexGrow: 1 }}
                    >
                        MUI Shop
                    </Typography>
                    <IconButton 
                        color="inherit" 
                        onClick={handleCart}>
                        <Badge 
                            badgeContent={orderLen} 
                            color="secondary"
                            >
                            <ShoppingBasket />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
