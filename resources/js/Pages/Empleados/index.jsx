import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, usePage, Link,router   } from '@inertiajs/react';

export default function Dashboard({ auth,props }) {
    const { empleados } = usePage().props
    
    function destroy(e) {
        if (confirm("Desea eliminar este empleado?")) {
            router.delete(route("empleados.destroy", e.currentTarget.id));
        }
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
                                    <Link className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none" href={ route("empleados.create") }>Crear Empleado</Link>
                                </div>
                                <table className="table-fixed w-full">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 w-20">Nombre</th>
                                            <th className="px-4 py-2">Apellido</th>
                                            <th className="px-4 py-2">Razon Social</th>
                                            <th className="px-4 py-2">Cedula</th>
                                            <th className="px-4 py-2">Telefono</th>
                                            <th className="px-4 py-2">Pais</th>
                                            <th className="px-4 py-2">Ciudad</th>
                                            <th className="px-4 py-2">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {empleados.map(({ id,nombre, apellido,razonSocial, cedula,telefono, pais, ciudad }) => (
                                            <tr>
                                                <td className="border px-4 py-2">{ nombre }</td>
                                                <td className="border px-4 py-2">{ apellido }</td>
                                                <td className="border px-4 py-2">{ razonSocial }</td>
                                                <td className="border px-4 py-2">{ cedula }</td>
                                                <td className="border px-4 py-2">{ telefono }</td>
                                                <td className="border px-4 py-2">{ pais }</td>
                                                <td className="border px-4 py-2">{ ciudad }</td>
                                                <td className="border px-4 py-2">
                                                    <Link tabIndex="1" className="px-4 py-2 text-sm text-white bg-blue-500 rounded" href={route("empleados.edit", id)} >Editar</Link>
                                                    <button onClick={destroy} id={id} tabIndex="-1" type="button" className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded" >Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                        {empleados.length === 0 && (
                                            <tr>
                                                <td className="px-6 py-4 border-t"colSpan="4">No contacts found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }    