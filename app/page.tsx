"use client"
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useBalance } from "wagmi";
import { useState, useEffect } from 'react';
import { useUser } from "@/lib/UserContext";
import { Copy } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"
import { Separator } from "@/components/ui/separator"

function TitleBlock() {
    return (
        <div className="flex flex-col items-center pt-4">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Deposit Funds
            </h1><p className="max-w-[700px] text-lg text-muted-foreground">
                Deposit ETH and stETH into your account
            </p>
        </div>
    );
}

export default function DepositPage() {
    return (
        <div className="flex flex-col items-center gap-6 py-3 ">
            <TitleBlock />
        </div>
    )
}
