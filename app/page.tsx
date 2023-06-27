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

    return (<>
        <div>
            <h3 className="text-lg font-medium">Welcome</h3>
            <p className="text-sm text-muted-foreground">
                Please use your unique link to access voting.
            </p>
        </div>
    </>
    )
}
