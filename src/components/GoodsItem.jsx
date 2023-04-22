import {
    Card,
    CardMedia,
    Grid,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import React from 'react';

const GoodsItem = ({ name, price, setOrder, poster, id }) => {
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    minHeight: '312px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardMedia
                    src={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3">
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() =>
                            setOrder({
                                id: id,
                                name: name,
                                price: price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;
