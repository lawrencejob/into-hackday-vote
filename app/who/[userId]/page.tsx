"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from '@/components/ui/separator';
import { useMode } from '@/lib/mode-hook';

const FormSchema = z.object({
  technicalVote: z
    .string({
      required_error: "Please place a vote.",
    }),
  productVote: z
    .string({
      required_error: "Please place a vote.",
    }),
  discretionaryVote: z
    .string({
      required_error: "Please place a vote.",
    }),
})

export default function Home() {

  const [mode] = useMode();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("hi")
  }

  const teams = [
    ["Alex is typing", "alex-is-typing"],
    ["Alex is typing", "alex-is-typing2"],
    ["Alex is typing", "alex-is-typing3"],
    ["Alex is typing", "alex-is-typing4"],
  ]

  return (mode == "VOTING" && <>
    <div>
      <h3 className="text-lg font-medium">Place your vote</h3>
      <p className="text-sm text-muted-foreground">
        You have one opportunity to vote for a winner per team.
      </p>
    </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="technicalVote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Best technical execution (1 vote)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select best technical execution&hellip;" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {teams.map(t => <SelectItem key={t[1]} value={t[1]}>{t[0]}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormDescription>
                This is the team who you think has made the best technical design.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productVote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Best product idea (1 vote)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select best product idea&hellip;" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {teams.map(t => <SelectItem key={t[1]} value={t[1]}>{t[0]}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormDescription>
                Select the idea that you would most like to see built.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discretionaryVote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Favourite (1 vote)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select favourite&hellip;" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {teams.map(t => <SelectItem key={t[1]} value={t[1]}>{t[0]}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormDescription>
                Use this third vote at your discretion.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator orientation='horizontal' />
        <Button>Vote</Button>
      </form>
    </Form>
  </>
  )
}
