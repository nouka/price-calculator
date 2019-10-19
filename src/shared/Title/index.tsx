import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Settings } from "@material-ui/icons";

interface Props {
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    icon: {
      color: "white"
    }
  })
);

const Title = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {props.label}
          </Typography>
          <IconButton edge="end">
            <Link to="/settings" className={classes.icon}>
              <Settings />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
