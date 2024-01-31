import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState<string | null>(null)
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log('user session', session?.user!.name!)
    setUsername()
    console.log('state', user)
    findUser()
    createUser(user!)
  }, [])

  const setUsername = useCallback(() => {
    setUser(session?.user!.name!)
  }, [session])

  const findUser = async () => {
    try {
      const response = await fetch(`api/userRequest?username=${encodeURIComponent(user!)}`)
      const data = await response.json()
      console.log(data)

    } catch(error) {
      console.error(error)
    }
  }

  const createUser = async (username: string) => {
    try {
      const response = await fetch('api/userRequests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username })

      })
      const data = await response.json()
      console.log('reponse requete création user', data)
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  }

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.description}`}>
          {status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
          {status === "authenticated" && <button onClick={() => signOut()}>Sign Out</button>}
        </div>
        <div className={`${styles.content}`}>
          <h1>To Do List</h1>
          <Link href="/addtodo">Ajouter une nouvelle tâche</Link>
          <Link href="/modifytodo">Modifier une tâche</Link>
          <Link href="/simon">Jeu du Simon</Link>
        </div>
      </main>
    </>
  );
}
