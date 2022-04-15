import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useColorMode, useToggleColorMode } from '../hooks/useColorMode';

export function ThemeSwitch() {
  const colorMode = useColorMode();
  const toggleColorMode = useToggleColorMode();

  const handleChange = () => {
    toggleColorMode();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={colorMode === 'dark'} onChange={handleChange} />}
        label="Dark Mode"
      />
    </FormGroup>
  );
}
