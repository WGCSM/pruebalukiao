import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage, Link } from '@inertiajs/react';

export default function Dashboard({ auth,props }) {
    const { empleado } = usePage().props;
    const { data, setData, put, errors } = useForm({      

        nombre:empleado.nombre || "",
        apellido:empleado.apellido || "",
        razonSocial:empleado.razonSocial || "",
        cedula:empleado.cedula || "",
        telefono:empleado.telefono || "",
        pais:empleado.pais || "",
        ciudad:empleado.ciudad || "",

    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("empleados.update", empleado.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        > 
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none" href={ route("empleados.index") }>Atras</Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                <div className="mb-4">
                                        <label className="">Nombre</label>
                                        <input type="text" className="w-full px-4 py-2" label="Nombre" name="title" value={data.nombre} onChange={(e) => setData("nombre", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.nombre}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Apellido</label>
                                        <input type="text" className="w-full px-4 py-2" label="Apellido" name="title" value={data.apellido} onChange={(e) => setData("apellido", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.apellido}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Razon Social</label>
                                        <input type="text" className="w-full px-4 py-2" label="Razon Social" name="title" value={data.razonSocial} onChange={(e) => setData("razonSocial", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.razonSocial}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Cedula</label>
                                        <input type="text" className="w-full px-4 py-2" label="Cedula" name="title" value={data.cedula} onChange={(e) => setData("cedula", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.cedula}
                                        </span>
                                    </div><div className="mb-4">
                                        <label className="">Telefono</label>
                                        <input type="text" className="w-full px-4 py-2" label="Telefono" name="title" value={data.telefono} onChange={(e) => setData("telefono", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.telefono}
                                        </span>
                                    </div><div className="mb-4">
                                        <label className="">Ciudad</label>
                                        <input type="text" className="w-full px-4 py-2" label="Ciudad" name="title" value={data.pais} onChange={(e) => setData("pais", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.pais}
                                        </span>
                                    </div><div className="mb-4">
                                        <label className="">Pais</label>
                                        <input type="text" className="w-full px-4 py-2" label="Pais" name="title" value={data.ciudad} onChange={(e) => setData("ciudad", e.target.value) }/>
                                        <span className="text-red-600">
                                            {errors.ciudad}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="px-6 py-2 font-bold text-white bg-green-500 rounded">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}    