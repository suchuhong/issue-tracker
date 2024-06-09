import createIssueSchema from '@/app/createIssueSchema';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: string };
}

// 更新issue
export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issues.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  const updateIsue = await prisma.issues.update({
    where: { id: parseInt(params.id) },
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return NextResponse.json(updateIsue);
}
