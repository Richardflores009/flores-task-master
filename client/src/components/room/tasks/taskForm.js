import React from 'react';
import {InputAdornment, TextField, IconButton} from '@material-ui/core';


const TaskForm = () => {

    return (
        <div>

            <TextField
                required
                id='password'
                label='Password'
                InputProps={{
                    endAdornment: (
                    <InputAdornment position='end'>
                    <IconButton>
                        helllo
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />
        </div>
    )
}

export default TaskForm