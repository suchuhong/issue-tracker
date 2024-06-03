'use client';

import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {

  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
      {
        error && 
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      }
      <form className='space-y-3' 
      onSubmit={
        handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('未知的错误发生。');
          }
        })
      }>
          <TextField.Root placeholder='title' {...register('title')}>
          </TextField.Root>
          <Controller 
            name= "description"
            control={control}
            render={ ({ field }) => <SimpleMDE placeholder='Description' {...field}/> }
            />
          <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage