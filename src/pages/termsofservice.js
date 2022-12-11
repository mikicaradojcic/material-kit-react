import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';

const Page = () => {
  
  

//console.log('publicData', publicData);
return (
  <>
    <Head>
      <title>
        Terms Of Service test
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <Typography
        sx={{ m: 1 }}
        variant="h4"
        paddingBottom={5}
      >
        Terms Of Service
      </Typography>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat quam at semper gravida. Nulla ornare nunc est, vel tempor quam imperdiet nec. Suspendisse ut elit quis lacus dapibus mattis non vel purus. Donec id nunc et ex aliquam facilisis et vitae tellus. Proin venenatis convallis pulvinar. Mauris vitae est ut tortor luctus rutrum id vel dolor. Etiam volutpat ullamcorper elit iaculis sollicitudin. Maecenas gravida, lorem nec maximus elementum, leo lectus maximus neque, non egestas nisi turpis sit amet quam. Pellentesque gravida vestibulum turpis, et hendrerit nulla commodo ut. Ut sed libero lorem. Curabitur metus dolor, aliquet a aliquet a, vestibulum eu quam. Aenean nec mattis augue, at euismod neque. Sed porttitor semper laoreet. Cras quis sodales diam.

Nunc nibh diam, efficitur eget consectetur bibendum, gravida a nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dignissim elit ex, eget tristique enim gravida id. Donec rhoncus purus quis interdum consequat. Donec ut quam tellus. Vivamus semper dapibus congue. In dapibus turpis consequat, vulputate lectus id, auctor sapien. Fusce faucibus in tortor ut tristique. Sed semper, velit id sodales ultricies, urna justo gravida turpis, quis fringilla metus augue eu metus. Ut in gravida purus.

Aenean et dapibus est. Praesent ut urna vulputate, fermentum urna quis, dignissim quam. Vestibulum sagittis lacus velit, in aliquam magna ornare id. Integer ut neque vel erat rutrum tempus sed id lectus. Phasellus consectetur est sed porttitor auctor. Fusce eleifend odio rhoncus molestie lacinia. Praesent sit amet sem eget ante accumsan blandit quis sit amet ligula. Morbi porttitor imperdiet nulla, sed commodo mauris iaculis in.

Nulla ac suscipit ligula. Donec sodales ipsum sit amet sodales sodales. Vivamus sit amet pulvinar nisl, non cursus justo. Integer egestas arcu velit, ac fringilla dui posuere vel. Nullam porttitor justo nulla, non pretium dui tincidunt non. Duis vehicula, diam eget auctor ornare, mauris lectus condimentum urna, ut volutpat nisl odio at nunc. In purus lacus, molestie in elit ac, venenatis pulvinar leo. Curabitur imperdiet ligula lectus, eu porta enim vulputate nec. Vivamus non sem et purus vehicula scelerisque sagittis nec turpis. Praesent nec lacus turpis. Cras mollis accumsan felis ac pellentesque. Sed pretium, arcu sed lobortis facilisis, ante massa condimentum dolor, quis eleifend libero dui non felis. Praesent cursus odio nec nibh rhoncus interdum. Fusce at felis at dui venenatis egestas in vitae quam. Nullam nisi velit, blandit eget tincidunt ut, ultrices consectetur tortor. In sed cursus quam.

Mauris facilisis tincidunt nunc sit amet viverra. Sed facilisis scelerisque elit, et porta libero rhoncus at. Sed consectetur libero ut pulvinar gravida. Integer lacinia volutpat sapien at sagittis. Duis porttitor, eros vel lacinia fermentum, dui justo interdum nisi, et auctor elit augue id eros. Phasellus tincidunt magna nec purus tincidunt porttitor. Donec lobortis vel ex non posuere. In consequat risus id orci imperdiet eleifend. Donec placerat, sem sit amet euismod rhoncus, sapien metus luctus odio, a sagittis tellus est in felis. Ut lobortis nunc id placerat sagittis. Sed eget ex hendrerit, tempor ex tristique, egestas sem.
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
        
        </Box>
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
