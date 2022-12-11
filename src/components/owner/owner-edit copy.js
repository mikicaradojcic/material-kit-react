import { useState, useEffect } from 'react';
import {directusService} from '../../lib/directusService';

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField
} from '@mui/material';

export const OwnerEdit = ({addPet,owner,saveOwner, ...props}) => {
  const [ownerToEdit, setOwnerToEdit] =useState(owner);
  
useEffect(()=>{
  setOwnerToEdit(owner);
}, [owner]);

const handleOwnerSave = (event) => {
  saveOwner(ownerToEdit);
  };
  
  const handleChange  = (event) => {
    setOwnerToEdit({
      ...ownerToEdit,
      [event.target.name]: event.target.value
    });
    };
  
    const handleAddPet  = (event) => {
      addPet();
      };
    
    
  
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={ownerToEdit.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={ownerToEdit.lastName}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={owner.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={owner.phone}
                variant="outlined"
              />
            </Grid>

 */}


            <Grid item>
            <Button
            color="primary"
            variant="contained"
            onClick={handleOwnerSave}
          >
            Save details
          </Button>
          
          </Grid>

          {owner.id && <Grid item>
            <Button
            color="primary"
            variant="contained"
            onClick={handleAddPet}
          >
            Add Pet
          </Button>
          
          </Grid>}

          </Grid>
        </CardContent>
        
      </Card>
    </form>
  );
};
