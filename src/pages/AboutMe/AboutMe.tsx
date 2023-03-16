import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutMe = () => {
  return (
    <div>
      <Accordion sx={{ marginTop: 10}}>
        <AccordionSummary
          sx={{ marginTop: 10}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Erik "Niekada" Tankeliūn
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ocupation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Programmer / Photographer
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Age</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            32
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Residency</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vilnius, Lithuania
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Philosofy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What you do - do as best as you can
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Random fact of the day</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I can't do the backflip on my skateboard
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AboutMe;