import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';


function FruitSurvey(){
    const [textInput,setTextInput] = useState('');

    const handleEventChange =event=>{
        setTextInput(event.target.value)
    };

    const updateClick =()=>{
        console.log(textInput,fruit)    
        alert('Hello '+textInput+', your favourite fruit is '+fruit );    
    };


    const [fruit, setFruit] = React.useState('');

    const handleChange = (event) => {
      setFruit(event.target.value);
    };

    return(
        <div id='form'>


        <Container maxWidth={false}>
        <p class="h5">Enter your Name:</p>
        <FormControl fullWidth sx={{ m: 1}} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            multiline
            rows={1}
            placeholder="Enter Your Name"
            onChange={handleEventChange}
          />
        </FormControl>


      </Container>
      <Container maxWidth={false}>
      <p class="h5">Select Fruits:</p>
      <FormControl  fullWidth sx={{ m: 1}} >
        <InputLabel id="demo-simple-select-autowidth-label">Fruit</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={fruit}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Watermelon"}>Watermelon</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Orange"}>Orange</MenuItem>
          <MenuItem value={"Grape"}>Grape</MenuItem>
          <MenuItem value={"Strawberry"}>Strawberry</MenuItem>
          <MenuItem value={"Dragon Fruit"}>Dragon Fruit</MenuItem>
          <MenuItem value={"Mango"}>Mango</MenuItem>
          <MenuItem value={"Wood Apple"}>Wood Apple</MenuItem>
          <MenuItem value={"Blue Berry"}>Blue Berry</MenuItem>
        </Select>
      </FormControl>
      </Container>
      
      <Box textAlign={'center'}>
        <Button variant='contained' endIcon={<SendRoundedIcon />} onClick={updateClick}>Submit</Button>
        </Box>
        <br />
        <p>{updateClick}</p>
      </div>
    )
}

export default FruitSurvey;