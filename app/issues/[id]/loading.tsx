import { Box, Card, Flex, Heading } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

const LoadingIssuedetailpage = () => {
  return (
    <Box>
      <Skeleton />
      <Flex className='space-x-5' my='2'>
        <Skeleton width='5rem' />
        <Skeleton width='8rem' />
      </Flex>
      <Card className='prose' mt='4'>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssuedetailpage;
