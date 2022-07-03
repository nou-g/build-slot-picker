import { useState, useEffect } from "react";
import { observer } from "mobx-react";

import { DateTime } from "luxon";

import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import ItemButton from "./ItemButton";

import generalStore from "../../stores/GeneralStore";

import { styles } from "./styles";

function SlotPicker({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [value, setValue] = useState<DateTime>(DateTime.now());
  const [selectedTime, setSelectedTime] = useState<string>("morning");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    generalStore.fetchSlots(value.toFormat("MM-dd-yyyy"));
  }, [value]);

  const handleChange = (newDate: any) => {
    setValue(newDate);
    setSelectedSlot(null);
    let formattedDate = newDate.toFormat("MM-dd-yyyy");
    generalStore.fetchSlots(formattedDate);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setValue(DateTime.now());
    setSelectedTime("morning");
    setSelectedSlot(null);
  };

  let slotKeys = Object.keys(generalStore.slots);
  let timeframes = slotKeys.map((timeframe: string, index: number) => (
    <ItemButton
      key={index}
      columns={4}
      item={timeframe}
      type="timeframe"
      selectedItem={selectedTime}
      setSelectedItem={setSelectedTime}
    />
  ));

  let slots = generalStore.slots[selectedTime].map(
    (slot: string, index: number) => (
      <ItemButton
        key={index}
        columns={3}
        item={slot}
        type="slot"
        selectedItem={selectedSlot}
        setSelectedItem={setSelectedSlot}
      />
    )
  );

  return (
    <Box>
      <Typography fontWeight={500}>Pick a date and time.</Typography>
      <Typography
        fontWeight={500}
        position="absolute"
        right={20}
        top={30}
        onClick={handleClose}
      >
        X
      </Typography>
      <StaticDatePicker<Date>
        displayStaticWrapperAs="desktop"
        orientation="portrait"
        disableHighlightToday={true}
        openTo="day"
        disablePast={true}
        value={value?.toJSDate()}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "100%", color: "red" }} />
        )}
      />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={2}
        justifyContent="center"
        alignItems="center"
      >
        {timeframes}
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={2}
        alignItems="center"
      >
        {slots}
      </Grid>
      <Button variant="contained" sx={styles} onClick={handleClose}>
        Apply
      </Button>
    </Box>
  );
}

export default observer(SlotPicker);
