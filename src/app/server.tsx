"use server";
import { Pokemon } from "@prisma/client";
import {prisma} from "../server/db/client"
import { revalidatePath } from "next/cache"

export default async function voteForRoundest(firstId: number, secondId: number){

    revalidatePath("./")
    revalidatePath("./results")
    
    try {

await prisma.vote.create({
               data:{
                   votedForId: firstId,
                   votedAgainstId: secondId
               }
           })
    }
    catch(error) {
        console.log(error)
    }
    
  }