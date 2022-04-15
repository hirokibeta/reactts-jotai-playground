import { useState } from 'react';
import {
  Avatar, Fade, IconButton, Menu, MenuItem,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeSwitch } from '@src/common/components/ThemeSwitch';

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: 'success.main' }}>
          <PersonIcon />
        </Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        // to avoid blink on ios safari
        // TODO: watch (https://github.com/mui/material-ui/issues/31380)
        TransitionComponent={Fade}
      >
        <MenuItem>
          <ThemeSwitch />
        </MenuItem>
      </Menu>
    </>
  );
}
