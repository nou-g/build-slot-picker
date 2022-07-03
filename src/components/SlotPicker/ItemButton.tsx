import React from "react";
import { Button, Grid } from "@mui/material";

import { styles } from "./styles";

function ItemButton({
  columns,
  item,
  type,
  selectedItem,
  setSelectedItem,
}: {
  columns: number;
  item: string;
  type: string;
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <Grid
      item
      xs={columns}
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        if (selectedItem === item && type === "slot") setSelectedItem(null);
        else setSelectedItem(item);
      }}
    >
      <Button
        sx={styles}
        variant={selectedItem === item ? "contained" : "outlined"}
      >
        {item}
      </Button>
    </Grid>
  );
}

export default ItemButton;
