import {petValidationSchema} from '../../hooks/useOwner'
import { useFormik } from 'formik';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const PetEdit = ({pet, savePet, ...props}) => {
  const formik = useFormik({
    initialValues: pet,
    enableReinitialize:true,
    validationSchema: petValidationSchema,
    onSubmit: (data) => {
      console.log('save pet', formik.values);
      savePet(data);
    }
  });
  
  return (
    <form onSubmit={formik.handleSubmit}
      autoComplete="off"
      noValidate
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
                label="Pet name"
                name="pet_name"
                error={Boolean(formik.touched.pet_name && formik.errors.pet_name)}
                helperText={formik.touched.pet_name && formik.errors.pet_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.pet_name}
                variant="outlined"
                type='text'
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={6}
            >
           
           <Button onClick={() => formik.handleSubmit()}
            color="primary"
            variant="contained"

          >
            Save pet
          </Button>


            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
