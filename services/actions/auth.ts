"use server";

import { signIn, signOut } from "@/services";
import { rootPaths } from "@/services/routes";

export async function handleSignIn(formData: FormData) {
  const provider = formData.get("action");
  if (typeof provider !== "string") return;
  await signIn(provider, { redirectTo: rootPaths.home.path });
}

export async function handleSignOut() {
  await signOut({ redirectTo: rootPaths.home.path });
}
