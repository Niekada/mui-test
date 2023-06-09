import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">How did you like my page?</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}