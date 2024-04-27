import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default async function User() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };


  return (
    user && (
      <div className="flex items-center gap-4">
        <form action={signOut}>
          <button className="py-2 px-4 rounded-md no-underline">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
          <button>
          </button>
        </form>
      </div>
    )
  );
}