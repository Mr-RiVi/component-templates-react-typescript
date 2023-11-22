import React, { useState } from "react";

import { Box, Typography, TextField, MenuItem } from "@mui/material";

/**
 * A reusable functional component that represents a Material-UI
 * select/dropdown menu.
 * @param {Object} props - The props passed to the component.
 * @param {string[] | number[]} props.options - The array of options to be shown in the dropdown menu.
 * @param {string} props.label - The description or label for the dropdown menu.
 * @returns {JSX.Element} - The rendered component.
 */

type SelectMaterialUIProps = {
  options: string[] | number[];
  label: string;
  onChange: (value: any) => void;
};

// props destructured in here
const SelectMaterialUI = ({
  options,
  label,
  onChange,
}: SelectMaterialUIProps) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Box>
      <Typography variant="h4" align="center">
        Select Material UI
      </Typography>
      <Box>
        <TextField
          label={label}
          value={selectedValue}
          onChange={handleChange}
          select
          SelectProps={{}}
          sx={{ width: "200px" }}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default SelectMaterialUI;
