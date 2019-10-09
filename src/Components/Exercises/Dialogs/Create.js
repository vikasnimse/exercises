import React, { Component, Fragment } from "react";
import { Fab, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

var styles = theme =>({
    FormControl:{
        width:500
    }
})
export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title: "",
            description: "",
            muscles: ""
        }
    };
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        });
    };
    handleSubmit = () =>{
        const {exercise} = this.state;
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g,"-")
        });
        this.setState({
            open: false,
            exercise: {
                title: "",
                description: "",
                muscles: ""
            }
        })
    };
    render() {
        const {
            open,
            exercise: { title, description, muscles }
        } = this.state;
        const {classes, muscles: categories} = this.props;
        return (
            <Fragment>
                <Fab size="small" aria-label="add" onClick={this.handleToggle}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Create Exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Please fill form below
            </DialogContentText>
                        <form>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={this.handleChange("title")}
                                margin="normal"
                                className = {classes.FormControl}
                            />
                            <br />
                            <FormControl className = {classes.FormControl}>
                                <InputLabel htmlFor="age-simple">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange("muscles")}
                                >
                                    {categories.map(category =>
                                        <MenuItem key={category} value={category}>{category}</MenuItem>        
                                    )}
                                </Select>
                            </FormControl>
                            <br />
                            <TextField
                                label="Description"
                                value={description}
                                multiline
                                rows="4"
                                onChange={this.handleChange("description")}
                                margin="normal"
                                className = {classes.FormControl}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary" autoFocus>
                            Create
            </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
});

