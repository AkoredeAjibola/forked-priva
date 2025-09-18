"use client";

import Modal from "@components/Modal";
import { addPatientSchema } from "@schemas/schemas";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";



type AddPatientFormData = z.infer<typeof addPatientSchema>;

interface AddPatientModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onSubmit: (data: AddPatientFormData) => void;
}

export default function AddPatientModal({ open, setOpen, onSubmit }: AddPatientModalProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<AddPatientFormData>();


    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-lg font-semibold mb-4">Add New Patient</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input {...register("name")} placeholder="Name" className="w-full border rounded-lg px-3 py-2" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                    <input {...register("age", { valueAsNumber: true })} type="number" placeholder="Age" className="w-full border rounded-lg px-3 py-2" />
                    <input {...register("gender")} placeholder="Gender" className="w-full border rounded-lg px-3 py-2" />
                    <input {...register("phone")} placeholder="Phone" className="w-full border rounded-lg px-3 py-2" />
                    <input {...register("email")} placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
                    <input {...register("address")} placeholder="Address" className="w-full border rounded-lg px-3 py-2" />
                    <input {...register("condition")} placeholder="Condition" className="w-full border rounded-lg px-3 py-2" />

                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-indigo-700 text-white rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
