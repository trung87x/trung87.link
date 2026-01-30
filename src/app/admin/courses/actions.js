"use server";

import { createClient, createAdminClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/utils/auth";

export async function createCourse(formData) {
  const session = await auth();

  // Basic Admin protection
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  // Use Admin Client to bypass RLS
  const supabase = createAdminClient();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const description = formData.get("description");
  const price = parseInt(formData.get("price")) || 0;
  const price_sale = formData.get("price_sale")
    ? parseInt(formData.get("price_sale"))
    : null;

  console.log("[createCourse] Inserting course:", { title, slug });

  const { data, error } = await supabase
    .from("courses")
    .insert([
      {
        title,
        slug,
        description,
        price,
        price_sale,
        is_active: true,
      },
    ])
    .select(); // Add select to verify return

  if (error) {
    console.error("[createCourse] DB Error:", JSON.stringify(error, null, 2));
    throw new Error(error.message);
  }

  console.log("[createCourse] Success! Redirecting...");

  revalidatePath("/admin/courses");
  redirect("/admin/courses");
}

export async function updateCourse(id, formData) {
  const session = await auth();

  // Basic Admin protection
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const supabase = createAdminClient();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const description = formData.get("description");
  const price = parseInt(formData.get("price")) || 0;
  const price_sale = formData.get("price_sale")
    ? parseInt(formData.get("price_sale"))
    : null;
  const is_active = formData.get("is_active") === "on";

  const { error } = await supabase
    .from("courses")
    .update({
      title,
      slug,
      description,
      price,
      price_sale,
      is_active,
      updated_at: new Date(),
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating course:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/courses");
  redirect("/admin/courses");
}
