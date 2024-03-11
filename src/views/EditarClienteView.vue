<script setup>
    import { onMounted, reactive } from "vue";
    import { FormKit } from "@formkit/vue";
    import { useRouter, useRoute } from "vue-router";
    import ClienteService from "../service/ClienteService";
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()
    const route = useRoute()
    
    const { id } = route.params

    const formData = reactive({})

    onMounted(() => {
        ClienteService.obtenerCliente(id)
            .then(({data}) => {
                Object.assign(formData, data)
            })
            .catch((error) => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        },
    })

    const handleSubmit = (data)  => {
       ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'inicio'}))
            .catch((error) => console.log(error))
    }
   
</script>

<template>
    <div>
        <div class=" flex justify-end">
            <RouterLink to="inicio">
                Clientes
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class=" mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se puedo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        v-model="formData.nombre"

                    />

                    <FormKit 
                        type="text"
                        label="Apellidos"
                        name="apellidos"
                        placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
                        v-model="formData.apellidos"

                    />

                    <FormKit 
                        type="email"
                        label="Email"
                        neme="email"
                        placeholder="Email del Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio', email: 'No es un email valido' }"
                        v-model="formData.email"

                    />

                    <FormKit 
                        type="text"
                        label="Telefono"
                        name="telefono"
                        placeholder="Telefono XXX-XXX-XXXX"
                        validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El formato no es valido' }"
                        v-model="formData.telefono"

                    />

                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa de Cliente"
                        v-model="formData.empresa"

                    />

                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto de Cliente"
                        v-model="formData.puesto"
                    />
                    <!--En caso de querer eliminar el imput que trae por defecto 
                        <FormKit 
                        type="submit"
                        label="Agregar Cliente"
                    /> -->

            </FormKit>
            </div>

        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>
