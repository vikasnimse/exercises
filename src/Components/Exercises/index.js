import React, {Fragment} from "react";
import { List, ListItem, ListItemText, Paper, Grid, Typography } from "@material-ui/core";
const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}
export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an exercise from the list on the left.'
    }
}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                            <Typography
                                variant="h5"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) =>
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="h6"
                >
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    style={{ marginTop: 20 }}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>