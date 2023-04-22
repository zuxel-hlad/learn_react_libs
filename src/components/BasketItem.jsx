import { ListItem, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = ({ removeFromOrder, quantity, name, price, id }) => {
    return (
        <ListItem className="list-group-item">
            <Typography variant="body1">
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton
                sx={{ ml: 'auto' }}
                onClick={() => removeFromOrder(id)}
            >
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
