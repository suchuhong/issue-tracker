import prisma from '@/prisma/client';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import IssueFormSkeleton from './loading';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
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
