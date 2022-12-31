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
                name="first_name"
                error={Boolean(formik.touched.first_name && formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.first_name}
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
                name="last_name"
                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.last_name}
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
                name="contact_phone"
                error={Boolean(formik.touched.contact_phone && formik.errors.contact_phone)}
                helperText={formik.touched.contact_phone && formik.errors.contact_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.contact_phone ||''}
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
                name="owners_note"
                error={Boolean(formik.touched.owners_note && formik.errors.owners_note)}
                helperText={formik.touched.owners_note && formik.errors.owners_note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.owners_note ||''}
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
