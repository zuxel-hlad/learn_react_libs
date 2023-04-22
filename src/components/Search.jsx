import { TextField } from '@mui/material';

const Search = ({ onChange, value }) => {
    return (
        <TextField
            label="Search"
            type="search"
            value={value}
            onChange={onChange}
            sx={{ mb: '1rem' }}
            variant="standard"
            fullWidth
        />
    );
};

export default Search;
