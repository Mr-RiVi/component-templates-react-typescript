import React, { useState } from "react";

import SelectMaterialUI from "../components/DropdownMenu/MuiSelect";
import { products } from "../utils/dropdownOptions";

const DropdownMenu = () => {
  const [value, setValue] = useState();

  return (
    <section>
      <SelectMaterialUI
        options={products}
        label="Products"
        onChange={setValue}
      />
      <h3>This is parent component and selected product is : {value}</h3>
    </section>
  );
};

export default DropdownMenu;
