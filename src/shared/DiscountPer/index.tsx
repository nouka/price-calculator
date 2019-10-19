import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Slider
} from "@material-ui/core";

interface Props {
  onChange(e: any): void;
  value: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "2em",
      paddingBottom: "2em"
    },
    slider: {
      boxSizing: "border-box",
      padding: "50px 1em 0",
      width: "50vw"
    }
  })
);

const marks = [
  {
    value: 0,
    label: "0%"
  },
  {
    value: 100,
    label: "100%"
  }
];

const DiscountPer = (props: Props) => {
  const classes = useStyles();
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    props.onChange(newValue);
  };
  return (
    <ListItem className={classes.root}>
      <ListItemText>ディスカウント率</ListItemText>
      <ListItemSecondaryAction className={classes.slider}>
        <Slider
          aria-labelledby="discrete-slider-always"
          marks={marks}
          onChange={handleSliderChange}
          step={10}
          value={typeof props.value === "number" ? props.value : 0}
          valueLabelDisplay="on"
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DiscountPer;
