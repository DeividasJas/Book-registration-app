import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

export default function BuyButtonModal({ book }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant='outlined' color='neutral' onClick={() => setOpen(true)}>
        Buy now
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby='nested-modal-title'
          aria-describedby='nested-modal-description'
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <Typography
            id='nested-modal-description'
            textColor='text.tertiary'
          >Would you like to purchase '{book.title}'
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
            <Button
              variant='solid'
              color='success'
              onClick={() => setOpen(false)}
            >
              Yes
            </Button>
            <Button
              variant='outlined'
              color='danger'
              onClick={() => setOpen(false)}
            >
              No
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
