'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function SignupForm() {
  const onSubmit = () => {};

  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: 'First name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
      message: 'Last name must be at least 2 characters.',
    }),
    email: z.string().min(3, {
      message: 'Email must be at least 3 characters.',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: '',
    },
  });
  return (
    <div className='max-w-[20rem] bg-[#dadada] p-6 rounded-md'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                {/*<FormLabel>SignUp Form</FormLabel>*/}{' '}
                <FormControl>
                  <Input placeholder='First Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                {/*<FormLabel>SignUp Form</FormLabel>*/}{' '}
                <FormControl>
                  <Input placeholder='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                {/*<FormLabel>SignUp Form</FormLabel>*/}
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                {/*<FormLabel>SignUp Form</FormLabel>*/}
                <FormControl>
                  <Input placeholder='Password' {...field} />
                </FormControl>
                <FormDescription>
                  Password must be at least 8 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                {/*<FormLabel>SignUp Form</FormLabel>*/}
                <FormControl>
                  <Input placeholder='Username' {...field} />
                </FormControl>
                <FormDescription>
                  This is going to be your public username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default SignupForm;
