import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import IssueForm from '../../_components/IssueForm';

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const curIssue = await prisma.issues.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!curIssue) notFound();

  return (
    <div>
      <IssueForm issue={curIssue} />
    </div>
  );
};

export default EditIssuePage;
