import { useState, useEffect } from 'react';
import {directusService} from '../../lib/directusService';
import {ownerValidationSchema} from '../../hooks/useOwner'
import { useFormik } from 'formik';

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField
} from '@mui/material';

export const OwnerEdit = ({addPet,owner,saveOwner, ...props}) => {
  const formik = useFormik({
    initialValues: owner,
    enableReinitialize:true,
    validationSchema: ownerValidationSchema,
    onSubmit: (data) => {
      console.log('save owner', formik.values);
      saveOwner(data);
      // Router
      //   .push('/')
      //   .catch(console.error);
    }
  });

  const handleAddPet  = (event) => {
    addPet();
    };
  return (
    <form onSubmit={formik.handleSubmit}
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
                label="First name"
                name="firstName"
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.firstName}
                variant="outlined"
                type='text'
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
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.lastName}
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
                label="Contact phone"
                name="contactPhone"
                error={Boolean(formik.touched.contactPhone && formik.errors.contactPhone)}
                helperText={formik.touched.contactPhone && formik.errors.contactPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.contactPhone ||''}
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
                label="City"
                name="city"
                error={Boolean(formik.touched.city && formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.city ||''}
                variant="outlined"
              />
              
            </Grid>



            

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Owners note"
                name="ownersNote"
                error={Boolean(formik.touched.ownersNote && formik.errors.ownersNote)}
                helperText={formik.touched.ownersNote && formik.errors.ownersNote}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.ownersNote ||''}
                variant="outlined"
              />
              
            </Grid> 


            <Grid item>
            <Button
            color="primary"
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Save details
          </Button>
          
          </Grid>

          {owner.id && <Grid item>
            <Button
            color="secondary"
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
