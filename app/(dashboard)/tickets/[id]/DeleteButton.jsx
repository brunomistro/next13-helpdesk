"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// icons & UI
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  let [isPending, startTransition] = useTransition()

  return (
    <button 
      className="btn-primary" 
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isPending && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}
