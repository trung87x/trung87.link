"use server";

import { signOut, signIn } from "@/utils/auth";

export async function handleSignOut(options) {
  return await signOut(options);
}

export async function handleSignIn(provider, options) {
  return await signIn(provider, options);
}
