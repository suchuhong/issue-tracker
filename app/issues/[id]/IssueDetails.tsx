import { IssueStatusBadge } from '@/app/components';
import { Issues } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issues }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className='space-x-5' my='2'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose max-w-full' mt='4'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
