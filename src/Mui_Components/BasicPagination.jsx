import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({story}) {
  let num= 0;
  if(story.numberChap <=30){
    num=0;
  }
  else {
    num=story.numberChap /30;
  }
  console.log(num);
  return (
    <Stack spacing={num}>
      <Pagination count={num} color="secondary" />
    </Stack>
  );
}
