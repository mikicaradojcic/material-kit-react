import { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { AuthContext } from '../contexts/auth-context';
//import { auth, ENABLE_AUTH } from '../lib/auth';
import useDirectusService from '../hooks/useDirectusService';
export const AccountPopover = (props) => {

  const { signOut } = useDirectusService();
  const { anchorEl, onClose, open, ...other } = props;
  const authContext = useContext(AuthContext);
  const handleSignOut = async () => {
    onClose?.();


    try {
      // This can be call inside AuthProvider component, but we do it here for simplicity
      await signOut();

      // Update Auth Context state
      authContext.signOut();

      // Redirect to sign-in page
      Router
        .push('/login')
        .catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {`${authContext.user.first_name} ${authContext.user.last_name}`}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
