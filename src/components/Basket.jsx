import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    IconButton,
} from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import CloseIcon from '@mui/icons-material/Close';
import BasketItem from './BasketItem';

const Basket = ({
    order = [],
    removeFromOrder,
    cartOpen,
    closeCart = Function.prototype,
}) => {
    return (
        <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
            <List sx={{ width: '400px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                    <IconButton onClick={closeCart}>
                        <CloseIcon />
                    </IconButton>
                </ListItem>
                <Divider />
                {!order.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                        {order.map(item => (
                            <BasketItem
                                {...item}
                                key={item.name}
                                removeFromOrder={removeFromOrder}
                            />
                        ))}
                        <Divider />
                        <ListItem>
                            <Typography sx={{ fontWeight: 700 }}>
                                Общая стоимость:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                гривен.
                            </Typography>
                        </ListItem>
                    </>
                )}
            </List>
        </Drawer>
    );
};

export default Basket;
