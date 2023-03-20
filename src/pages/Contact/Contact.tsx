import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ContactButton from './ContactButton';

const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        marginTop: 10,
        textAlign: 'center',
        '& .MuiTextField-root': { m: 2, width: '20%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard"
          label="Your name"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-required"
          label="Your last name"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-required"
          label="Your email"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-required"
          label="Your question"
          variant="standard"
        />
      </div>
      <ContactButton />
    </Box>
  );
};

export default Contact;