import { Snackbar, Alert } from '@mui/material';

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
    return (
        <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={500}>
            <Alert severity="success">Товар успешно добавлен в корзину!</Alert>
        </Snackbar>
    );
};

export default Snack;
