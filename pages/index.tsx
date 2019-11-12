import React from "react";
import { Container, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  toolbar: {},
  toolbarTitle: {}
});

export default function Home() {
  const styles = useStyles();
  return (
    <Container maxWidth="lg">
      <Toolbar className={styles.toolbar}>
        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={styles.toolbarTitle}>
          TAT
        </Typography>
      </Toolbar>
    </Container>
  );
}
