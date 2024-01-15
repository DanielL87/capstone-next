"use client";
import React from "react";
import { useParams } from "next/navigation.js";
import SinglePetPage from "@/app/components/SinglePetPage.jsx";

export default function PetPage() {
  const { petId } = useParams();

  return <SinglePetPage petId={petId} />;
}
